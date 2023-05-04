import { createTheme } from '@mui/material'

export const globalStylesValue = {
  ':root': {
    fontSize: 10
  },
  body: {
    color: '#252525',
    fontWeight: 300
  },
  a: {
    color: '#767b91',
    textDecoration: 'none',
    ':hover': {
      color: '#252525'
    }
  }
}

export const themeValue = createTheme({
  palette: {
    primary: {
      main: '#252525',
      contrastText: '#f7c59f'
    },
    divider: '#767b91'
  },
  typography() {
    return {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: 14,
      h1: { fontSize: '2rem', fontFamily: '"Libre Bodoni", serif' },
      h2: { fontSize: '1.75rem', fontFamily: '"Libre Bodoni", serif' },
      h3: { fontSize: '1.5rem', fontFamily: '"Libre Bodoni", serif' },
      h4: { fontSize: '1.25rem', fontFamily: '"Libre Bodoni", serif' },
      h5: { fontSize: '1rem', fontFamily: '"Libre Bodoni", serif' },
      h6: { fontSize: '0.75rem', fontFamily: '"Libre Bodoni", serif' },
      body1: { fontWeight: 300 },
      body2: { fontWeight: 300 }
    }
  }
})
