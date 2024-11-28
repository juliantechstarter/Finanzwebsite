import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/FINAERALOGO_blackBG.png";

function Navbar() {
  const [showFinanzberatung, setShowFinanzberatung] = useState(false);
  const [showUnternehmen, setShowUnternehmen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(!(currentScrollPos > 60 && prevScrollPos < currentScrollPos));
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      {/* Logo führt zur Startseite */}
      <Link to="/" className="logo-container">
        <img src={logo} alt="Finaera Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        {/* Finanzberatung Dropdown */}
        <li
          onMouseEnter={() => setShowFinanzberatung(true)}
          onMouseLeave={() => setShowFinanzberatung(false)}
        >
          <Link to="/home" className="gradient-text">
            Finanzberatung
          </Link>
          <span className="arrow">{showFinanzberatung ? "▾" : "▸"}</span>
          {showFinanzberatung && (
            <div className="dropdown">
              <a href="#vorsorge" className="gradient-text" onClick={(e) => {
  e.preventDefault();
  const section = document.getElementById("vorsorge");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}}>
  Vorsorge
</a>

<a href="#absicherung" className="gradient-text" onClick={(e) => {
  e.preventDefault();
  const section = document.getElementById("absicherung");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}}>
  Absicherung
</a>
              <a href="#vermoegen" className="gradient-text">Vermögen</a>
              <a href="#immobilie" className="gradient-text">Immobilie</a>
            </div>
          )}
        </li>

        <li>
          <Link to="/finanzplaner" className="gradient-text">
            Finanzplaner
          </Link>
        </li>

        <li>
          <Link to="/finanznews" className="gradient-text">
            Finanznews
          </Link>
        </li>

        <li
          onMouseEnter={() => setShowUnternehmen(true)}
          onMouseLeave={() => setShowUnternehmen(false)}
        >
          <span className="gradient-text">Unternehmen</span>
          <span className="arrow">{showUnternehmen ? "▾" : "▸"}</span>
          {showUnternehmen && (
            <div className="dropdown">
              <Link to="/unternehmen" className="gradient-text">
                Das Unternehmen
              </Link>
              <Link to="/geschäftsführung" className="gradient-text">
                Geschäftsführung
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
