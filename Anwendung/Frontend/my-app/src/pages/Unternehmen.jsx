import React from 'react';
import './Unternehmen.css';
import chef1 from '../assets/chef1.png';
import chef2 from '../assets/chef2.png';

function Unternehmen() {
  return (
    <div className="unternehmen-container">
      <div className="content-container">
        <h1>Unternehmergemeinschaft:</h1>
        <h2>FINAERA gehört mehrheitlich den eigenen Beraterinnen und Beratern</h2>
        <p>
          Beraterinnen und Berater haben die Möglichkeit, sich als Gesellschafter am Unternehmen zu beteiligen. 
          Das ist unser Anliegen, denn nur so bleibt FINAERA dauerhaft frei von Produktvorgaben. 
          Bis zu 14 Gesellschafter bilden die Unternehmergemeinschaft, die stellvertretend alle grundsätzlichen 
          Unternehmensentscheidungen mittreffen und mittragen.
        </p>
        <p>
          Besonders entscheidend: Die Gesellschafteranteile werden jeweils zum Nennwert gekauft und auch nach vielen 
          Jahren der Zugehörigkeit zum gleichen Wert wieder verkauft. Damit bleibt der in der Zwischenzeit 
          erwirtschaftete Mehrwert im Unternehmen und bildet die Basis für das erfolgreiche Wirtschaften der nächsten Generation.
        </p>
      </div>
      <div className="photos-container">
        <div className="photo-item">
          <img src={chef1} alt="Julian Sänger" className="photo" />
          <p>Julian Sänger</p>
        </div>
        <div className="photo-item">
          <img src={chef2} alt="Marcel Ebel" className="photo" />
          <p>Marcel Ebel</p>
        </div>
      </div>
    </div>
  );
}

export default Unternehmen;
