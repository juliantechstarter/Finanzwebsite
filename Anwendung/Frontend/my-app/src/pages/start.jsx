import React from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';

function Start() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home'); // Navigiert zur Home-Seite
  };

  return (
    <div className="start-container">
      <h1>Willkommen bei FINAERA</h1>
      <p>Entdecken Sie Ihre Möglichkeiten mit uns.</p>
      <div className="start-images">
        <img
          src="path_to_your_image_1.jpg"
          alt="Bild 1"
          onClick={handleNavigate}
        />
        <img
          src="path_to_your_image_2.jpg"
          alt="Bild 2"
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
}

export default Start;
