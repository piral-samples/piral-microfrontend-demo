#!/bin/bash

declare -a pilets=("team-blue" "team-green" "team-red")

for pilet in "${pilets[@]}";
do
    echo ${pilet};
    cd ${pilet};
    npm run upload;
    rm *.tgz
    cd ..
done
