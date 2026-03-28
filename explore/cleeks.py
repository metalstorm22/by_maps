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

    return get_project_path()


@_task
def clean(dry_run: bool = False) -> None:
    from cleek import clean

    clean(_get_project_dir(), dry_run=dry_run)


@_task
def setup() -> None:
    from cleek import run

    run(('pnpm', 'i'), cwd=_get_project_dir())


@_task
def copy() -> None:
    from pathlib import Path
    import shutil

    project_dir = _get_project_dir()
    dist_dir = project_dir / 'dist'
    dist_dir.mkdir(parents=True, exist_ok=True)

    def copy(src_path: Path | str) -> None:
        dst_path = dist_dir / Path(src_path).name
        shutil.copy(src_path, dst_path)

    copy('map-layer.png')
    copy('popup.png')

    for marker_path in (project_dir / 'markers').iterdir():
        copy(marker_path)


def get_prod_dir() -> Path:
    project_dir = _get_project_dir()
    return project_dir / 'dist'

@_task
def esbuild(
    clean: bool = False,
    production: bool = False,
    watch: bool = False,
) -> None:
    project_dir = _get_project_dir()
    dist_dir = get_prod_dir()

    if clean:
        import cleek

        cleek.clean(dist_dir)

    copy()
    import subprocess

    args = ['./esbuild.mts']
    append = args.append

    if production:
        append('-p')

    if watch:
        append('-w')

    from fds.errors import exit_on_called_process_error

    with exit_on_called_process_error:
        subprocess.run(args, cwd=project_dir, check=True)


@_task
def deploy() -> None:

    args = ['deploy', get_prod_dir(), 'boroughyards.fds.im'] 
    subprocess.run(args, check=True)


@_task
def browse() -> None:
    from webbrowser import Chrome

    chrome = Chrome(name='/usr/bin/google-chrome-stable')
    chrome.open('http://127.0.0.1:8000/')

