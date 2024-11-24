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
            <li><Link to="/warum-finaera">Warum FINAERA</Link></li>
            <li><Link to="/nachhaltigkeit">Nachhaltigkeit</Link></li>
            <li><Link to="/geschaeftsleitung">Geschäftsleitung</Link></li>
            <li><Link to="/akademien">Akademien etc</Link></li>
          </ul>
        </div>

        {/* Mehr Finanzwissen */}
        <div className="footer-column">
          <h3>Mehr Finanzwissen für Sie</h3>
          <ul>
            <li><Link to="/altersvorsorge-junge">Altersvorsorge für junge Menschen</Link></li>
            <li><Link to="/altersvorsorge-bester-ager">Altersvorsorge für Best Ager</Link></li>
            <li><Link to="/altersvorsorge-ruhestand">Altersvorsorge kurz vor dem Ruhestand</Link></li>
          </ul>
        </div>
      </div>

      {/* Impressum und Copyright */}
      <div className="footer-bottom">
        <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutz</Link>
        <span> © 2024 FINAERA</span>
      </div>
    </footer>
  );
}

export default Footer;
