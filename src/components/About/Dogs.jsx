import React from 'react'
import styles from '../../styles'
import { bugoy, kurdapyo, mingming } from '../../assets/Film'
import Aos from '../../shared/partials/Aos'

const Dogs = () => {
  return (
    <section className={`${styles.padding} w-full flex md:flex-row flex-col`}> 
      <Aos/>
      <div className="flex-[0.8] z-10 flex">
        <h2 className=" font-shippori sm:text-[80px] text-[50px] font-medium uppercase text-[#40442f] md:leading-[100px] flex sm:justify-center items-center z-10" data-aos="fade-right"  data-aos-duration="1500">
          I am <br/> also <br /> Dog <br/> people
        </h2>
        <p className="font-antic text-[13px] pt-[20px] opacity-[.7] md:hidden block" data-aos="fade-left"  data-aos-duration="1500">
          Meet Bugoy and Kurdapyo, they are always hold a special place in my heart, and the lessons they taught me about love, loyalty, and the joy of companionship will endure. 
        </p>
      </div> 
      
      <div className="flex-[2.9] relative" data-aos="fade"  data-aos-duration="2000">
        <img src={bugoy} alt="bugoy" className="sm:w-[400px] xs:w-[280px] w-[230px] xs:h-[480px] h-[280px] object-cover relative sm:left-[-20px] left-0 z-0"/>
        <img src={kurdapyo} alt="kurdapyo" className="xs:w-[280px] w-[150px] xs:h-[320px] h-[200px] object-cover z-10 absolute sm:top-[90px] xs:top-[75px] top-[40px] sm:left-[300px] right-0"/>
      </div>
      <p className="flex-[1] font-antic text-[14px] pt-[50px] md:block hidden" data-aos="fade-left">
        Meet Bugoy and Kurdapyo, they are always hold a special place in my heart, and the lessons they taught me about love, loyalty, and the joy of companionship will endure. 
      </p>
      <div>

      </div>
    </section>
  )
}

export default Dogs