import React from 'react';

function Rating({ children }) {
  
  const ratingValue = Math.round(Number(children));
  
 
  const stars = Array(5).fill('☆').map((star, index) => {
    return index < ratingValue ? '★' : '☆';
  });

  const style = {
    fontSize: '24px',
    letterSpacing: '4px',
    padding: '10px',
    margin: '10px 0',
  };

  return (
    <div style={style}>
      {stars.join('')}
    </div>
  );
}

export default Rating; 