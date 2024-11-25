import React from 'react';
import './Transaktionen.css';

function Transaktionen() {
  return (
    <div className="transaktionen-container">
      <h2>Transaktionen</h2>
      <p>Liste deiner Transaktionen:</p>
      <ul>
        <li>Amazon - 50€</li>
        <li>Supermarkt - 25€</li>
        <li>Tankstelle - 60€</li>
      </ul>
    </div>
  );
}

export default Transaktionen;
