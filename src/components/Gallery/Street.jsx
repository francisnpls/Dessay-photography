import React from 'react'
import styles from '../../styles'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import { useState, useEffect } from 'react'
import { streetImages } from '../../constants/gallery'
import { kabayo } from '../../assets/StreetImg'
import Aos from '../../shared/partials/Aos'


const Street = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i) => {
      setData({img, i})
    }
  
    const imgAction = (action) => {
      let i = data.i;
      if(action === 'next-img') {
        setData({img: streetImages[i + 1], i: i + 1})
      } else if(action == 'prev-img') {
        setData({img: streetImages[i - 1], i: i - 1})
      } else if(!action) {
        setData({img: '', i: 0})
      }
    }

    useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        imgAction('next-img');
      } else if (event.key === 'ArrowLeft') {
        imgAction('prev-img');
      } else if (event.key === 'Escape') {
        imgAction();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [data]);
  
    return (
      <section className={`${styles.padding} w-full relative`}>
        <Aos/>
  
        {data.img &&
          <div className={`w-full h-screen bg-[#000000f6] fixed left-0 top-[0] ${styles.flexCenter} gap-[100px] z-50`}>
            <button type='button' className="md:static absolute left-[30px]" onClick={() => imgAction('prev-img')}>
              <i className="fa-solid fa-chevron-left md:text-[40px] text-[30px] text-white"></i>
            </button>
            <img src={data.img} alt="" className="w-auto max-w-[90%] max-h-[100%] py-12"/>
            <button type='button' className="md:static absolute right-[30px]" onClick={() => imgAction('next-img')}>
              <i className="fa-solid fa-chevron-right md:text-[40px] text-[30px] text-white" ></i>
            </button>
            <button type='button' className="absolute top-[20px] md:right-[50px] right-[20px]" onClick={() => imgAction()}>
              <i className="fa-solid fa-xmark text-[30px] text-white"></i>
            </button>
          </div>
        }
  
        <div>
          <img src={kabayo} alt="garuts" className="object-contain" data-aos="fade" data-aos-duration="2000"/>
          <h1 className="font-shippori text-center text-[30px] text-[#373a3a] uppercase sm:mt-12 mt-6" data-aos="flip-up"> 
            Streets
          </h1>
        </div>
  
        <div className="sm:pt-12 pt-6">
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="20px">
              {streetImages.map((image, i) => (
                <img 
                  key={i}
                  src={image} 
                  alt={image}
                  className="w-full block cursor-pointer" 
                  data-aos="fade"
                  data-aos-duration="2500"
                  onClick={() => viewImage(image, i)}
                  />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    )
  }

export default Street