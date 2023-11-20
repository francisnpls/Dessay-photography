import React from 'react'
import styles from '../../styles'

const Amira = () => {
  return (
    <section className={`${styles.padding} w-full sm:h-screen h-[80vh] bg-bgAmira bg-cover bg-no-repeat bg-center`}>
      <div className={`${styles.flexCenter} sm:w-[305px] sm:h-[305px] w-[210px] h-[210px] bg-[#ecedd2] cursor-pointer rounded-full relative 
      top-[130px] sm:left-[50px] hover:bg-[#e6f89c] ease-in-out duration-[.4s] `}>
        <a href="https://www.instagram.com/solagrati4/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target='_blank'
        className="font-shippori sm:text-[30px] text-[20px] text-center"> 
          CLICK HERE <br/> TO CHECK <br/> MY <br/> INSTAGRAM 
        </a>
      </div>
      
    </section>
  )
}

export default Amira