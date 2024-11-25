import React, { useState } from 'react';
import './Login.css'; // CSS-Datei für das Styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validierungslogik
    if (!email || !password) {
      setError('Bitte füllen Sie alle Felder aus.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    // Falls alles korrekt ist, Fehler zurücksetzen
    setError('');
    console.log('E-Mail:', email);
    console.log('Passwort:', password);
  };

  return (
    <main className="login-container">
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
    </main>
  );
}

export default Login;
