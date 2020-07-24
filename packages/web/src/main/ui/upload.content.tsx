import React, { ReactElement, useState, ChangeEvent } from "react"
import { Input, Button, Box } from "@material-ui/core"
import styled from "styled-components"

const VIDEO_FORMAT = "video/*"
const api_url = "http://localhost:5000/upload"

const Root = styled(Box)`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`

const StyledInput = styled(Input)`
  font-size: 30px !important;
  color: #fff !important;
  width: 370px;
  margin: 0 20px 0 0;
`

const StyledButton = styled(Button)`
  font-size: 28px !important;
  color: #fff !important;
  border-color: #fff !important;
  padding: 15px 25px !important;
`

export const UploadContent = (): ReactElement => {
  const [file, setFile] = useState<File>()

  const uploadImageAsync = async (): Promise<void> => {
    try {
      const formData = new FormData()
      formData.append("video", file, "123")

      const response = await fetch(api_url, {
        method: "POST",
        body: formData,
      })

      const b = await response.json()

      // eslint-disable-next-line no-console
      console.log(b, response)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
  }

  return (
    <Root>
      <StyledInput
        type="file"
        inputProps={{
          accept: VIDEO_FORMAT,
        }}
        disableUnderline
        onChange={handleChange}
      />
      <StyledButton onClick={uploadImageAsync} variant="outlined">
        Upload
      </StyledButton>
    </Root>
  )
}
