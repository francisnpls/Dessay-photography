import React from 'react'
import styles from '../../styles'
import { Cards } from '../../constants'
import { useState } from 'react'
import Aos from '../../shared/partials/Aos'

const Card = () => {
  const [cardStates, setCardStates] = useState(Cards.map(() => false))

  const handleCardClick = (index) => {
    setCardStates((prevStates) => {
      const newStates = prevStates.map((state, i) => (i === index ? !state : false));
      return newStates;
    });
  };

  return (
    <section className={`${styles.padding}`}>
      <Aos/>
      <div className={`${styles.flexCenter} flex-col gap-1`} data-aos="flip-down">
        <h3 className="text-primary opacity-[.8] text-[15px] font-poppins">Featured</h3>
        <h1 className="text-[30px] font-shippori font-bold text-center">Social Media's Posts</h1>
      </div>

      <div className="sm:pt-16 pt-9 grid sm:grid-cols-3 ss:grid-cols-2 grid-cols-1 sm:gap-10 gap-6" data-aos="fade-up">
        {Cards.map((item, index) => (
          <div key={item.id} className={`${cardStates[index] ? "sm:translate-y-[-10px]" : "sm:translate-y-0"} w-full h-[360px] relative cursor-pointer`} onClick={() => handleCardClick(index)}>
            <div className={`${cardStates[index] ? "showbackground" : "hide"} flex justify-center flex-col  p-6 gap-5 w-full h-full bg-[#3b6f56e2] absolute top-0  z-30`}>
              <p className={`${styles.flexCenter}  text-white font-antic text-[16px] tracking-wide`}>
                {item.content}
              </p>
              <a href={item.url} target='_blank' className={`${cardStates[index] ? "block" : "hidden"} font-antic text-white text-[16px] font-bold underline underline-offset-4 tracking-[1px]`}> See Post </a>
            </div>
            <img src={item.img} alt={item.id} className="w-full h-full object-cover" />
            <div className="flex justify-center w-full text-white flex-col text-center absolute bottom-[40px]">
              <h3 className="font-poppins font-medium text-[15px] tracking-[1px]">{item.social}</h3>
              <h1 className="font-shippori font-bold text-[32px]">{item.title}</h1>
            </div>          
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Card