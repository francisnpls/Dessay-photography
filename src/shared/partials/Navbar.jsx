import React from 'react';
import styles from '../../styles';
import { logo, close, menu } from '../../assets';
import { navLinks } from '../../constants'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aos from '../../shared/partials/Aos'


const Navbar = () => {

  const [scrolling, setScrolling] = useState(false);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50 pixels
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures that useEffect runs only once when the component mounts

  const navbarStyle = {
    backgroundColor: scrolling ? '#FFFFFF' : 'transparent',
    color: scrolling ? '#333' : '#FFFFFF',
    boxShadow: scrolling ? '0px 20px 100px -10px rgba(66, 71, 91, 0.1)' : 'none',
    transition: 'background-color 0.3s ease-in-out',
    
  };  

  return (
    <nav style={navbarStyle} className="w-full py-3 flex justify-between items-center navbar fixed top-0 z-50 bg-white">
      <Aos/>
      <div className={`${styles.paddingX} w-full flex justify-between items-center z-50`}>
        <div className="flex justify-center items-center gap-2" data-aos="fade-down">
          <img src={logo} alt="logo" className="w-[40px] h-[40px] object-contain" />
          <h2 className="text-[25px] font-lilita text-[#3b6f56]">
            Dessay
          </h2>
        </div>

        <div className="sm:flex hidden gap-5" data-aos="fade-down">
          <ul className="list-none sm:flex hidden justify-between items-center gap-5">
            {navLinks.map((nav) => (
              <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[16px]">
                <Link to={nav.link} className="hover:text-[#44cc8a] ease-in-out duration-[.2s]">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="h-[30px] bg-green-gradient rounded-[5px] px-3 outline-none border-none">
            <Link to="/contact" className="font-poppins text-white">
              Reach Out
            </Link>
          </button>   
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center z-50">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)} data-aos="fade-down"/>
          <div className={`${toggle ? "flex" : "hidden"} h-screen flex-col justify-center items-center gap-[50px] p-6 bg-black-gradient absolute top-0 left-0 min-w-[80%] sidebar`}>
            <ul className="list-none flex flex-col justify-between items-center gap-[50px]">
              {navLinks.map((nav) => (
                <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[16px] text-primary">
                  <Link to={nav.link} className="hover:text-[#44cc8a] ease-in-out duration-[.2s]"
                    onClick={() => setToggle((prev) => !prev)}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={`${styles.flexCenter}`}>
              <button type="button" className="h-[30px] w-[120px] bg-green-gradient rounded-[5px] px-2 outline-none border-none">
                <Link to="/contact" className="font-poppins text-[#252525]" onClick={() => setToggle((prev) => !prev)}>
                  Reach Out
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar