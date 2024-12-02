import React from 'react';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

import image4 from '../assets/image4.jpg'





const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-item" style={{ '--index': 0 }}>
      <img src={image1} alt="Image 1" />
        
      </div>
      <div className="carousel-item" style={{ '--index': 1 }}>
      <img src={image2} alt="Image 2" />
        
      </div>
      <div className="carousel-item" style={{ '--index': 2 }}>
      <img src={image3} alt="Image 3" />
       
      </div>
      <div className="carousel-item" style={{ '--index': 3 }}>
      <img src={image4} alt="Image 4" />
       
      </div>
    </div>
  );
};

export default Carousel;