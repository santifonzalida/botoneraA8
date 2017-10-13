#!/bin/bash
set -e
echo "Haciendo build"
ng build
echo "Iniciando docker, disfrute su botonera ingresar a http://localhost"
docker-compose up -d botonera