import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../components/about.css';
import Contactimage from '../assets/contactimg.png'; // Existing image
import GridImage2 from '../assets/contacth3image1.png'; // New image for Grid Item 2
import GridImage4 from '../assets/contacth3image2.png'; // New image for Grid Item 4

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="h-container-about" >
        <div className="h-left-about" > 
          <p data-aos="fade-right">Our Commitment to Your Comfort.</p>
        </div>
        <div className="h-right-about" data-aos="fade-left">
          <img src={Contactimage} alt="" />
        </div>
      </div>

      <div className="h2-container-about" >
        <div className="h2-heading-about" data-aos="fade-up">
          <p className="h2-heading-title-about">Overview</p>
          <p className="h2-heading-paragraph-about">
            At UrbansNest, comfort is our promise. Every sofa we create reflects our dedication to your relaxation and style. We carefully select the finest materials and focus on every detail to ensure our sofas not only enhance your space but also elevate your everyday comfort.
          </p>
        </div>
      </div>

      <div className="h3-container-about">
        <div className="h3-wrapper-about">
          <div className="" style={{ border: "none" }} >
            <p className="h3-heading-title-about">
              Carefully<br /> Considered Details <br />and Craftsmanship
            </p>
            <p className="h3-heading-paragraph-about">
              Expertise and creativity are gratefully reflected in the outline of our sofas – style and comfort that endure.
            </p>
          </div>

          <div className="h3-item" data-aos="zoom-in">
            <img src={GridImage2} alt="Grid Item 2" className="grid-image" />
          </div>

          <div className="h3-item" data-aos="zoom-in">
            <img src={GridImage4} alt="Grid Item 4" className="grid-image" />
          </div>

          <div className="" style={{ border: "none" }} >
            <p className="h3-heading-title-about">
              Crafted in Combination<br /> of Beauty and <br />Perfections
            </p>
            <p className="h3-heading-paragraph-about">
              Expertise and creativity are gratefully reflected in the outline of our sofas – style and comfort that endure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
