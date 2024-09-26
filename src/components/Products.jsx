import React from 'react';
import Carousel1 from './Carousel1';
import './products.css'; // Import the CSS file for styling

// Dynamically import all 153 images
const importImages = () => {
  const images = [];
  for (let i = 1; i <= 153; i++) {
    images.push(require(`../assets/productImages/pi (${i}).jpg`)); // Adjust path/extension if needed
  }
  return images;
};

const images = importImages();

const Products = () => {
  return (
    <div className="products-container">
      <Carousel1 />
      <h1>Products</h1>
      <div className="products-images">
        {images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Product ${index + 1}`} className="product-image" />
        ))}
      </div>
    </div>
  );
};

export default Products;
