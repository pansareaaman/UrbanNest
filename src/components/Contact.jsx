import React from 'react'
import './contact.css'
import ContactImg from '../assets/contact.png'
const Contact = () => {
  return (
    <>
     <div className="h-container-contact">
        <div className="h-left-contact"  data-aos="fade-right">
          <p>Let’s Make Your Dream Space a Reality</p>
        </div>
        <div className="h-right-contact"  data-aos="fade-left">
          <img src={ContactImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Contact
