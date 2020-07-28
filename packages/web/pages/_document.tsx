/* eslint-disable filenames/match-regex */
import React, { ReactElement, Fragment } from "react"
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
  DocumentInitialProps,
  default as NextDocument,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

class Document extends NextDocument<DocumentProps> {
  // eslint-disable-next-line no-restricted-syntax
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      /* eslint-disable @typescript-eslint/explicit-function-return-type */
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      /* eslint-enable */

      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,

        styles: ((
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ) as unknown) as ReactElement<unknown>[],
      }
    } finally {
      sheet.seal()
    }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
