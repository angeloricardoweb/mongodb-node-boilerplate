# run
docker-compose up --build

#

# caso seu mongodb esteja em outro container, lembre-se de conectalos em uma mesma rede
# seguir os passos abaixo para mudar de rede se necessário
docker network disconnect rede_anterior <CONTAINER_ID>
docker network connect minha_rede <CONTAINER_ID>

# seguir os passos abaixo para conectar ao host mongo correto
# descrobrir o ip do host mongo
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' NOME_DO_CONTAINER

