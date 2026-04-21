@echo off
REM Start ApplyWizz Dev Server at system startup
REM This runs minimized in the background

cd /d "c:\Users\mouli\applywizz-moulikamanthripragada-5259-main\applywizz-moulikamanthripragada-5259-main"

REM Run npm dev server indefinitely
:restart
cmd /c npm run dev

REM If it crashes, wait 5 seconds then restart
timeout /t 5
goto restart
