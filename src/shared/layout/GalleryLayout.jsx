import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Choices from '../../components/Gallery/Choices'


const GalleryLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full overflow-hidden">
      <div className="z-0">
        <Choices/>
        <Outlet/>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default GalleryLayout