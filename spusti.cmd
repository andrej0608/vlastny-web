@echo off
title Osobny web - lokalny server

REM ===========================================================================
REM  Spusti webovu stranku na tomto pocitaci.
REM  Staci dvakrat kliknut na tento subor.
REM
REM  Poznamka: text je zamerne bez diakritiky - okno prikazoveho riadku
REM  ju zobrazuje nespolahlivo.
REM ===========================================================================

REM Prepni sa do priecinka, v ktorom lezi tento subor.
cd /d "%~dp0"

REM --- Najdi Node.js -------------------------------------------------------
REM  Po instalacii Node.js ho stare okna terminalu este nemusia "vidiet",
REM  preto ho hladame priamo na disku a pridame do PATH.
set "NODEDIR="
if exist "%ProgramFiles%\nodejs\node.exe" set "NODEDIR=%ProgramFiles%\nodejs"
if not defined NODEDIR if exist "%ProgramFiles(x86)%\nodejs\node.exe" set "NODEDIR=%ProgramFiles(x86)%\nodejs"
if not defined NODEDIR if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" set "NODEDIR=%LOCALAPPDATA%\Programs\nodejs"
if defined NODEDIR set "PATH=%NODEDIR%;%PATH%"

where npm >nul 2>&1
if errorlevel 1 goto nonode

REM --- Prve spustenie: doinstaluj potrebne subory ---------------------------
if not exist "node_modules\" goto install
goto run

:install
echo.
echo   Prve spustenie - instalujem potrebne subory.
echo   Moze to trvat 1-2 minuty. Netreba nic robit.
echo.
call npm install
if errorlevel 1 goto failed
echo.

:run
echo.
echo   ============================================================
echo.
echo     Web bezi na:    http://localhost:3000
echo.
echo     Prehliadac sa otvori automaticky o par sekund.
echo.
echo     Zastavenie:     Ctrl + C   alebo zatvor toto okno
echo.
echo   ============================================================
echo.

REM Pockaj, kym server nabehne, az potom otvor prehliadac.
start "" /min cmd /c "timeout /t 6 /nobreak >nul && start http://localhost:3000"

REM Tento riadok bezi, kym server nezastavis.
call npm run dev
goto end

REM --- Chybove stavy -------------------------------------------------------
:nonode
echo.
echo   Node.js sa na tomto pocitaci nenasiel.
echo.
echo   Stiahni si ho z  https://nodejs.org  (vyber verziu LTS),
echo   nainstaluj a potom spusti tento subor znova.
echo.
pause
exit /b 1

:failed
echo.
echo   Instalacia zlyhala.
echo   Skontroluj pripojenie na internet a skus to znova.
echo.
pause
exit /b 1

:end
echo.
echo   Server bol zastaveny. Okno mozes zavriet.
echo.
pause
