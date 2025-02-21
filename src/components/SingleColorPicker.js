import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      margin: '10px 0'
    },
    colorSquare: {
      width: '50px',
      height: '50px',
      backgroundColor: color === 'r' ? 'red' : color === 'g' ? 'green' : 'blue'
    },
    input: {
      width: '100px',
      padding: '5px',
      fontSize: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.colorSquare}></div>
      <label>
        {color.toUpperCase()}:
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={styles.input}
        />
      </label>
    </div>
  );
}

export default SingleColorPicker; 