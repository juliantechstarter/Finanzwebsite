import React, { useState } from 'react';
import './Login.css';
import loginBalken from '../assets/loginbalken.png'; // Import des Bildes aus assets

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Bitte füllen Sie alle Felder aus.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    setError('');
    console.log('E-Mail:', email);
    console.log('Passwort:', password);
  };

  return (
    <main className="login-page">
      {/* Header mit Logo */}
      <div className="login-header">
        <img src={loginBalken} alt="Finaera Logo" className="login-logo" />
      </div>

      {/* Login-Container */}
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Kennwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#">Kennwort vergessen?</a>
          </div>
          <button type="submit">➜ Anmelden</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
