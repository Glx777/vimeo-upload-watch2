FROM node:14.5.0 as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY packages/api/ packages/api/
COPY packages/web/ packages/web/

RUN yarn

WORKDIR /usr/src/app/packages/api

RUN yarn build

WORKDIR /usr/src/app/packages/web

RUN yarn build

FROM node:14.5.0

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

COPY --from=builder /usr/src/app/packages/api/package.json packages/api/package.json
COPY --from=builder /usr/src/app/packages/api/dist/ packages/api/dist/

COPY --from=builder /usr/src/app/packages/web/package.json packages/web/package.json
COPY --from=builder /usr/src/app/packages/web/.next/ packages/web/.next/
COPY --from=builder /usr/src/app/packages/web/public/ packages/web/public/
COPY --from=builder /usr/src/app/packages/web/dist/ packages/web/dist/
COPY --from=builder /usr/src/app/packages/web/lang/ packages/web/lang/

RUN yarn install --production

WORKDIR /usr/src/app/packages/web

ENV NODE_ENV=production

WORKDIR /usr/src/app

EXPOSE 3000
EXPOSE 5000

CMD ["yarn", "start:prod"]