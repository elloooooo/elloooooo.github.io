@echo off
title 通过 Git 同步.. 
::Start...
echo Start synchronizing...

echo Commit changes...

:: get date and time 
for /f "delims=" %%a in ('date/t') do @set mydate=%%a 
for /f "delims=" %%a in ('time/t') do @set mytime=%%a 
set fvar=%mydate%%mytime% 

echo %fvar%
:: add all new files 
call git add . 
call git commit -a -m "Automated commit on %fvar%"

:: push to the server. Default in "origin" remote, "master" branch
call git push
::可以让窗口不关闭
cmd
exit

