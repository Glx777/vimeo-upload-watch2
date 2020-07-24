/* eslint-disable unicorn/no-null */
import React, { ReactElement } from "react"
import { Formik } from "formik"

import { UploadVideoInputSchema } from "../../validation-schemas/upload-video"

import { UploadContentView } from "./upload.content"

export interface FormInput {
  video: File | string
}

const initialValues: FormInput = {
  video: "",
}

const api_url = "http://localhost:5000/upload"

const handleSubmitAsync = async (values: FormInput): Promise<void> => {
  try {
    const formData = new FormData()

    if (values.video) {
      formData.append("video", values.video)
    } else {
      formData.delete("video")
    }

    await fetch(api_url, {
      method: "POST",
      body: formData,
    })
  } catch {}
}

export const UploadContentForm = (): ReactElement => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmitAsync}
    component={UploadContentView}
    validateOnBlur={false}
    validateOnChange={false}
    enableReinitialize={false}
    validationSchema={UploadVideoInputSchema}
  />
)
