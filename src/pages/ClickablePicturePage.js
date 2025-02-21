import React from 'react';
import ClickablePicture from '../components/ClickablePicture';

function ClickablePicturePage() {
  return (
    <div className="page">
      <h2>Clickable Picture</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <ClickablePicture
          img="http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png"
          imgClicked="/img/maxence-glasses.png"
        />
      </div>
    </div>
  );
}

export default ClickablePicturePage; 