import React, { useState } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button 
        className="carousel-button prev"
        onClick={goToPrevious}
      >
        ‹
      </button>

      <div className="carousel-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <button 
        className="carousel-button next"
        onClick={goToNext}
      >
        ›
      </button>
    </div>
  );
}

export default Carousel; 