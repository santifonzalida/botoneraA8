#!/bin/bash
set -e
echo "Iniciando docker"
docker-compose up -d botonera
echo "Mostrando logs, Disfrute su aplicacion :)"
docker-compose logs -f botonera