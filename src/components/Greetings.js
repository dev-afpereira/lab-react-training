import React from 'react';

function Greetings({ lang, children }) {
  const greetings = {
    en: 'Hello',
    de: 'Hallo',
    fr: 'Bonjour',
    es: 'Hola'
  };

  return (
    <div className="greeting-box">
      {greetings[lang]} {children}
    </div>
  );
}

export default Greetings; 