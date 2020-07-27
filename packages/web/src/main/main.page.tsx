import React, { ReactElement, Fragment } from "react"
import Head from "next/head"

import { t } from "../i18n/i18n"

import { Container } from "./ui/container"

export const MainPage = (): ReactElement => (
  <Fragment>
    <Head>
      <title>{t("mainPage.title")}</title>
    </Head>
    <Container />
  </Fragment>
)
