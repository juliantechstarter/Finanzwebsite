import React from 'react';
import './Unternehmen.css';
import mainImage from '../assets/recep.png'; // Hauptbild rechts
import image1 from '../assets/haus.png'; // Erstes Bild unten links
import image2 from '../assets/decke.png'; // Zweites Bild unten links
import image3 from '../assets/lounge.png'; // Drittes Bild unten links

function Unternehmen() {
  return (
    <div className="unternehmen-page">
      {/* Obere Sektion */}
      <div className="top-section">
        {/* Linke Überschrift */}
        <div className="header-text">
          <h2 className="signature-font">Gemeinsam Werte schaffen</h2>
          <h1 className="title-font">DAS UNTERNEHMEN FINAERA</h1>
        </div>
        {/* Rechte Bildsektion */}
        <div className="header-image">
          <img src={mainImage} alt="Empfang" />
        </div>
      </div>

      {/* Mittlere Sektion */}
      <div className="middle-section">
        {/* Drei Bilder horizontal nebeneinander */}
        <div className="gallery">
          <img src={image1} alt="Gebäude" />
          <img src={image2} alt="Architektur" />
          <img src={image3} alt="Lounge" />
        </div>
        {/* Fließtext rechts */}
        <div className="text-section">
          <h3>Willkommen bei FINAERA</h3>
          <p>
            Ihrem verlässlichen Partner für innovative Finanzberatung. Unsere Struktur ist so gestaltet, dass sie
            nachhaltigen Erfolg und langfristige Unabhängigkeit gewährleistet.
          </p>
          <h3>Unsere Werte</h3>
          <p>
            FINAERA ist mehr als nur ein Finanzunternehmen. Wir glauben an Unabhängigkeit, Transparenz und langfristige
            Partnerschaften. Unsere Beraterinnen und Berater sind nicht nur Teil unseres Teams, sondern auch
            Gesellschafter, die die Entwicklung des Unternehmens aktiv mitgestalten.
          </p>
          <h3>Unsere Expertise</h3>
          <p>
            FINAERA steht für fundiertes Fachwissen und zukunftsweisende Beratung. Mit unseren Finanznews halten wir Sie
            stets über aktuelle Entwicklungen und Trends in der Finanzwelt auf dem Laufenden. Unser Team aus erfahrenen
            Finanzberaterinnen und -beratern begleitet Sie individuell und strategisch auf Ihrem Weg zu finanzieller
            Freiheit. Gemeinsam erarbeiten wir Lösungen, die perfekt auf Ihre Bedürfnisse und Ziele abgestimmt sind – weil
            Ihr Erfolg unser Maßstab ist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Unternehmen;

