import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import './Finanzplaner.css';

function Finanzplaner() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoginVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="finanzplaner-page">
      <div className="background"></div>
      <div className={`login-wrapper ${isLoginVisible ? 'visible' : ''}`}>
        <Login />
      </div>
    </div>
  );
}

export default Finanzplaner;

