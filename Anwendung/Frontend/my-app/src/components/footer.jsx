import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kontakt */}
        <div className="footer-column">
          <h3>Kontakt</h3>
          <p>
            FINAERA ServiceZentrale <br />
            Markt 11 <br />
            41061 Mönchengladbach
          </p>
          <p>
            0261 9355-0 <br />
            service@finaera.de
          </p>
        </div>

        {/* Alles zu FINAERA */}
        <div className="footer-column">
          <h3>Alles zu FINAERA</h3>
          <ul>
            <li>Warum FINAERA</li>
            <li>Nachhaltigkeit</li>
            <li>Geschäftsleitung</li>
            <li>Akademien etc</li>
          </ul>
        </div>

        {/* Mehr Finanzwissen */}
        <div className="footer-column">
          <h3>Mehr Finanzwissen für Sie</h3>
          <ul>
            <li>Altersvorsorge für junge Menschen</li>
            <li>Altersvorsorge für Best Ager</li>
            <li>Altersvorsorge kurz vor dem Ruhestand</li>
          </ul>
        </div>
      </div>

      {/* Impressum und Copyright */}
      <div className="footer-bottom">
        <Link to="/impressum">Impressum</Link> | Datenschutz
        <span> © 2024 FINAERA</span>
      </div>
    </footer>
  );
}

export default Footer;
