FROM node:18-alpine as development

RUN apk --update add postgresql-client

WORKDIR /usr/src/gateway

COPY package*.json ./

COPY . .

RUN npm install

FROM node:18-alpine as production

RUN apk --update add postgresql-client

WORKDIR /usr/src/gateway

COPY package*.json ./

COPY . .

RUN npm install
