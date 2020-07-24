import React, { ReactElement, useState, useEffect } from "react"
import { CircularProgress, makeStyles, Box } from "@material-ui/core"

import { useToggle } from "../../hooks/use-toggle"

import { VideoListItem } from "./video-list-item"

const useStyles = makeStyles({
  loaderRoot: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  loader: {
    color: "#FFD700",
  },
})

export const WatchContent = (): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [videoLink, setVideoLink] = useState<string>()
  const [videos, setVideos] = useState<Record<string, any>>()
  const [isLoadingVideo, enableLoadingVideo, disableLoadingVideo] = useToggle(
    true,
  )
  const classes = useStyles()

  const getVideosAsync = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:5000/getVideos", {
        method: "GET",
      })

      const data = await response.json()

      setVideos(data)
    } catch {}
  }

  useEffect((): void => {
    getVideosAsync()
  }, [])

  if (!videos) {
    return (
      <Box className={classes.loaderRoot}>
        <CircularProgress className={classes.loader} />
      </Box>
    )
  }

  return (
    !!videos &&
    videos.data.length > 0 && (
      <VideoListItem
        selectedIndex={selectedIndex}
        enableLoadingVideo={enableLoadingVideo}
        videoLink={videoLink}
        videos={videos}
        disableLoadingVideo={disableLoadingVideo}
        setSelectedIndex={setSelectedIndex}
        setVideoLink={setVideoLink}
        isLoadingVideo={isLoadingVideo}
      />
    )
  )
}
