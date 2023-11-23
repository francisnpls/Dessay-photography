import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'
import { Gallery } from '../../constants'
import Aos from '../../shared/partials/Aos'

const Choices = () => {
  return (
    <section className="w-full pt-[90px]">
      <Aos/>
      <ul className={`${styles.flexCenter} list-none xs:gap-[20px] gap-[10px]`}data-aos="flip-down">
        {Gallery.map((item) => (
          <li key={item.id} className="font-montserrat sm:text-[18px] text-[16px] cursor-pointer">
            <Link to={item.link} className="text-[#373a3a] hover:text-[#3b6f56]"> 
              {item.title} 
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Choices