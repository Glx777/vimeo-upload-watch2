import React, { ReactElement, Fragment } from "react"
import Head from "next/head"
import { useIntl } from "react-intl"

import { Container } from "./ui/container"

export const MainPage = (): ReactElement => {
  const intl = useIntl()

  return (
    <Fragment>
      <Head>
        <title>{intl.formatMessage({ id: "mainPage.title" })}</title>
      </Head>
      <Container />
    </Fragment>
  )
}
