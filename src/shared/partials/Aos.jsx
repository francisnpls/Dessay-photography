import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Aos = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 100 
        });
      }, []);

    return null;
} 

export default Aos