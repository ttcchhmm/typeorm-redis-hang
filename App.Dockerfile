FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i
COPY ./src ./src
COPY tsconfig.json ./tsconfig.json
RUN ./node_modules/.bin/tsc
EXPOSE 3000

WORKDIR /usr/src/app/build/
CMD ["node", "./index.js"]