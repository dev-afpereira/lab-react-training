import React from 'react';
import Rating from '../components/Rating';

function RatingPage() {
  return (
    <div className="page">
      <h1>Rating</h1>
      <div className="rating-container">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
    </div>
  );
}

export default RatingPage; 