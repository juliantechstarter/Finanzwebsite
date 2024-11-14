import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/FINAERA_LOGO.png';

function Navbar() {
  const [showFinanzberatung, setShowFinanzberatung] = useState(false);
  const [showÜberFinaera, setShowÜberFinaera] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Finaera Logo" className="logo" />
      <ul>
        <li><Link to="/finanzplaner">Finanzplaner</Link></li>
        <li onMouseEnter={() => setShowFinanzberatung(true)} onMouseLeave={() => setShowFinanzberatung(false)}>
          Finanzberatung <span className="arrow">{showFinanzberatung ? '▾' : '▸'}</span>
          {showFinanzberatung && (
            <div className="dropdown">
              <a href="#vorsorge">Vorsorge</a>
              <a href="#absicherung">Absicherung</a>
              <a href="#vermögen">Vermögen</a>
              <a href="#immobilie">Immobilie</a>
            </div>
          )}
        </li>
        <li><Link to="/finanznews">Finanznews</Link></li>
        <li onMouseEnter={() => setShowÜberFinaera(true)} onMouseLeave={() => setShowÜberFinaera(false)}>
          über Finaera <span className="arrow">{showÜberFinaera ? '▾' : '▸'}</span>
          {showÜberFinaera && (
            <div className="dropdown">
              <Link to="/unternehmen">Unternehmen</Link>
              <Link to="/geschäftsführung">Geschäftsführung</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
