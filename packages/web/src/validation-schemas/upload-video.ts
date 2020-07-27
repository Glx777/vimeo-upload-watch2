import * as yup from "yup"

export const UploadVideoInputSchema = yup.object().shape({
  video: yup
    .mixed()
    .required("mainPage.fileIsRequired")
    .test(
      "is video",
      "mainPage.notAVideo",
      (value: Record<string, any> | undefined) => {
        if (value) {
          return value.type.startsWith("video/")
        }

        return false
      },
    ),
})
