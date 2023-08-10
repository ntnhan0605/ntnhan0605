import { ReactNode } from 'react'
import { createTheme } from '@mui/material'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'

const globalStylesValue = {
  ':root': {
    fontFamily: 'sans-serif',
    fontSize: 10,
    lineHeight: 1.5
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

const themeValue = createTheme({
  palette: {
    primary: {
      main: '#252525',
      contrastText: '#f7c59f'
    },
    divider: '#767b91'
  },
  typography() {
    return {
      fontFamily: 'sans-serif',
      fontSize: 14,
      h1: { fontSize: '2rem', fontFamily: 'serif' },
      h2: { fontSize: '1.75rem', fontFamily: 'serif' },
      h3: { fontSize: '1.5rem', fontFamily: 'serif' },
      h4: { fontSize: '1.25rem', fontFamily: 'serif' },
      h5: { fontSize: '1rem', fontFamily: 'serif' },
      h6: { fontSize: '0.75rem', fontFamily: 'serif' },
      body1: { fontWeight: 300 },
      body2: { fontWeight: 300 }
    }
  }
})

export type ThemeMuiContextComponentProps = { children: ReactNode }
export const ThemeMuiContextComponent = (
  props: ThemeMuiContextComponentProps
) => {
  const { children } = props
  return (
    <ThemeProvider theme={themeValue}>
      <CssBaseline enableColorScheme>
        <GlobalStyles styles={globalStylesValue} />
        {children}
      </CssBaseline>
    </ThemeProvider>
  )
}
