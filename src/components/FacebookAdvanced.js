import React, { useState } from 'react';
import profiles from '../data/berlin.json';

function FacebookAdvanced() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [expandedProfiles, setExpandedProfiles] = useState(new Set());

 
  const countries = ['All', ...new Set(profiles.map(profile => profile.country))];

  const toggleProfile = (index) => {
    const newExpanded = new Set(expandedProfiles);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProfiles(newExpanded);
  };

 
  let filteredProfiles = profiles.filter(profile => 
    selectedCountry === 'All' || profile.country === selectedCountry
  );

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    buttons: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    countryButton: (country) => ({
      padding: '8px 16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: selectedCountry === country ? '#e3f2fd' : 'white',
      color: 'black'
    }),
    card: (country) => ({
      border: '1px solid #ddd',
      borderRadius: '4px',
      margin: '10px 0',
      padding: '20px',
      display: 'flex',
      gap: '20px',
      backgroundColor: selectedCountry === country ? '#e3f2fd' : 'white',
      transition: 'background-color 0.3s ease'
    }),
    image: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      cursor: 'pointer'
    },
    info: {
      flex: 1
    },
    label: {
      fontWeight: 'bold',
      marginRight: '5px'
    },
    text: {
      margin: '5px 0'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttons}>
        {countries.map(country => (
          <button
            key={country}
            style={styles.countryButton(country)}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
        <button style={styles.countryButton('...')}>...</button>
      </div>

      {filteredProfiles.map((profile, index) => (
        <div key={index} style={styles.card(profile.country)}>
          <img
            src={profile.img}
            alt={`${profile.firstName} ${profile.lastName}`}
            style={styles.image}
            onClick={() => toggleProfile(index)}
          />
          {expandedProfiles.has(index) && (
            <div style={styles.info}>
              <p style={styles.text}>
                <span style={styles.label}>First name:</span> {profile.firstName}
              </p>
              <p style={styles.text}>
                <span style={styles.label}>Last name:</span> {profile.lastName}
              </p>
              <p style={styles.text}>
                <span style={styles.label}>Country:</span> {profile.country}
              </p>
              <p style={styles.text}>
                <span style={styles.label}>Type:</span> {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FacebookAdvanced; 