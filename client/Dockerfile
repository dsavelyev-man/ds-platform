FROM node:18-alpine as development

WORKDIR /usr/src/client

COPY package*.json ./

COPY . .

RUN npm install
# RUN npm run build

FROM node:18-alpine as production

WORKDIR /usr/src/client

COPY package*.json ./

COPY . .

RUN npm install
