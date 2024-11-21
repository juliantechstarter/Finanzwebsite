import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/FINAERALOGO.png";

function Navbar() {
  const [showFinanzberatung, setShowFinanzberatung] = useState(false);
  const [showUnternehmen, setShowUnternehmen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Verstecke die Navbar nur, wenn sie außerhalb des sichtbaren Bereichs gescrollt wird
      if (currentScrollPos > 60 && prevScrollPos < currentScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <Link to="/">
        <img src={logo} alt="Finaera Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li
          onMouseEnter={() => setShowFinanzberatung(true)}
          onMouseLeave={() => setShowFinanzberatung(false)}
        >
          <span className="gradient-text">Finanzberatung</span>
          <span className="arrow">{showFinanzberatung ? "▾" : "▸"}</span>
          {showFinanzberatung && (
            <div className="dropdown">
              <Link to="#vorsorge" className="gradient-text">
                Vorsorge
              </Link>
              <Link to="#absicherung" className="gradient-text">
                Absicherung
              </Link>
              <Link to="#vermögen" className="gradient-text">
                Vermögen
              </Link>
              <Link to="#immobilie" className="gradient-text">
                Immobilie
              </Link>
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
                Über das Unternehmen
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
