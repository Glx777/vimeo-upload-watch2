FROM node:14.5.0

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY packages/web/package.json ./packages/web/

RUN yarn

COPY ./packages/web/ ./packages/web/

WORKDIR /usr/src/packages/web/

RUN yarn build

ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "start"]