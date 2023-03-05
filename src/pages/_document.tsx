/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="Aplicação desenvolvida na Trilha Frontend do Ignite, pela Rocketseat"
        />

        <meta name="author" content="Elvis Felix" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../assets/imgLogo.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="../assets/imgLogo.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="../assets/imgLogo.svg"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
