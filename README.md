<div align="center">
  <h1>Vimeo-upload-watch</h1>
</div>

## How to start

  1. Clone repository

  ```bash
  git clone git@gitlab.com:BraveDevelopers/transportation.git
  cd transportation
  ```

  2. Install dependencies

- Run `yarn install`

3. Start project

- Run `yarn start`
- Open <http://localhost:3000> in your browser

## How to dockerize

- Run `docker-compose -f deploy/docker-compose.production.yml build` to build image
- Run `docker-compose -f deploy/docker-compose.production.yml up -d` to start container
- Run `docker-compose -f deploy/docker-compose.production.yml down` to stop container
