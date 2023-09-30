# Use a imagem base do Node.js
FROM node:18.3.0-alpine3.14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o contêiner
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos de aplicativo para o contêiner
COPY . .

# Exponha a porta em que o aplicativo Node.js será executado
EXPOSE 4003

# Comando para iniciar o aplicativo com Nodemon
CMD ["npm", "run", "dev"]
