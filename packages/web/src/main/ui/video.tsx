/* eslint-disable unicorn/no-useless-undefined */
import React, { ReactElement } from "react"
import { CircularProgress, Box } from "@material-ui/core"
import Vimeo from "@u-wave/react-vimeo"
import styled from "styled-components"

interface Props {
  isLoadingVideo: boolean
  videoLink: string
  disableLoadingVideo: () => void
}

const Spinner = styled(CircularProgress)`
  color: #ffd700 !important;
`

export const Video = ({
  isLoadingVideo,
  videoLink,
  disableLoadingVideo,
}: Props): ReactElement => (
  <Box
    minWidth="50%"
    maxWidth="50%"
    margin="0 auto"
    display={isLoadingVideo ? "flex" : "block"}
    justifyContent="center"
    alignItems="center"
  >
    {isLoadingVideo && <Spinner />}
    <Vimeo video={videoLink} onReady={disableLoadingVideo} responsive />
  </Box>
)
