#!/bin/bash

declare -a projects=("app-shell" "team-blue" "team-green" "team-red")

for project in "${projects[@]}";
do
    echo ${project};
    cd ${project};
    npm i;
    cd ..
done
