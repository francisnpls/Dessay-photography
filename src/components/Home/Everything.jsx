import React from 'react'
import { blckStreet, blckChild, flower } from '../../assets/HomeImg'
import Aos from '../../shared/partials/Aos'

const Everything = () => {
  return (
    <section className="w-full bg-[#EFEFEB] flex md:gap-8 gap-5 md:h-[80vh] md:flex-row flex-col">
      <Aos/>
      <div className="flex-1 flex  sm:flex-row flex-col sm:gap-10 gap-5">
        <img src={blckStreet} alt="black street" className="w-[300px] h-[60vh] object-cover" data-aos="fade-right"/>
        <p className="font-poppins text-[#252525] opacity-[.9] sm:text-[12px] text-[14px] leading-[30px] sm:pt-[70px] sm:pl-0 pl-6 max-w-[300px]" data-aos="zoom-in">
          We can capture not just specific moments but also the essence of life as it is happening through the lens of a camera. A memory, a world revealed, a story revealed with every click. In order to capture the beauty, emotion, and subtleties that make each fleeting moment unique, the camera serves as more than just a tool.
        </p>
      </div>

      <div className="flex-1 flex md:flex-row flex-col sm:gap-0 gap-5">
        <div className="flex-1 flex sm:flex-col gap-5 sm:items-center items-end sm:pt-[70px] sm:px-0 px-6">
          <img src={flower} alt="flower" className="sm:w-[220px] w-[150px] sm:h-[270px] h-[200px]" data-aos="zoom-in"/>
          <p className="font-shippori text-center sm:text-[27px] text-[24px] text-[#252525] font-medium uppercase leading-[28px]" data-aos="zoom-in">
            Camera <br/> is <br/> Everything
          </p>
        </div>
        <div className="flex items-end justify-end">
          <img src={blckChild} alt="black child" className="flex-1 w-[300px] max-w-[300px] h-[60vh] object-cover relative top-1 sm:top-0" data-aos="fade-left"/>
        </div>
      </div>
    </section>
  )
}

export default Everything