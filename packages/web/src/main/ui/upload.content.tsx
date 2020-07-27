/* eslint-disable unicorn/no-useless-undefined */
import React, { ReactElement, ChangeEvent } from "react"
import { Input, Button, Box, Typography } from "@material-ui/core"
import styled from "styled-components"
import { FormikProps, Form, ErrorMessage } from "formik"

import { FormInput } from "./upload.content.form"

const VIDEO_FORMAT = "video/*"

const Root = styled(Form)`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 66px;
  max-height: 66px;
`

const StyledInput = styled(Input)`
  font-size: 30px !important;
  color: #fff !important;
  width: 400px;
  margin: 0 20px 0 0;
`

const StyledButton = styled(Button)`
  font-size: 28px !important;
  color: #fff !important;
  border-color: #fff !important;
  padding: 15px 25px !important;
`

const Text = styled(Typography)`
  color: #ff1493;
`

export const UploadContentView = ({
  setFieldValue,
}: FormikProps<FormInput>): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile: File | undefined = event.target.files[0]
    setFieldValue("video", selectedFile || "")
  }

  return (
    <Root>
      <StyledBox>
        <StyledInput
          type="file"
          inputProps={{
            accept: VIDEO_FORMAT,
          }}
          disableUnderline
          name="video"
          onChange={handleChange}
        />
        <ErrorMessage name="video">
          {(message: string): ReactElement => <Text>{message}</Text>}
        </ErrorMessage>
      </StyledBox>
      <StyledButton type="submit" variant="outlined">
        Upload
      </StyledButton>
    </Root>
  )
}
