import { ThemeProvider } from '@mui/material'
import { themeValue } from 'constants/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Profile } from './profile'

function IndexPage() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeValue}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default IndexPage
