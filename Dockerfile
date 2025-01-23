FROM node:16

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN apt-get update && apt-get install -y build-essential python3

RUN npm install --production --silent --legacy-peer-deps

COPY . .

CMD ["npm", "start"]
