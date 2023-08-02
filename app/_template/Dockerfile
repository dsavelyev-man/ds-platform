FROM node:18-alpine as development

RUN apk --update add postgresql-client

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18-alpine as production

RUN apk --update add postgresql-client

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

CMD ["node", "dist/main"]