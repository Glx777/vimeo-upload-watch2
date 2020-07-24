import config = require("config")

export interface AppConfig {
  port: number
}

const configFromFile = config.get<AppConfig>("app")

export const appConfig: AppConfig = {
  port: configFromFile.port,
}
