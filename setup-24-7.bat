@echo off
setlocal enabledelayedexpansion

echo.
echo ========================================
echo   ApplyWizz 24/7 Server Setup
echo ========================================
echo.

set batchFile=c:\Users\mouli\applywizz-moulikamanthripragada-5259-main\applywizz-moulikamanthripragada-5259-main\start-server-24-7.bat
set taskName=ApplyWizz-Dev-Server-24-7

echo Creating scheduled task...
echo.

REM Create the scheduled task to run at system startup
cmd /c schtasks /create /tn "%taskName%" /tr "%batchFile%" /sc onstart /rl highest /f

if %errorlevel% equ 0 (
    echo.
    echo ✓ SUCCESS!
    echo.
    echo Your dev server is now set to:
    echo • Start automatically at system boot
    echo • Run 24/7 in the background
    echo • Auto-restart if it crashes
    echo.
    echo Access your site at: http://localhost:8080/
    echo.
) else (
    echo.
    echo ✗ ERROR: Could not create scheduled task
    echo.
)

echo Press any key to close this window...
pause > nul
