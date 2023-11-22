import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'
import Aos from '../../shared/partials/Aos'

const Book = () => {
  return (
    <section className={`${styles.padding} w-full h-screen md:mt-[60px] mt-[30px] flex flex-col md:gap-[60px] gap-[30px] bg-bgBook bg-cover bg-no-repeat bg-center`}>
      <Aos/>
        <div className="flex md:justify-center justify-around items-center md:gap-[50px] relative" data-aos="flip-down">
          <div className="md:w-[200px] md:h-[3px] w-[20px] h-[5px] md:rounded-0 rounded-full bg-white "/>
          <h1 className="font-shippori font-medium text-center md:text-[89px] text-[50px] text-white uppercase ">
            Book Me 
          </h1>
          <div className="md:w-[200px] md:h-[3px] w-[20px] h-[5px] md:rounded-0 rounded-full bg-white relative text-end"/>
        </div>
        
        <div className="flex justify-between items-center md:flex-row flex-col md:gap-0 gap-[30px]">
          <p className="font-montserrat text-white md:text-[16px] text-[13px] font-medium w-[350px]" data-aos="fade-right">
            Through this website, I invite you to explore my portfolio and join me on this visual journey. Feel free to browse through my work, and I hope you find joy and inspiration in the stories my photographs tell.
          </p>
          <div className={`${styles.flexCenter}`} data-aos="fade-up">
          <button type='button' className="bg-[#252525] px-[20px] py-[10px] md:block hidden">
            <Link to="/contact" className="font-poppins uppercase text-[18px] text-white">
              Contact
            </Link>
          </button>
          </div>
          <p className="font-montserrat md:text-[16px] text-[13px] text-white font-medium w-[350px]" data-aos="fade-left">
            Thank you for visiting, and I look forward to the opportunity of collaborating with you to create lasting memories through the art of photography.
          </p>
        </div>
        <div className={`${styles.flexCenter} mt-[30px]`} data-aos="fade-up">
          <button type='button' className="bg-[#252525] px-[20px] py-[10px] md:hidden block">
            <Link to="/contact" className="font-poppins uppercase text-[18px] text-white">
              Contact
            </Link>
          </button>
          </div>
    </section>
  )
}

export default Book