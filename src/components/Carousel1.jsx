import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images from assets
import ButtonImage from '../assets/Button 2.png';
import chair1 from '../assets/p1s.png';
import chair2 from '../assets/p2s.png';
import chair3 from '../assets/p3s.png';

const images = [chair1, chair2, chair3];

const Carousel1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={image}
              alt={`Chair ${index + 1}`}
              style={{ width: '100%', height: '100vh', objectFit: 'cover', borderRadius: '10px' }} // Set height to 100vh
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow component
const Arrow = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#F9D6C3',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: direction === 'left' ? '20px' : 'unset', // Adjust left offset
        right: direction === 'right' ? '20px' : 'unset', // Adjust right offset
        cursor: 'pointer',
        fontSize: '20px',
        zIndex: 1000, // Ensure it's above other elements
      }}
    >
      {direction === 'left' ? '◀' : '▶'}
    </button>
  );
};

export default Carousel1;
    