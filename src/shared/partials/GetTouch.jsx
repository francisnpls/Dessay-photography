import React from 'react'
import styles from '../../styles'
import { FollowIg } from '../../constants'
import Aos from './Aos'

const GetTouch = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <Aos/>
      <div className={`${styles.flexCenter} flex-col gap-5`} data-aos="flip-down">
        <h1 className="font-shippori text-[28px] uppercase font-bold">Get in Touch</h1>
        <h3 className="font-poppins text-[15px] tracking-[1px] opacity-[.7]">Follow me on Instagram</h3>
      </div>

      <div className='mt-10 px-3 grid sm:grid-cols-6 xs:grid-cols-3 grid-cols-2 gap-3' data-aos="fade">
        {FollowIg.map((follow) => (
          <div key={follow.id} className="sm:h-[190px] h-[170px] relative">
            <a href={follow.link} target='_blank' className="hover:opacity-[.5] ease-in-out duration-[.3s]">
              <img src={follow.image} alt={follow.id} className="w-full h-full object-cover"/>
            </a>
            <img src={follow.icon} alt="icon" className="sm:h-[28px] h-[23px] absolute right-1 top-1" />
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default GetTouch