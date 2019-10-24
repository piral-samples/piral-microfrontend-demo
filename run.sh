#!/bin/bash

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

dldir=sample-pilet-service

if [ ! -d "${dldir}" ]; then
    git clone https://github.com/smapiot/${dldir}.git ;
    cd ${dldir} ;
    npm i && npm run build ;
else
    cd ${dldir} ;
fi

npm start &
cd ..

./publish.sh

cd app-shell
npm start
