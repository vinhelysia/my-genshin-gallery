@echo off
setlocal enabledelayedexpansion
set count=0
for %%f in (*.png) do (
    set /a count+=1
    echo Converting !count! of 21: %%f
    cwebp -q 80 "%%f" -o "%%~nf.webp"
)
echo All 21 files converted!
pause