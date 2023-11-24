import React from 'react'
import { useState, useEffect } from 'react'

const ArrowUp = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100; // Adjust this threshold as needed

      setShowArrow(scrollY > threshold);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const scrollToTop = () => {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed md:right-[65px] right-6 md:bottom-[40px] bottom-6 z-[50] ${showArrow ? 'visible' : 'invisible'} ease-in duration-[.3s]`}>
      <button type='button' className="w-[40px] h-[40px] rounded-full flex justify-center 
      items-center bg-white boxshadow" onClick={scrollToTop}>
        <i className="fa-solid fa-chevron-up text-[#373a3a]"></i>
      </button>
    </div>
  )
}

export default ArrowUp