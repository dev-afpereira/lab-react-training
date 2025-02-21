import React from 'react';

function CreditCard({ 
  type, 
  number, 
  expirationMonth, 
  expirationYear, 
  bank, 
  owner, 
  bgColor, 
  color 
}) {
  
  const visaLogo = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg";
  const mastercardLogo = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg";
  
  const maskedNumber = '•••• •••• •••• ' + number.slice(-4);
  
  const formattedMonth = String(expirationMonth).padStart(2, '0');
  const formattedYear = String(expirationYear).slice(-2);

  const style = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: '10px',
    padding: '20px',
    width: '350px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '10px',
    fontFamily: 'monospace',
  };

  const logoStyle = {
    alignSelf: 'flex-end',
    height: '30px',
    marginBottom: '20px',
    filter: color === 'white' ? 'brightness(0) invert(1)' : 'none' // Inverte a cor do logo se o texto for branco
  };

  const numberStyle = {
    fontSize: '24px',
    letterSpacing: '2px',
    margin: '20px 0'
  };

  const detailsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontSize: '16px'
  };

  return (
    <div style={style}>
      <img 
        src={type === "Visa" ? visaLogo : mastercardLogo} 
        alt={type}
        style={logoStyle}
      />
      
      <div style={numberStyle}>
        {maskedNumber}
      </div>
      
      <div style={detailsStyle}>
        <div>
          <div>Expires {formattedMonth}/{formattedYear}</div>
          <div>{bank}</div>
          <div>{owner}</div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard; 