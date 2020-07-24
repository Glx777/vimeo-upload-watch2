/* eslint-disable unicorn/no-useless-undefined */
import React, { ReactElement } from "react"
import { CircularProgress, makeStyles, Box } from "@material-ui/core"
import Vimeo from "@u-wave/react-vimeo"

interface Props {
  isLoadingVideo: boolean
  videoLink: string
  disableLoadingVideo: () => void
}

const useStyles = makeStyles({
  spinner: {
    color: "#FFD700",
  },
})

export const Video = ({
  isLoadingVideo,
  videoLink,
  disableLoadingVideo,
}: Props): ReactElement => {
  const classes = useStyles()

  return (
    <Box
      minWidth="50%"
      maxWidth="50%"
      margin="0 auto"
      display={isLoadingVideo ? "flex" : "block"}
      justifyContent="center"
      alignItems="center"
    >
      {isLoadingVideo && <CircularProgress className={classes.spinner} />}
      <Vimeo video={videoLink} onReady={disableLoadingVideo} responsive />
    </Box>
  )
}
