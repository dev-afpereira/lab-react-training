import React from 'react';
import FaceBook from '../components/FaceBook';

function FaceBookPage() {
  return (
    <div className="page">
      <h2>Facebook Profiles</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
      }}>
        <FaceBook />
      </div>
    </div>
  );
}

export default FaceBookPage; 