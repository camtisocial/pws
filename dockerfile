FROM node:18

WORKDIR /usr/src/app

COPY package*.json .//

RUN npm install

COPY . .

RUN npm run build

COPY certs/server.key /etc/ssl/private/server.key
COPY certs/server.cert /etc/ssl/certs/server.cert

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

