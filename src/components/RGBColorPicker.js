import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(150);
  const [bValue, setBValue] = useState(0);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto'
    },
    colorDisplay: {
      width: '100px',
      height: '100px',
      border: '2px solid #ddd',
      marginTop: '20px'
    },
    rgbText: {
      fontFamily: 'monospace',
      marginTop: '10px',
      fontSize: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={setRValue}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={setGValue}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={setBValue}
      />
      
      <div 
        style={{
          ...styles.colorDisplay,
          backgroundColor: `rgb(${rValue},${gValue},${bValue})`
        }}
      />
      <div style={styles.rgbText}>
        rgb({rValue},{gValue},{bValue})
      </div>
    </div>
  );
}

export default RGBColorPicker; 