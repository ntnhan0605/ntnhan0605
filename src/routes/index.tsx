import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Profile } from './profile'

function IndexPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default IndexPage
