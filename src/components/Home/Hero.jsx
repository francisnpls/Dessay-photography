import React from 'react'
import styles from '../../styles'
import { HashLink as Link } from 'react-router-hash-link'
import { useState, useEffect, useRef } from 'react'
import Aos from '../../shared/partials/Aos'

const Hero = () => {
  const bg = ['bg-bg1', 'bg-bg2', 'bg-bg3', 'bg-bg4', 'bg-bg5', 'bg-bg6', 'bg-bg7'];
  const [bgChange, setBgChange] = useState(bg[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomBg = bg[Math.floor(Math.random() * bg.length)];
      setBgChange(randomBg);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [bg]);

    const sectionStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      transition: 'background 0.3s ease-in', // Apply the transition to the 'background' property
    };


  return (
    <section className={`${styles.paddingX} w-full h-screen flex flex-col ${bgChange} gap-10 pt-[140px] z-0`} style={sectionStyle}>
      <Aos/>
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