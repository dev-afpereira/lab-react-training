import React from 'react';
import Random from '../components/Random';

function RandomPage() {
  return (
    <div className="page">
      <h1>Random Numbers</h1>
      <div className="greetings-list">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
    </div>
  );
}

export default RandomPage; 