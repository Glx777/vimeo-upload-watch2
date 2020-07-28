import React, { ReactNode } from "react"

import { UploadContentForm } from "./upload.content.form"
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
    label: "mainPage.upload",
    value: "0",
    children: <UploadContentForm />,
  },
  {
    id: 1,
    label: "mainPage.watch",
    value: "1",
    children: <WatchContent />,
  },
]
