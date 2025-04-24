import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/MisFav'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default AppRoutes