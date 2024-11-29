import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './start.module.css';
import logoImage from '../assets/FINAERALOGO.png'; // Logo-Bild
import bgImage from '../assets/fpbg.png'; // Hintergrundbild

function Start() {
  const [clicked, setClicked] = useState(false); // Zustand für Klick-Animation
  const [animateText, setAnimateText] = useState(false); // Zustand für Texteffekte
  const navigate = useNavigate();

  useEffect(() => {
    setAnimateText(true); // Startet Textanimation beim Laden der Seite
  }, []);

  const handleLogoClick = () => {
    setClicked(true); // Startet Klick-Animation
    setTimeout(() => {
      navigate('/home'); // Navigiert nach Animation
    }, 1000);
  };

  return (
    <div className={styles.startContainer}>
      <div className={styles.centerContent}>
        <h1
          className={`${styles.startTitle} ${animateText ? styles.fadeInFromLeft : ''}`}
        >
          Are you ready
        </h1>
        <img
          src={logoImage}
          alt="FINAERA Logo"
          className={`${styles.startLogo} ${clicked ? styles.logoClicked : ''}`}
          onClick={handleLogoClick}
        />
        <h2
          className={`${styles.startTitleBelow} ${animateText ? styles.fadeInFromRight : ''}`}
        >
          for Financial Freedom
        </h2>
      </div>
    </div>
  );
}

export default Start;
