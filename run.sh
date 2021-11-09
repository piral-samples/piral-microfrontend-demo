#!/bin/bash

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

npx sample-pilet-service &

until $(curl --output /dev/null --silent --head --fail http://localhost:9000/api/v1/pilet); do
  sleep 2
done

./publish.sh

cd app-shell
npm start
