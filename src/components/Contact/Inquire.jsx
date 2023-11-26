import React from 'react'
import { useRef } from 'react';
import styles from '../../styles';
import { forms } from '../../constants';
import emailjs from '@emailjs/browser';
import Aos from '../../shared/partials/Aos';

const Inquire = () => {
  const formsInfo = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ronhawy', 'template_ekiz8ue', formsInfo.current, 'JFgepxEb7Y3lMU-fL')
      .then((response) => {
        alert('Email sent successfully:', response);
        formsInfo.current.reset();
      })
      .catch((error) => {
        alert('Error sending email:', error);
      });
  };

  return (
    <section className={`${styles.padding} mt-[30px]`}>
      <Aos/>
      <form ref={formsInfo} className="flex flex-col gap-[20px] sm:justify-center sm:items-center" onSubmit={handleSubmit} data-aos="fade-up">
        {forms.map((form) => (
          <label key={form.id} className="font-poppins opacity-[.7]">
            {form.title}<span className="text-[#f14141]">*</span> <br />
            <input type={form.type} name={form.name} 
            placeholder={form.placeholder}
            className="border-[1px] border-[#575757] px-[10px] sm:w-[330px] w-full h-[30px] focus:outline-none focus:border-[#b4a194]"
            required /> <br />
          </label>
        ))}
        <label className="font-poppins opacity-[.7]">
          Tell me something about your project<span className="text-[#f14141]">*</span> <br />
          <textarea type="text" name="message"
            rows="10"
            cols="30"
            className="border-[1px] border-[#575757] px-[10px] sm:w-[330px] w-full h-[250px] focus:outline-none focus:border-[#b4a194]"
            required/> <br />
        </label>
        <div className="flex justify-center items-center mt-[20px]">
          <button type="submit" value="Send" className="bg-[#cfb8a9] text-white font-poppins px-[10px] py-[5px]">
            Submit
          </button>
        </div>
        
      </form>
    </section>
  )
}

export default Inquire