import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';
import recepImage from '../assets/recep.png'; // Hauptbild
import hausImage from '../assets/haus.png'; // Erstes linkes Bild
import deckeImage from '../assets/decke.png'; // Erstes rechtes Bild
import loungeImage from '../assets/lounge.png'; // Zweites linkes Bild
import fensterImage from '../assets/fenster.png'; // Zweites rechtes Bild
import logoImage from '../assets/FINAERALOGO.png'; // Logo-Bild

function Start() {
  const [currentStage, setCurrentStage] = useState(1);
  const navigate = useNavigate();

  // Wechsle zwischen den Bildstufen
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prevStage) => (prevStage === 4 ? 1 : prevStage + 1));
    }, 3000); // Wechsel jede 3 Sekunden
    return () => clearInterval(interval);
  }, []);

  // Navigiere zur Home-Seite
  const handleLogoClick = () => {
    navigate('/home'); // Navigiere zur Home.jsx
  };

  return (
    <div className="start-container">
      {/* Linker Bereich mit Logo und Text */}
      <div className="start-left">
        <div className="title-container">
          <h1 className="start-title">Welcome to</h1>
          <img
            src={logoImage}
            alt="FINAERA Logo"
            className="start-logo"
            onClick={handleLogoClick} // Navigation zur Home-Seite
          />
        </div>
      </div>

      {/* Rechter Bereich mit animierten Bildern */}
      <div className="start-right">
        <div className={`image-container stage-${currentStage}`}>
          {/* Hauptbild */}
          {currentStage === 1 && (
            <img src={recepImage} alt="Reception" className="main-image fade-in" />
          )}
          {/* Zwei kleinere Bilder nebeneinander */}
          {(currentStage === 2 || currentStage === 3) && (
            <div className="side-image-group">
              <img
                src={currentStage === 2 ? hausImage : loungeImage}
                alt="Left"
                className="side-image left fade-in"
              />
              <img
                src={currentStage === 2 ? deckeImage : fensterImage}
                alt="Right"
                className="side-image right fade-in"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Start;
