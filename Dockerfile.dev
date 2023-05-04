FROM node:16-alpine AS base
ENV PORT 8000
EXPOSE 8000

RUN apk --no-cache add curl

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN cd /usr/src/app 

RUN npm install

# COPY .env.local /usr/src/app/.env.local

CMD "npm" "start"
