import React from 'react';
import LikeButton from '../components/LikeButton';

function LikeButtonPage() {
  return (
    <div className="page">
      <h1>Like Buttons</h1>
      <div style={{ 
        display: 'flex', 
        gap: '20px',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}>
        <LikeButton />
        <LikeButton />
      </div>
    </div>
  );
}

export default LikeButtonPage; 