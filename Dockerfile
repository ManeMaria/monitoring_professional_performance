# Etapa 1: Build
## Melhor compatibilidade com binários nativos do Rollup/Vite
## Evita problemas com dependências opcionais do npm no Alpine
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Gera o build de produção do Vite
RUN npm run build

# Etapa 2: Servidor de produção

## Mantém a imagem menor e mantém a compatibilidade
FROM node:20-slim AS production

WORKDIR /app

# instala o servidor estático
RUN npm install -g serve

# copia apenas o resultado do build
COPY . .
EXPOSE 3000

# comando padrão para servir
CMD ["serve", "-s", "dist", "-l", "3000"]

