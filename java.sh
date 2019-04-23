#!/bin/bash

program=$1
IFS=$'\n' GLOBIGNORE='*' command eval  'lines=($(java_getJar.sh))'

printf '%s\n', "${lines[1]}"
