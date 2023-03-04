import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps } from 'next'
import Stripe from 'stripe'

import { HomeContainer, Product } from '../styles/pages/home'
import { stripe } from '../lib/stripe'

import imgShirt1 from '../assets/img-Tshirt-explorer.svg'
import imgShirt2 from '../assets/img-Tshirt-ignite.svg'
import imgShirt3 from '../assets/img-Tshirt-maratona.svg'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string
    name: string
    imageURL: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageURL} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>R$ {product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
}
