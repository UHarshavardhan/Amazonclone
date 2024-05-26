FROM node:22

WORKDIR /usr/backend/index

COPY  package.json ./

RUN npm install



COPY . .

EXPOSE 8000

CMD [ "npm","start" ]




