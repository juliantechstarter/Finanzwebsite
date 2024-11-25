import React from 'react';
import './Umbuchungen.css';

function Umbuchungen() {
  return (
    <div className="umbuchungen-container">
      <h2>Umbuchungen</h2>
      <p>Übertrage Geld zwischen deinen Konten:</p>
      <form>
        <div>
          <label>Von Konto:</label>
          <input type="text" placeholder="Konto eingeben" />
        </div>
        <div>
          <label>Zu Konto:</label>
          <input type="text" placeholder="Konto eingeben" />
        </div>
        <div>
          <label>Betrag:</label>
          <input type="number" placeholder="Betrag" />
        </div>
        <button type="submit">Umbuchen</button>
      </form>
    </div>
  );
}

export default Umbuchungen;
