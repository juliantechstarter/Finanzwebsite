import React from 'react';
import './Unternehmen.css';
import recepImage from '../assets/recep.png'; // Hauptbild
import hausImage from '../assets/haus.png'; // Erstes linkes Bild
import deckeImage from '../assets/decke.png'; // Erstes rechtes Bild
import loungeImage from '../assets/lounge.png'; // Zweites linkes Bild
import fensterImage from '../assets/fenster.png'; // Zweites rechtes Bild

function Unternehmen() {
  return (
    <div className="unternehmen-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={recepImage} alt="Hauptbild des Unternehmens" className="hero-image" />
        <div className="hero-text">
          <h1>Unser Unternehmen</h1>
          <p>
            Willkommen bei FINAERA – Ihrem verlässlichen Partner für innovative Finanzberatung. Unsere Unternehmensstruktur ist so
            gestaltet, dass sie nachhaltigen Erfolg und langfristige Unabhängigkeit gewährleistet.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="text-block">
          <h2>Unsere Werte</h2>
          <p>
            FINAERA ist mehr als nur ein Finanzunternehmen. Wir glauben an Unabhängigkeit, Transparenz und langfristige Partnerschaften.
            Unsere Beraterinnen und Berater sind nicht nur Teil unseres Teams, sondern auch Gesellschafter, die die Entwicklung
            des Unternehmens aktiv mitgestalten.
          </p>
        </div>

        <div className="image-gallery">
          <div className="image-row">
            <div className="image-item">
              <img src={hausImage} alt="Außenansicht des Unternehmensgebäudes" />
              <p>Unsere Hauptzentrale – ein Symbol für Beständigkeit und Fortschritt.</p>
            </div>
            <div className="image-item">
              <img src={deckeImage} alt="Moderne Innenarchitektur" />
              <p>Einblicke in unsere modernen Arbeitsräume.</p>
            </div>
          </div>
          <div className="image-row">
            <div className="image-item">
              <img src={loungeImage} alt="Lounge-Bereich" />
              <p>Einladende Lounge-Bereiche für Meetings und Zusammenarbeit.</p>
            </div>
            <div className="image-item">
              <img src={fensterImage} alt="Helle Arbeitsumgebung" />
              <p>Offene und lichtdurchflutete Büros für maximale Produktivität.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unternehmen;
