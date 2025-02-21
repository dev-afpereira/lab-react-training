import React from 'react';

function NumbersTable({ limit }) {
  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', 
    gap: '2px',
    maxWidth: '500px',
    margin: '0 auto'
  };

  const cellStyle = (number) => ({
    padding: '20px',
    textAlign: 'center',
    backgroundColor: number % 2 === 0 ? '#ff4444' : 'white',
    color: number % 2 === 0 ? 'white' : 'black',
    border: '1px solid #ddd',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'transform 0.2s',
    cursor: 'default',
    userSelect: 'none'
  });

  return (
    <div style={style}>
      {Array.from({ length: limit }, (_, i) => i + 1).map(number => (
        <div 
          key={number}
          style={cellStyle(number)}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable; 