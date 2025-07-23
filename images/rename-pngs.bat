@echo off
setlocal enabledelayedexpansion

set counter=56

for %%f in (*.png) do (
    set "num=0!counter!"
    set "num=!num:~-2!"
    ren "%%f" "!num!.png"
    set /a counter+=1
)

echo Renaming complete!
pause
