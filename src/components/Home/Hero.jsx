import React from 'react'
import styles from '../../styles'
import { HashLink as Link } from 'react-router-hash-link'
import Aos from '../../shared/partials/Aos'

const Hero = () => {

  return (
    <section className={`${styles.paddingX} w-full h-screen flex flex-col bg-bgHero gap-10 pt-[140px] z-0 bg-fixed bg-cover bg-no-repeat bg-center`}>
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
        <button type="button" className="py-[10px] px-[35px] bg-green-gradient cursor-pointer text-semibold">
          <Link to="#message" className="text-white font-poppins">
            Find More
          </Link>
        </button>
      </div>
      
    </section>
  )
}

export default Hero