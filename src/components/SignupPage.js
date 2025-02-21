import React, { useState, useEffect } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('de');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);

  // Validar email usando regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validar força da senha
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Atualizar validações quando email ou senha mudam
  useEffect(() => {
    setIsEmailValid(validateEmail(email));
    setIsPasswordStrong(validatePassword(password));
  }, [email, password]);

  // Mensagens de saudação por nacionalidade
  const greetings = {
    en: 'Hello',
    de: 'Hallo',
    fr: 'Bonjour'
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px'
    },
    input: (isValid) => ({
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      border: `1px solid ${isValid ? '#4CAF50' : '#FF5252'}`,
      borderRadius: '4px',
      outline: 'none'
    }),
    select: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px'
    },
    button: {
      backgroundColor: '#4B5FE3',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer'
    },
    validationText: (isValid) => ({
      color: isValid ? '#4CAF50' : '#FF5252',
      fontSize: '14px',
      marginTop: '5px'
    }),
    greeting: {
      fontSize: '18px',
      marginTop: '20px'
    },
    emailConfirm: {
      fontSize: '16px',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input(isEmailValid)}
        />
        <div style={styles.validationText(isEmailValid)}>
          {email && (isEmailValid ? 'You typed a valid email' : 'Please enter a valid email')}
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input(isPasswordStrong)}
        />
        <div style={styles.validationText(isPasswordStrong)}>
          {password && (isPasswordStrong ? 'Password is strong' : 'Your password is too weak')}
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Nationality</label>
        <select
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          style={styles.select}
        >
          <option value="de">German</option>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>

      <button style={styles.button}>Sign up</button>

      <div style={styles.greeting}>
        {greetings[nationality]}
      </div>

      <div style={styles.emailConfirm}>
        Your email address is: {email}
        {isEmailValid && <div>Your email address is correct</div>}
      </div>
    </div>
  );
}

export default SignupPage; 