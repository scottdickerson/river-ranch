@echo off
TITLE Chrome Kiosk Mode
taskkill /f /im explorer.exe
start "" "c:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --start-fullscreen --incognito --disable-pinch --overscroll-history-navigation=0 /max http://localhost:5000