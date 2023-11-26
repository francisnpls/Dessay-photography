import React from 'react'
import { tree1 } from '../../assets/BNWImg'
import Aos from '../../shared/partials/Aos'

const Hero = () => {
  return (
    <section className="sm:px-12 px-0 sm:pt-[140px] pt-[110px] sm:gap-10 md:gap-0 sm:pb-[140px] flex sm:flex-row flex-col bg-[#EFEFEB]">
      <Aos/>
      {/* Device */}
      <div className="sm:hidden block">  
        <div className="px-6">
          <p className="font-montserrat uppercase text-[11px]" data-aos="fade-right">
            I'd love to hear about you!
          </p>
          <h2 className="font-shippori text-[45px] font-medium leading-[55px] relative z-20" data-aos="fade-right">
            Get in touch by filling out the form below
          </h2>
          <img src={tree1} alt="tree" className="object-contain relative top-[-20px] z-10" data-aos="fade" data-aos-duration="2000"/>
        </div>
        <div className="w-full bg-[#f7f5f5] px-6 py-[85px] relative top-[-70px] z-0" data-aos="fade-up">
          <p className="font-poppins text-[12px]">
            You know about me, now I want to know about you. To inquire, please tell me a bit about yourself, your project and where you're based.
          </p>
        </div>
        <div className="w-full flex justify-center items-center flex-col relative top-[-110px] gap-2" data-aos="fade-up">
          <div className="h-[130px] w-[1px] bg-[#373a3a]"/>
          <h3 className="font-shippori text-[20px] font-medium">
            Inquire Below
          </h3>
        </div>
      </div>

      {/* Desktop */}
      <div className="flex-[.8] w-full flex justify-center items-center relative z-30">
        <div className='md:w-[400px] sm:w[340px] h-[250px] bg-[#f7f5f5] relative p-12 sm:block hidden' data-aos="fade-right">
          <p className="font-montserrat uppercase text-[10px] absolute top-[-45px]">
            I'd love to hear about you!
          </p>
          <h2 className="font-shippori text-[40px] font-medium leading-[45px] absolute w-[490px] top-[-25px]">
            Get in touch by filling out the form below
          </h2>
          <p className="font-poppins text-[12px] mt-[40px]">
            You know about me, now I want to know about you. To inquire, please tell us a bit about yourself, your project and where you're based.
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="md:h-[250px] sm:h-[130px] w-[1px] bg-[#373a3a] mt-[30px] flex justify-center items-center" />
            <h3 className="font-shippori text-[20px] font-medium">
              Inquire here!
            </h3>
          </div>  
        </div>
      </div>

      <div className="flex-1 sm:block hidden relative z-0" data-aos="fade-left">
        <img src={tree1} alt="tree" className="object-contain"/>
      </div>
    </section>
  )
}

export default Hero