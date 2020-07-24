import React, { ReactNode } from "react"

import { UploadContent } from "./upload.content"
import { WatchContent } from "./watch.content"

interface Tab {
  id: number
  label: string
  value: string
  children: ReactNode
}

export const tabs: Tab[] = [
  {
    id: 0,
    label: "Upload",
    value: "0",
    children: <UploadContent />,
  },
  {
    id: 1,
    label: "Watch",
    value: "1",
    children: <WatchContent />,
  },
]
