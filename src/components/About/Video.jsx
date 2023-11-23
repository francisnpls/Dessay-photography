import React from 'react'
import styles from '../../styles'
import { Clips } from '../../assets/FilmImg'
import { useState, useRef } from 'react'
import Aos from '../../shared/partials/Aos'

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <section className={`${styles.paddingX} md:py-12 w-full flex md:flex-row flex-col-reverse gap-[20px]`}>
      <Aos/>
      <div className="flex-[0.8] flex justify-center flex-col" >
        <h2 className="font-shippori font-medium sm:text-[40px] text-[30px] text-[#40442f] uppercase md:text-start text-end sm:block hidden" data-aos="fade-right">A Journey Through My Time in the Nature</h2>
        <p className="font-antic font-normal text-[#373a3a] md:mt-[10px] mt-0 md:w-[95%]" data-aos="fade-up">
          This video compilation highlights my profound adventures in nature, from taking high mountains to camping underneath the stars and wandering peaceful rivers. Come along on this visual journey with me as I effectively combine serene moments, the excitement of discovery, and the raw beauty of nature.</p>
      </div>
      <div className="flex-1 relative w-full" data-aos="fade" data-aos-duration="2500">
        <video 
          ref={videoRef}
          width="100%"
          onClick={handlePlayClick}
          controls={isPlaying}
        >
          <source src={Clips} type="video/mp4"/>
          Video is not supported.
        </video>

        {!isPlaying && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" onClick={handlePlayClick}>
          <i className="fa-regular fa-circle-play text-dimWhite text-[70px]"></i>
        </div>
        )}
      </div>
      <h2 className="font-shippori font-medium sm:text-[40px] text-[30px] text-[#40442f] uppercase md:text-start text-end sm:hidden block" data-aos="fade-left"  data-aos-duration="1500">A Journey Through My Time in the Nature</h2>
    </section>
  )
}

export default Video