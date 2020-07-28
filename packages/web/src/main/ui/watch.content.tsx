import React, { ReactElement, useState, useEffect } from "react"
import { CircularProgress, Box } from "@material-ui/core"
import styled from "styled-components"

import { useToggle } from "src/hooks/use-toggle"

import { VideoListItem } from "./video-list-item"

const SpinnerContainer = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Spinner = styled(CircularProgress)`
  color: #ffd700 !important;
`

export const WatchContent = (): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [videoLink, setVideoLink] = useState<string>()
  const [videos, setVideos] = useState<Record<string, any>[]>()
  const [isLoadingVideo, enableLoadingVideo, disableLoadingVideo] = useToggle(
    true,
  )

  const getVideosAsync = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:5000/getVideos", {
        method: "GET",
      })

      const data = await response.json()

      setVideos(data.data)
    } catch {}
  }

  useEffect((): void => {
    getVideosAsync()
  }, [])

  if (!videos) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  return (
    videos.length > 0 && (
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
