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
      {/* Freier Bereich unter der Navbar */}
      <div className="spacer"></div>

      {/* Überschrift */}
      <h2 className="signature-font">Gemeinsam Werte schaffen</h2>
      <h1 className="title-font">DAS UNTERNEHMEN FINAERA</h1>

      {/* Hero-Bereich */}
      <div className="hero-section">
        <img src={recepImage} alt="Hauptbild des Unternehmens" className="hero-image" />
        <p className="hero-caption">
          Willkommen bei FINAERA – Ihrem verlässlichen Partner für innovative Finanzberatung. Unsere Struktur ist so gestaltet,
          dass sie nachhaltigen Erfolg und langfristige Unabhängigkeit gewährleistet.
        </p>
      </div>

      {/* Werte-Sektion */}
      <div className="content-section">
        <h2 className="content-title">Unsere Werte</h2>
        <p className="content-description">
          FINAERA ist mehr als nur ein Finanzunternehmen. Wir glauben an Unabhängigkeit, Transparenz und langfristige Partnerschaften.
          Unsere Beraterinnen und Berater sind nicht nur Teil unseres Teams, sondern auch Gesellschafter, die die Entwicklung
          des Unternehmens aktiv mitgestalten.
        </p>

        {/* Galerie */}
        <div className="photos-container">
          <div className="photo-item">
            <img src={hausImage} alt="Außenansicht des Unternehmensgebäudes" className="photo" />
            <p>Unsere Hauptzentrale – ein Symbol für Beständigkeit und Fortschritt.</p>
          </div>
          <div className="photo-item">
            <img src={deckeImage} alt="Moderne Innenarchitektur" className="photo" />
            <p>Einblicke in unsere modernen Arbeitsräume.</p>
          </div>
          <div className="photo-item">
            <img src={loungeImage} alt="Lounge-Bereich" className="photo" />
            <p>Einladende Lounge-Bereiche für Meetings und Zusammenarbeit.</p>
          </div>
          <div className="photo-item">
            <img src={fensterImage} alt="Helle Arbeitsumgebung" className="photo" />
            <p>Offene und lichtdurchflutete Büros für maximale Produktivität.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unternehmen;
