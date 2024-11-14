import React from 'react';
import './FinanzberatungSection.css';

function FinanzberatungSection() {
  return (
    <div className="finanzberatung-section">
      <div id="vorsorge"><h2>Vorsorge</h2><p>Details zur Vorsorge...</p></div>
      <div id="absicherung"><h2>Absicherung</h2><p>Details zur Absicherung...</p></div>
      <div id="vermögen"><h2>Vermögen</h2><p>Details zum Vermögen...</p></div>
      <div id="immobilie"><h2>Immobilie</h2><p>Details zur Immobilie...</p></div>
    </div>
  );
}

export default FinanzberatungSection;
