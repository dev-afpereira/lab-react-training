import React, { useState } from 'react';

function Random({ min, max }) {
  const generateRandom = () => Math.floor(Math.random() * (max - min + 1)) + min;
  const [randomNumber, setRandomNumber] = useState(generateRandom());

  const handleClick = () => {
    setRandomNumber(generateRandom());
  };

  return (
    <div className="random-container">
      <div className="greeting-box">
        Random value between {min} and {max} => {randomNumber}
      </div>
      <button className="random-button" onClick={handleClick}>
        Generate New Number
      </button>
    </div>
  );
}

export default Random; 