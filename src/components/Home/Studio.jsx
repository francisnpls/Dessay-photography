import React from 'react'
import styles from '../../styles'
import Aos from '../../shared/partials/Aos'

const Studio = () => {
  return (
    <section className="w-full h-screen bg-bgWave bg-cover bg-no-repeat bg-center relative">
      <Aos/>
      <div className={`${styles.padding}`}>
        <p className="flex justify-end font-shippori uppercase text-white sm:text-[25px] text-[20px] sm:text-start text-end" data-aos="fade-left">
          Photoshoot Studio <br/>Soon!
        </p>
        <p className="font-shippori uppercase text-white sm:text-[25px] text-[20px] absolute top-[320px]" data-aos="fade-right">
          portaits with <br className="sm:hidden block"/> feelings...
        </p>
      </div>
    </section>
  )
}

export default Studio