/* eslint-disable filenames/match-regex, unicorn/no-reduce */
import React, { Fragment, ReactElement } from "react"
import { normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"
import { default as NextApp, AppProps, AppInitialProps } from "next/app"
import { IntlProvider } from "react-intl"
import isString from "lodash/isString"

type Props = AppProps & {
  locale: string
  messages: any
}

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

const flattenMessages = (
  nestedMessages: any,
  prefix = "",
): Record<string, string> =>
  Object.keys(nestedMessages).reduce(
    (
      accumulator: Record<string, string>,
      key: string,
    ): Record<string, string> => {
      const value = nestedMessages[`${key}`]
      const prefixedKey = prefix ? `${prefix}.${key}` : key

      if (isString(value)) {
        accumulator[`${prefixedKey}`] = value
      } else {
        Object.assign(accumulator, flattenMessages(value, prefixedKey))
      }

      return accumulator
    },
    {},
  )

class App extends NextApp<Props> {
  // eslint-disable-next-line no-restricted-syntax
  static async getInitialProps({
    Component,
    ctx,
  }: any): Promise<AppInitialProps & any> {
    let pageProps = {}

    const { locale, messages } = ctx.res

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { locale, messages, ...pageProps }
  }

  render(): ReactElement<Props> {
    const { Component, locale, messages, pageProps } = this.props

    return (
      <Fragment>
        <IntlProvider
          defaultLocale={locale}
          locale={locale}
          messages={flattenMessages(messages)}
        >
          <Component {...pageProps} />
          <GlobalStyle />
        </IntlProvider>
      </Fragment>
    )
  }
}

export default App
