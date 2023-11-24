import React from 'react'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'
import GetTouch from '../partials/GetTouch'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ArrowUp from '../partials/ArrowUp'

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full overflow-hidden">
      <div className="z-50">
        <Navbar/>
        <ArrowUp/>
        <Outlet/>
        <GetTouch />
        <Footer/>
      </div>
    </div>
  )
}

export default RootLayout