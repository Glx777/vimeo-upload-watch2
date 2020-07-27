<div align="center">
  <h1>Vimeo-upload-watch</h1>
</div>

## How to run

  1. Clone and install dependencies

  ```bash
  git clone git@gitlab.com:BraveDevelopers/transportation.git
  cd transportation
  yarn install
  ```

  2. Install dependencies

- `yarn install`

  3. Start project

- `yarn start`

## How to dockerize

- Run `docker-compose -f deploy/docker-compose.production.yml build` to build image
- Run `docker-compose -f deploy/docker-compose.production.yml up -d` to start container
- Run `docker-compose -f deploy/docker-compose.production.yml down` to stop container
