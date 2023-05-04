import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { globalStylesValue, themeValue } from 'constants/theme'
import './styles/index.css'
import reportWebVitals from './reportWebVitals'
import RoutesIndex from './routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeValue}>
      <CssBaseline enableColorScheme />
      <GlobalStyles styles={globalStylesValue} />
      <RoutesIndex />
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
