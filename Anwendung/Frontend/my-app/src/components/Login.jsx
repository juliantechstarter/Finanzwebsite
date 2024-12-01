import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate Hook für die Navigation
import './Login.css';
import loginBalken from '../assets/loginbalken.png'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate Hook für die Navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Verhindert das Standardformularverhalten

    // Benutzer wird immer zu /startplaner weitergeleitet
    navigate('/startplaner'); 
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
          <div className="form-group">
            <input
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
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
