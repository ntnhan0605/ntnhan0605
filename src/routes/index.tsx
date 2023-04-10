import { ChakraProvider, createStandaloneToast, theme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

const { ToastContainer } = createStandaloneToast()

function IndexPage() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ToastContainer />
      <Routes>
        <Route></Route>
      </Routes>
    </ChakraProvider>
  )
}

export default IndexPage
