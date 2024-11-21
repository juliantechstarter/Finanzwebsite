import React from 'react';
import './Home.css';
import advisorImage from '../assets/FINAERA-finanzberatung-berater.jpg';

function Home() {
  const handleButtonClick = (section) => {
    alert(`Du hast ${section} ausgewählt!`);
  };

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
      
      {/* Das Rad wird hier eingefügt */}
      <div className="rad-container">
        <svg
          className="rad-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          {/* Absicherung */}
          <path
            d="M100 100 L100 0 A100 100 0 0 1 200 100 Z"
            fill="#c89d01"
            onClick={() => handleButtonClick("Absicherung")}
          />
          <text x="150" y="50" className="rad-text">Absicherung</text>

          {/* Vermögen */}
          <path
            d="M100 100 L200 100 A100 100 0 0 1 100 200 Z"
            fill="#104f55"
            onClick={() => handleButtonClick("Vermögen")}
          />
          <text x="150" y="150" className="rad-text">Vermögen</text>

          {/* Immobilie */}
          <path
            d="M100 100 L100 200 A100 100 0 0 1 0 100 Z"
            fill="#631f29"
            onClick={() => handleButtonClick("Immobilie")}
          />
          <text x="50" y="150" className="rad-text">Immobilie</text>

          {/* Vorsorge */}
          <path
            d="M100 100 L0 100 A100 100 0 0 1 100 0 Z"
            fill="#30363f"
            onClick={() => handleButtonClick("Vorsorge")}
          />
          <text x="50" y="50" className="rad-text">Vorsorge</text>

          {/* Zentraler Kreis */}
          <circle cx="100" cy="100" r="30" fill="#fff" />
          <text x="90" y="105" className="rad-center">+</text>
        </svg>
      </div>
    </div>
  );
}

export default Home;
