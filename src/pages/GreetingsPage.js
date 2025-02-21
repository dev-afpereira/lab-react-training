import React, { useState } from 'react';
import Greetings from '../components/Greetings';

function GreetingsPage() {
  const [name, setName] = useState('');
  const [selectedLang, setSelectedLang] = useState('en');
  const [greetings, setGreetings] = useState([]);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setGreetings([...greetings, { name, lang: selectedLang }]);
      setName('');
    }
  };

  return (
    <div className="page">
      <h1>Greetings Generator</h1>
      
      <form onSubmit={handleSubmit} className="greetings-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Add Greeting</button>
      </form>

      <div className="greetings-list">
        {greetings.map((greeting, index) => (
          <Greetings key={index} lang={greeting.lang}>
            {greeting.name}
          </Greetings>
        ))}
      </div>
    </div>
  );
}

export default GreetingsPage; 