/* eslint-disable filenames/match-regex */
import React, { Fragment, ReactElement } from "react"
import { normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"
import {
  default as NextApp,
  AppProps,
  AppContext,
  AppInitialProps,
} from "next/app"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-size: 16px;
    font-weight: normal;
    background: linear-gradient(to right, #159957, #155799);
    width: 100vw;
    height: 100vh;
  }
`

class App extends NextApp<AppProps> {
  // eslint-disable-next-line no-restricted-syntax
  static async getInitialProps({
    Component,
    ctx,
  }: AppContext): Promise<AppInitialProps & any> {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return pageProps
  }

  render(): ReactElement<AppProps> {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Component {...pageProps} />
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App
