FROM node:14.5.0 as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY packages/api/ ./packages/api/
COPY packages/web/ ./packages/web/

RUN yarn

WORKDIR /usr/src/app/packages/api/

RUN yarn build

WORKDIR /usr/src/app/packages/web/

RUN yarn build

FROM node:14.5.0

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

COPY --from=builder /usr/src/app/packages/api/package.json /usr/src/app/packages/api/package.json
COPY --from=builder /usr/src/app/packages/api/dist /usr/src/app/packages/api/dist
COPY --from=builder /usr/src/app/packages/web/package.json /usr/src/app/packages/web/package.json
COPY --from=builder /usr/src/app/packages/web/.next /usr/src/app/packages/web/.next

RUN yarn install --production

EXPOSE 3000
EXPOSE 5000

CMD ["yarn", "start:prod"]