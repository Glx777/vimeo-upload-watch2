import React, { ReactNode } from "react"

import { t } from "../../i18n/i18n"

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
    label: t("mainPage.upload"),
    value: "0",
    children: <UploadContentForm />,
  },
  {
    id: 1,
    label: t("mainPage.watch"),
    value: "1",
    children: <WatchContent />,
  },
]
