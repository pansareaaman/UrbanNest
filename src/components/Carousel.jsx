import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

// Import images from assets
import ButtonImage from '../assets/Button 2.png';
import chair1 from '../assets/caro1.png';
import chair2 from '../assets/caro2.png';
import chair3 from '../assets/caro3.png';

const images = [chair1, chair2, chair3];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: currentSlide,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: null, // Remove default next arrow
    prevArrow: null, // Remove default previous arrow
  };


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    if(windowWidth>=768&&windowWidth<1024){
      setCurrentSlide(2)
    }else if(windowWidth<768){
      setCurrentSlide(1)
    }else if(windowWidth>=1024){{
      setCurrentSlide(3)
    }
  }

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);







  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                border: '2px solid #F9D6C3',
                margin: '5px'
              }}
            >
              <img
                src={image}
                alt={`Chair ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '10px',
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="carousel-controls">
        <div className="button-group">
          <button
            className="carousel-button"
            onClick={() => document.querySelector('.slick-prev').click()}
          >
            ◀
          </button>
          <button
            className="carousel-button"
            onClick={() => document.querySelector('.slick-next').click()}
          >
            ▶
          </button>
        </div>
        <div className="image-container">
          <img src={ButtonImage} alt="Additional Button" className="additional-button" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
