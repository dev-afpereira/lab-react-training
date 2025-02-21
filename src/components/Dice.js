import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const [diceValue, setDiceValue] = useState(3); // Começa com o valor 3
  const [isRolling, setIsRolling] = useState(false);

  const diceImages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6
  };

  const rollDice = () => {
    setIsRolling(true);
   
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
      setIsRolling(false);
    }, 1000);
  };

  const diceStyle = {
    cursor: 'pointer',
    width: '100px',
    height: '100px'
  };

  return (
    <img 
      src={isRolling ? diceEmpty : diceImages[diceValue]}
      alt={`Dice ${diceValue}`}
      style={diceStyle}
      onClick={!isRolling ? rollDice : undefined}
      className={isRolling ? 'rolling' : ''}
    />
  );
}

export default Dice; 