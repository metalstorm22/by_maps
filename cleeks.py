from pathlib import Path
import subprocess
from typing import TYPE_CHECKING as _TYPE_CHECKING

from cleek import task as _task
from fds import once as _once

if _TYPE_CHECKING:
    from pathlib import Path as _Path


@_once
def _get_project_dir() -> '_Path':
    from cleek import get_project_path
    return get_project_path().parent


def copy() -> None:
    import shutil

    dist_dir = get_deploy_dir()
    dist_dir.mkdir(parents=True, exist_ok=True)
    
    shutil.rmtree(dist_dir)

    shutil.copytree(get_explore_dir(), dist_dir, dirs_exist_ok=True)

    book_dir = dist_dir / 'book'
    book_dir.mkdir(parents=True, exist_ok=True)
    shutil.copytree(get_book_dir(), book_dir, dirs_exist_ok=True)


def get_explore() -> Path:
    project_dir = _get_project_dir()
    return project_dir / 'explore'


def get_explore_dir() -> Path:
    return get_explore() / 'dist'


def get_book() -> Path:
    project_dir = _get_project_dir()
    return project_dir / 'book'


def get_book_dir() -> Path:
    return get_book() / 'dist'


def get_deploy_dir() -> Path:
    project_dir = _get_project_dir()
    return project_dir / 'build'


@_task
def esbuild(
    clean: bool = False,
) -> None:
    deploy_dir = get_deploy_dir()
    explore_dir = get_explore()
    book_dir = get_book()

    if clean:
        import cleek
        cleek.clean(deploy_dir)

    import subprocess

    from fds.errors import exit_on_called_process_error

    cleeks_args = ['clk', 'esbuild', '-c', '-p']

    with exit_on_called_process_error:
        subprocess.run(cleeks_args, cwd=book_dir, check=True)

    with exit_on_called_process_error:
        subprocess.run(cleeks_args, cwd=explore_dir, check=True)

    copy()


@_task
def deploy() -> None:
    esbuild()
    args = ['deploy', get_deploy_dir(), 'boroughyards.fds.im'] 
    subprocess.run(args, check=True)


