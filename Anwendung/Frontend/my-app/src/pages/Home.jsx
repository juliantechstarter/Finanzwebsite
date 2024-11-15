import React from 'react';
import './Home.css';
import advisorImage from '../assets/FINAERA-finanzberatung-berater.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="text-block">
        <h1>Finanzberatung – so einzigartig wie Ihr Leben</h1>
        <p>
          Der Zukunft entspannt entgegengehen: Mit einer guten Finanzplanung können Sie Vermögen aufbauen,
          finanzielle Spielräume für das Alter schaffen und sich auf unerwartete Herausforderungen vorbereiten.
        </p>
      </div>
      <div className="image-block">
        <img src={advisorImage} alt="Finanzberater" />
      </div>
    </div>
  );
}

export default Home;
