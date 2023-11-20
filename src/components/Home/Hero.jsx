import React from 'react'
import styles from '../../styles'
import { HashLink as Link } from 'react-router-hash-link'
import { useState, useEffect } from 'react'

const Hero = () => {
    // // Define an array of background colors
    // const bg = ['bg-bg1', 'bg-bg2', 'bg-bg3', 'bg-bg4', 'bg-bg5', 'bg-bg6'];
  
    // // State to hold the current background color
    // const [bgChange, setBgChange] = useState(bg[0]);
  
    // useEffect(() => {
    //   // Function to change the background color
    //   const changeBackground = () => {
    //     const randomBg = bg[Math.floor(Math.random() * bg.length)];
    //     setBgChange(randomBg);
    //   };
  
    //   // Set up a timer to change the background every 5 seconds
    //   const intervalId = setInterval(changeBackground, 2500);
  
    //   // Clean up the timer on component unmount
    //   return () => clearInterval(intervalId);
    // }, []); 

    // const sectionStyle = {
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   transition: 'background 0.3s ease-in', // Apply the transition to the 'background' property
    // };


  return (
    <section className={`${styles.paddingX} w-full h-screen flex flex-col gap-10 bg-bgHero bg-center bg-no-repeat bg-cover bg-fixed pt-[140px] z-0`}>
      <div className={`${styles.flexCenter}`}>
        <h1 className={`${styles.heading2} font-semibold text-white text-center`}>
          Creative Photography <br className="sm:block hidden" /> Shots
        </h1>
      </div>

      <div className={`${styles.flexCenter}`}>
        <p className={`${styles.paragraph} w-[710px] text-center text-white`}>
        Photography is like telling a story without saying a word but the shots say it all. Each photograph whispers a tale, filled with emotions, colors, and the intricate dance of light and shadow.
        </p>
      </div>

      <div className={`${styles.flexCenter}`}>
        <button type="button" className="py-[10px] px-[35px] rounded-[10px] bg-green-gradient cursor-pointer text-semibold">
          <Link to="#" className="text-white font-poppins">
            Find More
          </Link>
        </button>
      </div>
      
    </section>
  )
}

export default Hero