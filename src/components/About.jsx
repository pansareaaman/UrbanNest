import React from 'react'
import '../components/about.css'
import Contactimage from '../assets/contactimg.png' // Existing image
import GridImage2 from '../assets/contacth3image1.png' // New image for Grid Item 2
import GridImage4 from '../assets/contacth3image2.png' // New image for Grid Item 4

const About = () => {
  return (
    <>
      <div className="h-container-about">
        <div className="h-left-about">
          <p>Our Commitment to Your Comfort.</p>
        </div>
        <div className="h-right-about">
          <img src={Contactimage} alt="" />
        </div>
      </div>
      
      <div className="h2-container-about">
        <div className="h2-heading-about">
          <p className="h2-heading-title-about">Overview</p>
          <p className="h2-heading-paragraph-about">
            At UrbansNest, comfort is our promise. Every sofa we create reflects our dedication to your relaxation and style. We carefully select the finest materials and focus on every detail to ensure our sofas not only enhance your space but also elevate your everyday comfort.
          </p>
        </div>
      </div>

      <div className="h3-container-about">
        <div className="h3-wrapper-about">
          <div className="" style={{border:"none"}}>
            <p className="h3-heading-title-about">
              Carefully<br /> Considered Details <br />and Craftsmanship
            </p>
            <p className="h3-heading-paragraph-about">
              Expertise and creativity are gratefully reflected in the outline of our sofas – style and comfort that endure.
            </p>
          </div>
          
          <div className="h3-item">
            <img src={GridImage2} alt="Grid Item 2" className="grid-image" />
          </div>
          
          <div className="h3-item">
          <img src={GridImage4} alt="Grid Item 4" className="grid-image" />
         </div>
          
          <div className="" style={{border:"none"}}>
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
  )
}

export default About
