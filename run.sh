#!/bin/bash

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

if [ ! -d "$dldir" ]; then
    git clone https://github.com/smapiot/sample-pilet-service.git ;
    cd sample-pilet-service ;
    npm i && npm run build ;
else
    cd sample-pilet-service ;
fi

npm start &
cd ..

./publish.sh

cd app-shell
npm start
