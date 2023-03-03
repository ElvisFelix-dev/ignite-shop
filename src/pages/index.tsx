import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from '../styles/pages/home'

import imgShirt1 from '../assets/img-Tshirt-explorer.svg'
import imgShirt2 from '../assets/img-Tshirt-ignite.svg'
import imgShirt3 from '../assets/img-Tshirt-maratona.svg'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={imgShirt1} alt="Camisa Explorer" width={520} height={480} />

        <footer>
          <strong>Camisa Explorer</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={imgShirt2} alt="Camisa Explorer" width={520} height={480} />

        <footer>
          <strong>Camisa Explorer</strong>
          <span>R$ 90,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={imgShirt3} alt="Camisa Explorer" width={520} height={480} />

        <footer>
          <strong>Camisa Explorer</strong>
          <span>R$ 60,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={imgShirt3} alt="Camisa Explorer" width={520} height={480} />

        <footer>
          <strong>Camisa Explorer</strong>
          <span>R$ 60,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
