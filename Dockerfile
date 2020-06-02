FROM node:latest

WORKDIR /usr/src/app
EXPOSE 80
ENV PORT 80

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .
RUN yarn build

CMD ["yarn", "start"]

