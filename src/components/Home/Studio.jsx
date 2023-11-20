import React from 'react'
import styles from '../../styles'

const Studio = () => {
  return (
    <section className="w-full h-screen bg-bgWave bg-cover bg-no-repeat bg-center relative">
      <div className={`${styles.padding}`}>
        <p className="flex justify-end font-shippori uppercase text-white sm:text-[25px] text-[20px] sm:text-start text-end">
          Photoshoot Studio <br/>Soon!
        </p>
        <p className="font-shippori uppercase text-white sm:text-[25px] text-[20px] absolute top-[320px]">
          portaits with <br className="sm:hidden block"/> feelings...
        </p>
      </div>
    </section>
  )
}

export default Studio