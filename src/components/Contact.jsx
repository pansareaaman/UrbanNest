import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import ContactImg from '../assets/contact.png';
import ButtonImg from '../assets/Submitbtn.png';

const Contact = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      easing: 'ease-in-out',
      once: false, // Animation happens once on scroll
    });
  }, []);

  return (
    <>
      <div className="h-container-contact" >
        <div className="h-left-contact" data-aos="fade-right">
          <p>Let’s Make Your Dream Space a Reality</p>
        </div>
        <div className="h-right-contact" >
          <img src={ContactImg} alt="Contact" />
        </div>
      </div>

      <div className="contact-main" >
        <div className="contact-container">
          <div className="contact-info" >
            <p><strong>Email:</strong><br /> ABC123@gmail.com</p>
            <p><strong>Phone No.:</strong> <br />8698110068 / 8888552425</p>
            <p><strong>Address:</strong> <br />Lane-no-03 Behind Monginis Bakery Near Angaraj dhaba, Kondhwa BK, Pune-48</p>
          </div>
          <div className="vertical-line"></div>
          <hr />
          <div className="contact-form" >
            <h1>CONTACT US</h1>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Message" required></textarea>
              <img src={ButtonImg} alt="" className="submitButton" />
            </form>
          </div>
        </div>
      </div>

      {/* New section with background image */}
      <div className="h-container-new-section" >
        <div className="h-left-new-section" data-aos="fade-right">
          <p>Find Your Perfect Sofa Right Where We Are</p>
        </div>
        <div className="h-right-new-section">
          <div className="map-background">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1413457654297!2d-122.419415584681!3d37.77492927975879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b1e09c5cf%3A0x57e33f40b19b572a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632827405398!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="map">
              </iframe>
            </div>
            <h2>Visit Our Shop</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
