import React, { useState, useRef } from 'react';
import Carousel1 from './Carousel1';
import './products.css'; // Import the CSS file for styling
import imagesData from '../images.json'; // Import the images data from JSON
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust this to display 10 images per page
  
  // Create a reference to the <h1> element
  const headerRef = useRef(null);

  // Dynamically import all images using require.context()
  const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  // Webpack context to require all images from the specified folder
  const images = importAllImages(require.context('../assets/productImages', false, /\.(jpg)$/));

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All'
    ? imagesData
    : imagesData.filter(image => image.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const currentImages = filteredImages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);

    // Scroll to the <h1> element when pagination changes
    if (headerRef.current) {
      headerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scroll to the start of the element
      });
    }
  };

  return (
    <div className="products-container">
      <Carousel1 />
      <h1 ref={headerRef}>Products</h1> {/* Attach the ref to the <h1> element */}

      {/* Category selection dropdown */}
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Sofa">Sofa</option>
        <option value="Chair">Chair</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Bed">Bed</option>
      </select>

      {/* Display filtered and paginated images */}
      <div className="products-images">
        {currentImages.map((image) => (
          <img
            key={image.id}
            src={images[image.src.replace('assets/productImages/', '')]} // Use the imported image
            alt={image.alt}
            className="product-image"
          />
        ))}
      </div>

      {/* Center the pagination */}
      <Stack spacing={2} style={{ marginTop: '20px', textAlign: 'center' }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          size="small"
          sx={{
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#F9D6C3',
              color: '#000',  // Change the text color if necessary
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default Products;
