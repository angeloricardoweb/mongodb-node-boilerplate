docker-compose up --build

# caso seu mongodb esteja em outro container, lembre-se de conectalos em uma mesma rede
# seguir os passos abaixo para mudar de rede se necessário
docker network disconnect rede_anterior <CONTAINER_ID>
docker network connect minha_rede <CONTAINER_ID>