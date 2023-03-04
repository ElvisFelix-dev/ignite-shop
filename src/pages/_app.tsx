import Head from 'next/head'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/global'

import { Container, Header } from '../styles/pages/app'
import imgLogo from '../assets/imgLogo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <Header>
        <Image src={imgLogo} alt="Logo ignite" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
