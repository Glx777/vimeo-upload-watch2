/* eslint-disable promise/prefer-await-to-callbacks, unicorn/no-null */
import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
  Body,
} from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { diskStorage } from "multer"
import { extname } from "path"

import { AppService } from "./app.service"

export interface UploadVideoInput {
  name: string
  description: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("upload")
  @UseInterceptors(
    FileInterceptor("video", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (_request, file, callback) => {
          const randomName = new Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("")
          return callback(null, `${randomName}${extname(file.originalname)}`)
        },
      }),
    }),
  )
  async uploadVideoAsync(
    @UploadedFile() file: Record<string, any>,
    @Body() input: UploadVideoInput,
  ): Promise<string> {
    return await this.appService.uploadVideoAsync(file.filename, input)
  }

  @Get("getVideos")
  async getVideosAsync(): Promise<any> {
    return await this.appService.getVideosAsync()
  }
}
