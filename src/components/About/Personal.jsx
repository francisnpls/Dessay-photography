import React from 'react'
import styles from '../../styles'
import { dessay } from '../../assets/HomeImg'
import Aos from '../../shared/partials/Aos'

const Personal = () => {
  return (
    <section className={`${styles.paddingX} w-full pt-[90px] pb-[70px] flex md:flex-row flex-col gap-5 bg-[#EFEFEB]`}>
      <Aos/>
      <h2 className="font-shippori sm:text-[70px] text-[28px] text-[#40442f] font-medium uppercase sm:pt-[50px] pt-[10px] sm:text-start text-center" data-aos="fade-right">
        How <br className="sm:block hidden"/> it <br className="sm:block hidden"/> all going...
      </h2>
      <img src={dessay} alt="nature" className="w-[480px] sm:h-[600px] h-[400px] object-cover" data-aos="fade" data-aos-duration="2000"/>
      <p className="font-antic font-medium text-[#252525] opacity-[.7] flex justify-center items-center" data-aos="fade-left">
      Hi there, I'm Des Napoles, Dessay for short. I am an aspiring professional photographer, and ever since I can remember, my dream has been to capture the beauty of the world through my lens. For me, photography is a passion that enables me to capture moments in time and use pictures to tell stories. It's more than a profession. Every shot I take is a different representation of my viewpoint and how I see the world, whether it be the gentle play of light at dawn, the unfiltered emotions in a portrait, or the amazing landscapes that are in front of me. Believe it or not, some of my most cherished photographs were taken with just the convenience of my smartphone. From spontaneous moments to everyday wonders, my phone has been a constant companion, allowing me to document life as it unfolds.
      </p>
    </section>
  )
}

export default Personal