import React from 'react'
import styles from '../../styles'
import Aos from '../../shared/partials/Aos'

const Cat = () => {
  return (
    <section className="w-full h-screen sm:bg-bgCat bg-bgMoon bg-cover bg-no-repeat bg-center relative">
      <Aos/>
      <div className={`${styles.padding} flex sm:flex-row flex-col sm:items-start items-end`}>
        <h2 className="flex-1 text-white text-[16px] font-poppins tracking-[3px] uppercase sm:text-start text-end" data-aos="fade-right">
          Relive <br className="sm:hidden block"/> your <br className="sm:block hidden"/> day, <br className="sm:hidden block"/> everyday
        </h2>
        <div className="flex-1 flex flex-col gap-1 sm:pt-[160px] pt-[90px]" data-aos="zoom-in">
          <p className="text-white sm:font-normal font-normal font-montserrat text-[15px] leading-[40px] [word-spacing: 2px] sm:w-[510px] w-full text-justify">
            “Everything always looked better in black and white. Everything always looked as if it were the first time; there's always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”
          </p>
          <p className="text-white font-bold font-montserrat text-[15px] leading-[40px] [word-spacing: 2px] sm:w-[510px] w-full text-end">
            - Jack Lowden
          </p>
        </div>
        
      </div>
      
    </section>
  )
}

export default Cat