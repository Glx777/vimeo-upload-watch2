import { NestFactory } from "@nestjs/core"

import { AppModule } from "./app/app.module"
import { appConfig } from "./config/app.config"

async function bootstrapAsync() {
  const app = await NestFactory.create(AppModule, { cors: true })
  await app.listen(appConfig.port)
}
bootstrapAsync()
