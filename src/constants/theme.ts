import { createTheme } from '@mui/material'

export const themeValue = createTheme({
  typography() {
    return {
      htmlFontSize: 14,
      fontFamily: 'sans-serif',
      h1: { fontWeight: 500, fontFamily: '"Playfair Display", serif' },
      h2: { fontWeight: 500, fontFamily: '"Playfair Display", serif' },
      h3: { fontWeight: 500, fontFamily: '"Playfair Display", serif' },
      h4: { fontWeight: 500, fontFamily: '"Playfair Display", serif' },
      h5: { fontWeight: 500, fontFamily: '"Playfair Display", serif' },
      h6: { fontWeight: 500, fontFamily: '"Playfair Display", serif' },
    }
  }
})
