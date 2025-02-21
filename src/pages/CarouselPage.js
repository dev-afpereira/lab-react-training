import React from 'react';
import Carousel from '../components/Carousel';

function CarouselPage() {
  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ];

  return (
    <div className="page">
      <h2>Image Carousel</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default CarouselPage; 