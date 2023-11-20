import React from 'react'
import styles from '../../styles'
import { heart, butterfly } from '../../assets'

const Message = () => {
  return (
    <section className={`${styles.padding} flex flex-col gap-5`}>
      <div className="flex ss:flex-row flex-col">
        <p className="flex-1 font-shippori sm:text-[23px] text-[18px] font-medium text-justify">
        Through the lens, we become storytellers, capturing the essence of fleeting moments that may otherwise slip away unnoticed. It's a silent language that transcends barriers, allowing the viewer to step into the photographer's world and experience the depth of the story that unfolds frame by frame.
        </p>
        <div className="flex-1 flex justify-end ss:justify-center items-center">
          <img src={butterfly} alt="butterfly" className="w-[180px] h-[11 0px] ss:h-[160px] ss:w-[310px] object-fill" />
        </div>
      </div>

      <div className="flex ss:flex-row-reverse flex-col ss:gap-20">
        <p className="flex-1 font-montserrat text-[15px] font-normal leading-[25px] text-justify">
          The photographer and the viewer connect, sharing in the beauty, complexity, and simplicity of the human experience, all without uttering a single word.
        </p>
        <div className="flex-1 flex justify-center items-center">
          <img src={heart} alt="butterfly" className="w-[410px] h-[80px]object-contain" />
        </div>
      </div>
    </section>
  )
}

export default Message