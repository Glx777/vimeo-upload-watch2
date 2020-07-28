/* eslint-disable unicorn/no-null */
import React, { ReactElement } from "react"
import { Formik } from "formik"
import { useIntl } from "react-intl"

import { UploadVideoInputSchema } from "src/validation-schemas/upload-video"

import { UploadContentView } from "./upload.content"

export interface FormInput {
  video: File | string
}

const initialValues: FormInput = {
  video: "",
}

const api_url = "http://localhost:5000/upload"

export const UploadContentForm = (): ReactElement => {
  const intl = useIntl()

  const handleSubmitAsync = async (values: FormInput): Promise<void> => {
    try {
      const formData = new FormData()

      if (values.video) {
        formData.append("video", values.video)
      } else {
        formData.delete("video")
      }

      const response = await fetch(api_url, {
        method: "POST",
        body: formData,
      })

      if (response.status === 201) {
        alert(intl.formatMessage({ id: "mainPage.successfullyUploaded" }))
      }
    } catch {}
  }

  return (
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
}
