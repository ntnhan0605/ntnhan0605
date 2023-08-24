import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import {
  PaletteOptions,
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from '@mui/material/styles'
import { ReactNode } from 'react'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    handwritetitle1: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    handwritetitle1?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    handwritetitle1: true
  }
}

const globalStylesValue = {
  '::selection': {
    color: '#fff',
    background: '#1d1d1d'
  },
  a: {
    textDecoration: 'none'
  }
}

const palette: PaletteOptions = {
  primary: {
    light: '#f1f1f1',
    main: '#8b8b8b',
    dark: '#1d1d1d',
    contrastText: '#f7c59f'
  },
  action: {
    disabled: '#dddddd',
    hover: '#1d1d1d'
  },
  text: {
    primary: '#8b8b8b',
    disabled: '#dddddd',
    secondary: '#f7c59f'
  },
  grey: {
    50: '#ffffff',
    100: '#f1f1f1',
    200: '#dddddd',
    300: '#bbbbbb',
    400: '#a4a4a4',
    500: '#8b8b8b',
    600: '#777777',
    700: '#606060',
    800: '#535353',
    900: '#1d1d1d'
  },
  divider: '#767b91'
}

let themeValue = createTheme({
  palette,
  typography(p) {
    return {
      boxSizing: 'border-box',
      htmlFontSize: 16,
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 15,
      lineHeight: 1.5,

      h1: {
        color: p.primary.dark,
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 40,
        fontWeight: 600,
        letterSpacing: 9.2
      },
      h2: {
        color: p.primary.dark,
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 29,
        fontWeight: 600,
        letterSpacing: 5.8
      },
      h3: {
        color: p.primary.dark,
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: 3.6
      },
      h4: {
        color: p.primary.dark,
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 3.6
      },
      h5: {
        color: p.primary.dark,
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 1.6,
        letterSpacing: 3.6
      },
      h6: {
        color: p.primary.dark,
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 3.6
      },
      button: {
        fontFamily: '"EB Garamond", serif',
        fontSize: 18,
        fontStyle: 'italic',
        lineHeight: 2,
        textTransform: 'unset'
      },
      handwritetitle1: {
        fontFamily: '"The Gwathmey", script',
        fontSize: 55,
        lineHeight: 1.2
      },
      subtitle1: {
        fontFamily: '"EB Garamond", serif',
        fontSize: 18
      },
      subtitle2: {
        fontFamily: '"EB Garamond", serif',
        fontSize: 16
      },
      body1: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 16
      },
      body2: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 14
      }
    }
  },
  breakpoints: {
    values: {
      xl: 1306,
      lg: 1306,
      md: 966,
      sm: 546,
      xs: 320
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          handwritetitle1: 'span'
        }
      }
    }
  },
  spacing: 1,
  shape: {
    borderRadius: 0
  }
})
themeValue = responsiveFontSizes(themeValue)

export type ThemeMuiProps = {
  children: ReactNode
}
export const ThemeMui = (props: ThemeMuiProps) => {
  const { children } = props
  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyles styles={globalStylesValue} />
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  )
}
