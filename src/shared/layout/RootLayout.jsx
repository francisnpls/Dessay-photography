import React from 'react'
import Navbar from '../partials/Navbar'
import Home from '../../pages/Home'
import Footer from '../partials/Footer'

const RootLayout = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="z-50">
        <Navbar/>
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Footer/>
      </div>
    </div>

    
  )
}

export default RootLayout