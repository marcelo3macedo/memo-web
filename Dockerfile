FROM node:10-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

RUN yarn start