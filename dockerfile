FROM node:lts
WORKDIR /home/api-vendas


COPY package*.json ./

COPY yarn.lock .

RUN yarn 

COPY . .

EXPOSE 3333

CMD ["yarn","dev"]