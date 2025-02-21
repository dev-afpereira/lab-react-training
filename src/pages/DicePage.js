import React from 'react';
import Dice from '../components/Dice';

function DicePage() {
  return (
    <div className="page">
      <h2>Dice Roller</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}>
        <Dice />
      </div>
    </div>
  );
}

export default DicePage; 