import React from 'react'
import styles from '../../styles'
import { logo2 } from '../../assets/HomeImg'
import { socials } from '../../constants'
import { navLinks } from '../../constants'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[#f3f1ee]">
        <div className="flex-1 flex ss:flex-row flex-col ss:gap-10 gap-5">
          <div className="flex ss:justify-start ss:items-start  flex-col ss:gap-5 gap-2 sm:pt-12 sm:pl-12 pt-6 px-6">
            <div className="flex gap-2">
              <img src={logo2} alt="logo" className="w-[40px] h-[40px] object-contain"/>
              <h2 className="text-[25px] font-lilita text-[#988a80]">
              Dessay
              </h2>
            </div>
            <p className="text-[14px] uppercase ss:text-start font-montserrat">
              Based in Cavite, Philippines <br/> capturing everything
            </p>
            <div className={`flex items-center justify-start gap-5`}>
              <p className="text-[14px] uppercase font-montserrat" >Connect</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a href={social.link} key={social.id} className={`${styles.flexCenter} border-[1px] border-[#848d5e] 
                  w-[30px] h-[30px] rounded-full hover:border-[#3b6f56] hover:bg-[#3b6f56] ease-in duration-[.3s]`}>
                    <i className={`${social.icon} text-[15px] text-[#40442f]`}></i>
                  </a>
                ))}
              </div>
            </div>
            <p className="text-[12px] font-montserrat font-bold sm:block hidden">
              © Dessay Photo Creative 2023 | All Rights Reserved
            </p>
          </div>
          
          <div className={`flex-1 ${styles.paddingX} ss:pt-12 ss:py-0 py-6 flex ss:flex-row flex-col w-full ss:gap-[100px] bg-[#e1ddd8]`}>
            <ul className="list-none flex ss:flex-col flex-row ss:justify-between justify-around items-center gap-5 ss:pb-12 pb-10">
              {navLinks.map((nav) => (
              <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[16px]">
                <Link to={nav.link} className=" text-[14px] text-[#373a3a] hover:text-[#e6f89c] ease-in duration-[.2s]">
                  {nav.title}
                </Link>
              </li>
              ))}
            </ul>
            <div className="relative">
              <p className="text-[15px] text-[#373a3a] font-normal font-antic">Capturing Moments, Creating Memories</p>
              <p className="text-[15px] text-[#373a3a] font-normal font-antic">Photography is like telling a story. Join us on this artistic journey, where every click is a chapter in the story of life's extraordinary tapestry.</p>
              <button type='button' className="mt-5 cursor-pointer py-[10px] px-[35px] bg-[#f3f1ee] hover:bg-[#e6f89c] ease-in duration-[.3s]">
                <Link to="/contact" className="font-montserrat text-[#373a3a] text-[14px] uppercase tracking-[1px]">
                  Reach Out
                </Link>
              </button>
              <p className="text-[12px] font-montserrat font-bold sm:block hidden text-end mt-10">
                Designed and Developed by <span className="text-[#3b6f56]">Francisnpls.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden block my-2">
          <p className="text-[14px] font-montserrat text-center">
            © Dessay Photo Creative 2023 | All Rights Reserved
          </p>
          <p className="text-[14px] font-montserrat text-center">
            Designed and Developed by <span className="text-[#3b6f56] font-bold">Francisnpls.</span> 
          </p>
        </div>
    </footer>
  )
}

export default Footer