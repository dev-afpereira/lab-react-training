import React, { useState } from 'react';
import BoxColor from '../components/BoxColor';

function BoxColorPage() {
  const [rgbValues, setRgbValues] = useState({
    r: 255,
    g: 0,
    b: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Limitar o valor entre 0 e 255
    let newValue = Math.min(255, Math.max(0, Number(value) || 0));
    
    setRgbValues(prevValues => ({
      ...prevValues,
      [name]: newValue
    }));
    
    console.log('Updated RGB:', name, newValue); // Para debug
  };

  return (
    <div className="page">
      <h1>Box Color</h1>
      
      <div className="color-inputs">
        <div className="input-group">
          <label>Red (0-255):</label>
          <input
            type="number"
            name="r"
            min="0"
            max="255"
            value={rgbValues.r}
            onChange={handleChange}
          />
        </div>
        
        <div className="input-group">
          <label>Green (0-255):</label>
          <input
            type="number"
            name="g"
            min="0"
            max="255"
            value={rgbValues.g}
            onChange={handleChange}
          />
        </div>
        
        <div className="input-group">
          <label>Blue (0-255):</label>
          <input
            type="number"
            name="b"
            min="0"
            max="255"
            value={rgbValues.b}
            onChange={handleChange}
          />
        </div>
      </div>

      <BoxColor 
        r={rgbValues.r} 
        g={rgbValues.g} 
        b={rgbValues.b} 
      />
    </div>
  );
}

export default BoxColorPage; 