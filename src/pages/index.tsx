import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 8,
  width: 90,
  height: 35,
  border: 'CanvasText',
  cursor: 'pointer',
  transition: 'all',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export default function Home() {
  return (
    <>
      <Button>Enviar</Button>
    </>
  )
}
