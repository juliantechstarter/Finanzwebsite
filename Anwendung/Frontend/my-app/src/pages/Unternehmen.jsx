import React from 'react';
import styles from './Unternehmen.module.css';
import mainImage from '../assets/recep.png'; // Hauptbild rechts
import image1 from '../assets/haus.png'; // Erstes Bild unten links
import image2 from '../assets/decke.png'; // Zweites Bild unten links
import image3 from '../assets/lounge.png'; // Drittes Bild unten links
import Spacer from '../components/Spacer'; // Importiere den Spacer
function Unternehmen() {
  return (
    <div className={styles.unternehmenPage}>
      {/* Oberer Abschnitt */}
      <div className={styles.topSection}>
        <div className={styles.headerText}>
          <h2 className={styles.signatureFont}>Gemeinsam Werte schaffen</h2>
          <h1 className={styles.titleFont}>DAS UNTERNEHMEN FINAERA</h1>
        </div>
        <div className={styles.headerImage}>
          <img src={mainImage} alt="Empfang" />
        </div>
      </div>

      {/* Mittlerer Abschnitt */}
      <div className={styles.middleSection}>
        <div className={styles.gallery}>
          <img src={image1} alt="Gebäude" />
          <img src={image2} alt="Architektur" />
          <img src={image3} alt="Lounge" />
        </div>
        <div className={styles.textSection}>
          <div>
            <h3>Willkommen bei FINAERA</h3>
            <p>
            Ihrem verlässlichen Partner für innovative Finanzberatung. 
             UnsereStruktur ist so gestaltet, dass sie nachhaltigen 
            Erfolg und langfristige Unabhängigkeit gewährleistet.
            </p>
          </div>
          <div>
            <h3>Unsere Werte</h3>
            <p>
              FINAERA ist mehr als nur ein Finanzunternehmen. Wir glauben an
              Unabhängigkeit, Transparenz und langfristige Partnerschaften. Unsere
              Beraterinnen und Berater sind nicht nur Teil unseres Teams, sondern auch
              Gesellschafter, die die Entwicklung des Unternehmens aktiv mitgestalten.
            </p>
          </div>
          <div>
            <h3>Unsere Expertise</h3>
            <p>
              FINAERA steht für fundiertes Fachwissen und zukunftsweisende Beratung. Mit
              unseren Finanznews halten wir Sie stets über aktuelle Entwicklungen und
              Trends in der Finanzwelt auf dem Laufenden. Unser Team aus erfahrenen
              Finanzberaterinnen und -beratern begleitet Sie individuell und strategisch
              auf Ihrem Weg zu finanzieller Freiheit.
            </p>
          </div>
        </div>
      </div>
       {/* Spacer */}
       <Spacer height="200px" />
    </div>
    
  );
}

export default Unternehmen;
