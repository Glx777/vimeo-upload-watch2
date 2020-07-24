/* eslint-disable unicorn/no-useless-undefined, security/detect-non-literal-fs-filename */
import React, { ReactElement, Fragment, SetStateAction, Dispatch } from "react"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import styled from "styled-components"

import { Video } from "./video"

interface Props {
  selectedIndex: number
  enableLoadingVideo: () => void
  videoLink: string
  videos: any
  setSelectedIndex: Dispatch<SetStateAction<number>>
  setVideoLink: Dispatch<SetStateAction<string | undefined>>
  isLoadingVideo: boolean
  disableLoadingVideo: () => void
}

const StyledListItemText = styled(ListItemText)`
  font-size: 40px;
  margin-left: 30px;
  color: #fff;
`

export const VideoListItem = ({
  selectedIndex,
  enableLoadingVideo,
  videoLink,
  videos,
  setSelectedIndex,
  setVideoLink,
  isLoadingVideo,
  disableLoadingVideo,
}: Props): ReactElement => (
  <List component="nav">
    {videos.data.map(
      (video, index: number): ReactElement => (
        <Fragment key={video.link}>
          <ListItem
            button
            selected={selectedIndex === index}
            onClick={() => {
              enableLoadingVideo()

              if (selectedIndex === index) {
                setSelectedIndex(-1)
                setVideoLink(undefined)

                return
              }

              setSelectedIndex(index)
              setVideoLink(video.link)
            }}
          >
            <ListItemIcon>
              <img
                width={video.pictures.sizes[1].width}
                height={video.pictures.sizes[1].height}
                src={video.pictures.sizes[1].link}
              />
            </ListItemIcon>
            <StyledListItemText primary={video.name} disableTypography />
          </ListItem>

          {videoLink && selectedIndex === index && (
            <Video
              videoLink={videoLink}
              isLoadingVideo={isLoadingVideo}
              disableLoadingVideo={disableLoadingVideo}
            />
          )}
        </Fragment>
      ),
    )}
  </List>
)
