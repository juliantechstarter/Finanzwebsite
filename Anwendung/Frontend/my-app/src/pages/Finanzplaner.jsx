import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import './Finanzplaner.css';
import appBanner from '../assets/APPBANNER.png'; // Bildimport

function Finanzplaner() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isAdVisible, setIsAdVisible] = useState(true); // Zustand für die Werbung

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoginVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closeAd = () => {
    setIsAdVisible(false);
  };

  return (
    <div className="finanzplaner-page">
      <div className="background"></div>
      <div className={`login-wrapper ${isLoginVisible ? 'visible' : ''}`}>
        <Login />
      </div>

      {/* Werbung */}
      {isAdVisible && (
        <div className="ad-popup">
          <button className="ad-close-btn" onClick={closeAd}>
            ✕
          </button>
          <img src={appBanner} alt="Werbung" className="ad-image" />
        </div>
      )}
    </div>
  );
}

export default Finanzplaner;
