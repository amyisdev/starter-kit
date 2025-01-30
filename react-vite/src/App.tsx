import { Route, Routes } from 'react-router'
import Home from './pages/home'
import NotFound from './pages/not-found'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
