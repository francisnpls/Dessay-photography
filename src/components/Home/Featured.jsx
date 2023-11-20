import React from 'react'
import styles from '../../styles'
import { Features } from '../../constants'
import Aos from '../../shared/partials/Aos'

const Featured = () => {
  return (
    <section className="w-full flex sm:flex-row flex-col">
      <Aos/>
      {Features.map((feature) => (
        <div key={feature.id} className="flex-1 relative" data-aos="fade-up">
          <img src={feature.img} alt={feature.id} className=" sm:h-screen object-cover z-0"/>
          <h2 className="z-10 text-white absolute bottom-8 left-10 font-shippori text-[19px] text-medium sm:block hidden">
            {feature.title}
          </h2>
        </div>
      ))}
    </section>
  )
}

export default Featured