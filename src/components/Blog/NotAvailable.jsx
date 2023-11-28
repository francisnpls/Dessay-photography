import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles'
import { blog } from '../../assets/HomeImg'
import { logo2 } from '../../assets/HomeImg'
import Aos from '../../shared/partials/Aos'

const NotAvailable = () => {
  return (
    <section className={` ${styles.paddingX} sm:pb-12 pb-6 pt-[70px]`}>
      <Aos/>
      <div className="h-[86vh] relative">
        <video autoPlay loop muted width="100%" className="rounded-[50px] h-full w-[100%] object-cover">
          <source src={blog} type="video/mp4"/>
          Video is not supported.
        </video>
        <div className={`${styles.flexCenter} flex-col gap-[20px] h-[86vh] w-full absolute top-0`}  
        data-aos="fade-up" data-aos-duration="1500">
          <p className="font-lilita sm:text-[90px] text-[40px] text-[#f4e6ddbd] uppercase text-center 
          sm:leading-[100px] leading-[50px] md:border-b-[1px]">
            dessay photography <br /> is currently <br className="md:block hidden"/> working with it
          </p>
          <div className="w-[85%] h-[1px] bg-[#f4e6dd] md:hidden block" />
          <div className="flex gap-4">
            <img src={logo2} alt="logo" className="sm:w-[80px] w-[60px] sm:h-[80px] h-[60px] object-contain" />
          </div>         
        </div>
      </div>
      <div className={`${styles.flexCenter} flex-col gap-5 mt-[20px]`} data-aos="fade-up">
        <p className="font-montserrat font-bold uppercase sm:text-[20px] text-[18px] text-center text-[#dc5e5e]">
          I'd love to here from you. Reach out here. 
        </p>
        <button type='button' className="px-[15px] py-[5px] border-[1px] border-[#dc5e5e] rounded-[30px]">
          <Link to="/contact" className="font-poppins uppercase text-[18px] text-[#dc5e5e]">
            Contact
          </Link>
        </button>
      </div>
    </section>
  )
}

export default NotAvailable