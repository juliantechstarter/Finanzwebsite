import React from 'react';
import './Geschaeftsfuehrung.css';
import merlin from '../assets/merlin.png';
import julian from '../assets/julian.png';
import marcel from '../assets/marcel.png';

function Geschaeftsfuehrung() {
  return (
    <div className="geschaeftsfuehrung-container">
      {/* Blauer Rahmen hinter dem Text */}
      <div className="text-container">
        <h1>Gemeinsam vorangehen: Die Geschäftsleitung von Finaera</h1>
        <p>
          Gemeinsam mit dem Team der Mönchengladbacher ServiceZentrale schafft unsere Geschäftsleitung<br></br> 
          optimale Rahmenbedingungen für unsere selbstständigen Beraterinnen und Berater. Sie <br></br>
          sorgen für passende Softwarelösungen, fundierte Aus- und Weiterbildung und stellen die <br></br>
          kompetente Unterstützung bei Fach- und Produktfragen sicher. Alles für eine optimale <br></br>
          Beratung im Sinne unserer Kundinnen und Kunden – ohne Vertriebsdruck oder Umsatzvorgaben.
        </p>
      </div>

      {/* Fotos mit langsamerem Fade-In Effekt */}
      <div className="photos-container">
        <div className="photo-item">
          <img src={merlin} alt="Dr. Merlin Hellbach" className="photo" />
          <p>Dr. Merlin Hellbach</p>
        </div>
        <div className="photo-item">
          <img src={julian} alt="Julian Sänger" className="photo" />
          <p>Julian Sänger</p>
        </div>
        <div className="photo-item">
          <img src={marcel} alt="Marcel Ebel" className="photo" />
          <p>Marcel Ebel</p>
        </div>
      </div>
    </div>
  );
}

export default Geschaeftsfuehrung;
