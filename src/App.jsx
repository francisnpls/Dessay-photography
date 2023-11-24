import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './shared/layout/RootLayout'
import GalleryLayout from './shared/layout/GalleryLayout'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Gallery from './pages/GalleryPage'
import Film from './components/Gallery/Film'
import Nature from './components/Gallery/Nature'
import BNW from './components/Gallery/BNW'
import Street from './components/Gallery/Street'
import Random from './components/Gallery/Random'

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
l
        <Route element={<GalleryLayout />}>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/film" element={<Film />}/>
          <Route path="/gallery/nature" element={<Nature />}/>
          <Route path="/gallery/BNW" element={<BNW />}/>
          <Route path="/gallery/street" element={<Street />}/>
          <Route path="/gallery/random" element={<Random />}/>
        </Route>
      </Route>
    </Routes>
  )
}
export default App
