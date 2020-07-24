import React, { ReactElement, Fragment } from "react"
import Head from "next/head"

import { Container } from "./ui/container"

export const MainPage = (): ReactElement => (
  <Fragment>
    <Head>
      <title>Video upload</title>
    </Head>
    <Container />
  </Fragment>
)
