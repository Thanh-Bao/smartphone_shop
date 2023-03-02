FROM node

WORKDIR /usr/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --production

COPY ./build ./build
COPY ./client ./client
COPY ./resources ./resources
COPY ./env ./env



ENV PORT=3000
EXPOSE 3000

CMD [ "yarn", "start" ]
