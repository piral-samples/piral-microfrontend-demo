#!/bin/bash

declare -a pilets=("team-blue" "team-green" "team-red")

cd app-shell
rm -rf node_modules
rm -f package-lock.json
npm i
npm run build
cd ..

for pilet in "${pilets[@]}";
do
    echo ${pilet};
    cd ${pilet};
    rm -rf node_modules
    rm -f package-lock.json
    npm i
    cd ..
done
