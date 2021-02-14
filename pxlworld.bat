@echo off
cls
start ngrok start -config=C:\Users\"Type ur thing here"\.ngrok2\ngrok.yml 7777
cd /d d:\Games\Steam Games\steamapps\common\Terraria
start TerrariaServer.exe -config la.txt
