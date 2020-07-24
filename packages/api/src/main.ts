import { NestFactory } from "@nestjs/core"

import { AppModule } from "./app/app.module"

const PORT = 5000

async function bootstrapAsync() {
  const app = await NestFactory.create(AppModule, { cors: true })
  await app.listen(PORT)
}
bootstrapAsync()
