import React from 'react';
import './Geschaeftsfuehrung.css';
import merlin from '../assets/merlin.png';
import julian from '../assets/julian.png';
import marcel from '../assets/marcel.png';

function Geschaeftsfuehrung() {
  return (
    <div className="geschaeftsfuehrung-container">
      {/* Freier Bereich unter der Navbar */}
      <div className="spacer"></div>

      {/* Überschrift */}
      <h2 className="signature-font">Gemeinsam vorangehen</h2>
      <h1 className="title-font">DIE GESCHÄFTSFÜHRUNG VON FINAERA</h1>

      {/* Fotos der Geschäftsführung */}
      <div className="photos-container">
        <div className="photo-item">
          <img src={merlin} alt="Merlin Hellbach" className="photo" />
          <h3>MERLIN HELLBACH</h3>
          <p>
            Spezialist für robuste Backend-Lösungen und 
            datengesteuerte Systeme. Merlin sorgt für eine reibungslose Funktionalität hinter den Kulissen.
          </p>
        </div>
        <div className="photo-item">
          <img src={julian} alt="Julian Sänger" className="photo" />
          <h3>JULIAN SÄNGER</h3>
          <p>
            Kreativer Frontend-Entwickler mit einem Auge für Benutzerfreundlichkeit und modernes Design. Julian bringt Ideen optisch zum Leben.
          </p>
        </div>
        <div className="photo-item">
          <img src={marcel} alt="Marcel Ebel" className="photo" />
          <h3>MARCEL EBEL</h3>
          <p>
            Versiert in Textgestaltung und Präsentation. Marcel kombiniert Kommunikationsgeschick mit ersten Erfahrungen im Frontend-Development.
          </p>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
}

export default Geschaeftsfuehrung;
