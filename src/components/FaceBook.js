import React from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '600px'
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    objectFit: 'cover'
  };

  const infoStyle = {
    flex: 1
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '5px'
  };

  return (
    <div style={{ padding: '20px' }}>
      {profiles.map((profile, index) => (
        <div key={index} style={cardStyle}>
          <img 
            src={profile.img} 
            alt={`${profile.firstName} ${profile.lastName}`}
            style={imageStyle}
          />
          <div style={infoStyle}>
            <p><span style={labelStyle}>First name:</span> {profile.firstName}</p>
            <p><span style={labelStyle}>Last name:</span> {profile.lastName}</p>
            <p><span style={labelStyle}>Country:</span> {profile.country}</p>
            <p><span style={labelStyle}>Type:</span> {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook; 