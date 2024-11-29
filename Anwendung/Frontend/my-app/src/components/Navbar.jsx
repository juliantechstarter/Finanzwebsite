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
    <nav className={`navbar-container ${isVisible ? "visible" : "hidden"}`}>
      <Link to="/" className="navbar-logo-container">
        <img src={logo} alt="Finaera Logo" className="navbar-logo" />
      </Link>
      <ul className="navbar-menu">
        <li
          className="navbar-menu-item"
          onMouseEnter={() => setShowFinanzberatung(true)}
          onMouseLeave={() => setShowFinanzberatung(false)}
        >
          <Link to="/home" className="navbar-gradient-text">
            Finanzberatung
          </Link>
          <span className="navbar-arrow">{showFinanzberatung ? "▾" : "▸"}</span>
          {showFinanzberatung && (
            <div className="navbar-dropdown">
              <a
                href="#vorsorge"
                className="navbar-dropdown-link"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("vorsorge");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Vorsorge
              </a>
              <a
                href="#absicherung"
                className="navbar-dropdown-link"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("absicherung");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Absicherung
              </a>
              <a href="#vermoegen" className="navbar-dropdown-link">
                Vermögen
              </a>
              <a href="#immobilie" className="navbar-dropdown-link">
                Immobilie
              </a>
            </div>
          )}
        </li>

        <li className="navbar-menu-item">
          <Link to="/finanzplaner" className="navbar-gradient-text">
            Finanzplaner
          </Link>
        </li>

        <li className="navbar-menu-item">
          <Link to="/finanznews" className="navbar-gradient-text">
            Finanznews
          </Link>
        </li>

        <li
          className="navbar-menu-item"
          onMouseEnter={() => setShowUnternehmen(true)}
          onMouseLeave={() => setShowUnternehmen(false)}
        >
          <span className="navbar-gradient-text">Unternehmen</span>
          <span className="navbar-arrow">{showUnternehmen ? "▾" : "▸"}</span>
          {showUnternehmen && (
            <div className="navbar-dropdown">
              <Link to="/unternehmen" className="navbar-dropdown-link">
                Das Unternehmen
              </Link>
              <Link to="/geschäftsführung" className="navbar-dropdown-link">
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
