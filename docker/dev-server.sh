#!/bin/bash
# runs webpack in react container

NODE_ENV=${1:-dev_server}
echo "Running with NODE_ENV=$NODE_ENV"

# stop and remove the containers if they are running
stop_and_remove_container()
{
    docker stop js-playground
    docker rm js-playground
}
stop_and_remove_container || true

# run the js-playground container
docker run \
    -v $(pwd)/src:/react/src \
    -v $(pwd)/docker:/react/docker \
    -v $(pwd)/webpack:/react/webpack \
    --name=js-playground \
    -e NODE_ENV=$NODE_ENV \
    --publish 3300:3300 \
    --entrypoint=/react/docker/entrypoints/dev-server.sh \
    -t js-playground