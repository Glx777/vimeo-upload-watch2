/* eslint-disable no-secrets/no-secrets, @typescript-eslint/no-var-requires */
import { Injectable } from "@nestjs/common"
import { Vimeo } from "vimeo"
const path = require("path")

import { UploadVideoInput } from "./app.controller"

const clientId = "298e923a69d644f11d1c48bbc374c391405bfb73"
const clientSecret =
  "2hQWyO9JuPFNdqGa0895inUKu7IfS6R12vMon4OD9U4Ta+06r1EEb5ysYNQqXEPTF/UpVwSoTUb0mCc68ruw7Op1FhCrbSuI+aaSnqdMhgUGQxOROaajF8JRo96TBiSX"
const accessToken = "8663b5c14971466c6b6e949b7ccb384c"

const client = new Vimeo(clientId, clientSecret, accessToken)

const getVideos = (): Promise<any> =>
  new Promise((resolve, reject): void => {
    client.request(
      {
        method: "GET",
        path: `/users/120035564/videos`,
      },
      (error, body): void => {
        if (error) {
          reject()
        } else {
          resolve(body)
        }
      },
    )
  })

@Injectable()
export class AppService {
  async uploadVideoAsync(
    filename: string,
    input: UploadVideoInput,
  ): Promise<string> {
    const absolutePath = path.resolve("./uploads/")
    console.log(absolutePath, absolutePath + filename)
    const uploadVideo = (): Promise<string> =>
      new Promise((resolve, reject): void => {
        client.upload(
          `${absolutePath}/${filename}`,
          {
            name: input.name,
            description: input.description,
          },
          function (uri) {
            resolve("hooray")
            console.log("Your video URI is: " + uri)
          },
          function (bytes_uploaded, bytes_total) {
            const percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2)
            console.log(bytes_uploaded, bytes_total, percentage + "%")
          },
          function (error) {
            reject()
            console.log("Failed because: " + error)
          },
        )
      })

    return await uploadVideo()
  }

  async getVideosAsync(): Promise<any> {
    return await getVideos()
  }
}
