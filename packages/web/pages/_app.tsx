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
import { RawIntlProvider } from "react-intl"

import { intl } from "../src/i18n/i18n"

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
  state = {
    locale: "ru",
  }

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

  componentDidMount(): void {
    this.setState({
      locale: window.navigator.language || "en",
    })
  }

  render(): ReactElement<AppProps> {
    const { Component, pageProps } = this.props
    const { locale } = this.state

    return (
      <Fragment>
        <RawIntlProvider value={intl(locale)}>
          <Component {...pageProps} />
          <GlobalStyle />
        </RawIntlProvider>
      </Fragment>
    )
  }
}

export default App
