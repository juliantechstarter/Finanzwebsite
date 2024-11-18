import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/FINAERA_LOGO.png";

function Navbar() {
  const [showFinanzberatung, setShowFinanzberatung] = useState(false);
  const [showUnternehmen, setShowUnternehmen] = useState(false);

  return (
    <nav className="navbar">
      {/* Link zum Logo */}
      <Link to="/">
        <img src={logo} alt="Finaera Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li
          onMouseEnter={() => setShowFinanzberatung(true)}
          onMouseLeave={() => setShowFinanzberatung(false)}
        >
          Finanzberatung <span className="arrow">{showFinanzberatung ? "▾" : "▸"}</span>
          {showFinanzberatung && (
            <div className="dropdown">
              <a href="#vorsorge">Vorsorge</a>
              <a href="#absicherung">Absicherung</a>
              <a href="#vermögen">Vermögen</a>
              <a href="#immobilie">Immobilie</a>
            </div>
          )}
        </li>
        <li>
          <Link to="/finanzplaner">Finanzplaner</Link>
        </li>
        <li>
          <Link to="/finanznews">Finanznews</Link>
        </li>
        <li
          onMouseEnter={() => setShowUnternehmen(true)}
          onMouseLeave={() => setShowUnternehmen(false)}
        >
          Unternehmen <span className="arrow">{showUnternehmen ? "▾" : "▸"}</span>
          {showUnternehmen && (
            <div className="dropdown">
              <Link to="/unternehmen">Über das Unternehmen</Link>
              <Link to="/geschäftsführung">Geschäftsführung</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
