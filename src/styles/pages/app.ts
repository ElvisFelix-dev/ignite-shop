import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',

  // Tornar o conteúdo centralizado em telas menores
  '@media screen and (max-width: 767px)': {
    alignItems: 'center',
    padding: '1rem',
  },
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',

  // Reduzir a largura do cabeçalho em telas menores
  '@media screen and (max-width: 767px)': {
    maxWidth: 600,
  },
})
