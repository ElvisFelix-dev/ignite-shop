import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

import imgDelivery from '../assets/imgDelivery.svg'
import Head from 'next/head'

interface SuccessProps {
  costumerName: string
  product: {
    name: string
    imageURL: string
  }
}

export default function Success({ costumerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra realizada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          <Image
            src={product.imageURL}
            width={120}
            height={110}
            alt="Imagem do produto comprado"
          />
        </ImageContainer>

        <p>
          Uhuul!!! <strong>{costumerName}</strong>, sua{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Image
          src={imgDelivery}
          width={329}
          height={164}
          alt="Image delivery"
        />

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  /* if (!query.sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } */

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageURL: product.images[0],
      },
    },
  }
}
