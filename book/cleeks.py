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
def svg_compress() -> None:
    from cleek import run

    run(
        (
            'svgcleaner',
            '--remove-title',
            'no',
            'map-layer.svg',
            'map-layer-compressed.svg',
        ),
        cwd=_get_project_dir(),
    )


@_task
def esbuild(
    clean: bool = False,
    production: bool = False,
    watch: bool = False,
) -> None:
    project_dir = _get_project_dir()
    dist_dir = project_dir / 'dist'

    if clean:
        import cleek

        cleek.clean(dist_dir)

    # copy()
    import subprocess

    args = ['./esbuild.mts']
    append = args.append

    if production:
        append('-p')

    if watch:
        append('-w')

    from fds.errors import exit_on_called_process_error

    print(project_dir)

    with exit_on_called_process_error:
        subprocess.run(args, cwd=project_dir, check=True)


@_task
def browse() -> None:
    from webbrowser import Chrome

    chrome = Chrome(name='/usr/bin/google-chrome-stable')
    chrome.open('http://127.0.0.1:8000/')
