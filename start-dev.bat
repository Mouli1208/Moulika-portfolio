@echo off
title ApplyWizz Development Server
cd /d "%~dp0"

echo Starting ApplyWizz Development Server...
echo.
echo Server will run at: http://localhost:8080/
echo.
echo DO NOT CLOSE THIS WINDOW - It keeps your site running!
echo.
pause

call npm run dev
pause
