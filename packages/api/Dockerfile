FROM node:14.5.0

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY packages/api/ ./packages/api/
COPY packages/web/ ./packages/web/

RUN yarn

WORKDIR /usr/src/app/packages/api/

RUN yarn build

ENV NODE_ENV production

WORKDIR /usr/src/app/packages/web/

RUN yarn build

ENV NODE_ENV production

EXPOSE 3000
EXPOSE 5000

WORKDIR /usr/src/app

CMD ["yarn", "start"]