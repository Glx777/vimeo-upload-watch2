import * as yup from "yup"

export const UploadVideoInputSchema = yup.object().shape({
  video: yup
    .mixed()
    .required("File is required")
    .test(
      "is video",
      "File is not a video",
      (value: Record<string, any> | undefined) => {
        if (value) {
          return value.type.startsWith("video/")
        }

        return false
      },
    ),
})
