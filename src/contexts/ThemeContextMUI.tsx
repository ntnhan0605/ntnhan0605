import { ReactNode } from 'react'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { globalStylesValue, themeValue } from '@/constants/theme'

export type ThemeContextMUIComponentProps = { children: ReactNode }
export const ThemeContextMUIComponent = ({
  children
}: ThemeContextMUIComponentProps) => {
  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyles styles={globalStylesValue} />
      <CssBaseline enableColorScheme>{children}</CssBaseline>
    </ThemeProvider>
  )
}
