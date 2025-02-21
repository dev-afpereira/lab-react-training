import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  const style = {
    backgroundColor: '#4B5FE3',
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '600px',
    margin: '10px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover'
  };

  const infoStyle = {
    flex: 1
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px'
  };

  const carStyle = {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.8)'
  };

  return (
    <div style={style}>
      <img src={img} alt={name} style={imageStyle} />
      <div style={infoStyle}>
        <div style={nameStyle}>{name}</div>
        <Rating>{rating}</Rating>
        <div style={carStyle}>
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard; 