#!/bin/bash

declare -a pilets=("team-blue" "team-green" "team-red")

cd app-shell
npm i
npm run build
npm pack
cd ..

for pilet in "${pilets[@]}";
do
    echo ${pilet};
    cd ${pilet};
    npm i ../app-shell/app-shell-1.0.0.tgz;
    cd ..
done
