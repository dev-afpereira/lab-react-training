import React from 'react';

function BoxColor({ r, g, b }) {
  // Convert to numbers and ensure values are between 0 and 255
  const red = Math.min(255, Math.max(0, Number(r)));
  const green = Math.min(255, Math.max(0, Number(g)));
  const blue = Math.min(255, Math.max(0, Number(b)));

  const color = `rgb(${red},${green},${blue})`;
  const hexColor = '#' + 
    red.toString(16).padStart(2, '0') + 
    green.toString(16).padStart(2, '0') + 
    blue.toString(16).padStart(2, '0');

  const style = {
    backgroundColor: color,
    padding: '20px',
    margin: '10px 0',
    textAlign: 'center',
    color: ((red + green + blue) / 3 < 128) ? 'white' : 'black',
    borderRadius: '4px',
    border: '1px solid black',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={style}>
      {color}
      <br />
      {hexColor}
    </div>
  );
}

export default BoxColor; 