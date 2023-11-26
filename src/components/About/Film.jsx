import React from 'react'
import styles from '../../styles'
import { street3, street1, model } from '../../assets/FilmImg'
import Aos from '../../shared/partials/Aos'

const Film = () => {
  return (
    <section className={`${styles.padding} w-full md:h-screen md:flex-row flex-col flex  md:gap-[200px] sm:gap-[120px] xs:gap-[200px] gap-[315px]`}>
      <Aos/>
      <div className="flex-1 sm:pt-[30px] relative"> 
        <img src={street1} alt="street" className="xs:w-[320px] w-[220px] xs:h-[420px] h-[300px] object-cover z-0 relative xs:left-0 -left-4" data-aos="fade" data-aos-duration="2000"/>
        <img src={street3} alt="street3"className="xs:w-[250px] w-[230px] xs:h-[300px] h-[280px] object-cover z-10 absolute xs:top-[250px] top-[90px] xs:left-[240px] -right-4" data-aos="fade" data-aos-duration="2000"/>
        <img src={model} alt="model" className="xs:w-[270px] w-full sm:h-[350px] h-[290px] object-cover sm:z-20 z-0 absolute sm:top-[90px] top-[330px] sm:left-[350px]" data-aos="fade" data-aos-duration="2000"/>
      </div>
      <div className={`flex-1 pt-[30px] ${styles.flexCenter} flex-col`}>
        <h2 className="md:block hidden font-shippori font-medium sm:text-[40px] text-[30px] text-[#40442f] uppercase" data-aos="fade-left" data-aos-duration="1500"> 
          Embracing the Soulful Magic <br className='xs:hidden block'/> of Film Photography 
        </h2>
        <h2 className="md:hidden block font-shippori font-medium sm:text-[40px] text-[30px] text-[#40442f] uppercase" data-aos="fade-right" data-aos-duration="1500"> 
          Embracing the Soulful Magic <br className='xs:hidden block'/> of Film Photography 
        </h2>
        <p className="font-antic font-normal text-[#373a3a] md:mt-[30px] mt-[15px] md:pl-[50px]"  data-aos="fade-up">
        The nostalgia and authenticity that film photography brings have a distinct charm that I believe adds a different dimension to my passion. I enjoy taking pictures, and when I look back at old photos, I can see the changes between then and now. The unpredictability of film, the rich tones, and the tactile nature of the process contribute to creating images that have a soulful quality. Whether it's the graininess of black and white film or the vibrant hues of color film, each photograph taken with my Kodak camera tells a story that goes beyond pixels and digital precision. 
        </p>
      </div>
    </section>
  )
}

export default Film