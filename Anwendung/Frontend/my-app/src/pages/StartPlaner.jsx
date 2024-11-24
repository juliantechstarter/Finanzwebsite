import React, { useState } from 'react';
import Finanzanalyse from '../components/StartPlaner/Finanzanalyse';
import Transaktionen from '../components/StartPlaner/Transaktionen';
import Dauerauftraege from '../components/StartPlaner/Dauerauftraege';
import Umbuchungen from '../components/StartPlaner/Umbuchungen';
// Weitere Importe von Komponenten

import './StartPlaner.css';

function StartPlaner() {
  const [currentView, setCurrentView] = useState('finanzanalyse');

  return (
    <div className="startplaner-container">
      <nav className="sidebar">
        <ul>
          <li onClick={() => setCurrentView('finanzanalyse')}>Finanzanalyse</li>
          <li onClick={() => setCurrentView('transaktionen')}>Transaktionen</li>
          <li onClick={() => setCurrentView('dauerauftraege')}>Daueraufträge</li>
          <li onClick={() => setCurrentView('umbuchungen')}>Umbuchungen</li>
          {/* Weitere Navigationselemente */}
        </ul>
      </nav>
      <main className="main-content">
        {currentView === 'finanzanalyse' && <Finanzanalyse />}
        {currentView === 'transaktionen' && <Transaktionen />}
        {currentView === 'dauerauftraege' && <Dauerauftraege />}
        {currentView === 'umbuchungen' && <Umbuchungen />}
        {/* Weitere Komponenten-Render basierend auf `currentView` */}
      </main>
    </div>
  );
}

export default StartPlaner;
