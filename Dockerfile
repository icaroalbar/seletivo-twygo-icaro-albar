# Use uma imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o yarn.lock
COPY package.json yarn.lock ./

# Instale as dependências do projeto
RUN yarn

# Copie o restante dos arquivos do projeto para o container
COPY . .

# Construa a aplicação
RUN yarn build

# Expõe a porta que a aplicação vai rodar
EXPOSE 5173

# Comando para iniciar a aplicação
CMD [ "yarn", "preview" ]
