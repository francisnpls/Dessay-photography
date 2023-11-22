import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './shared/layout/RootLayout'
import GalleryLayout from './shared/layout/GalleryLayout'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
l
        <Route element={<GalleryLayout />}>
          <Route path="/gallery/nature" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  )
}
export default App
