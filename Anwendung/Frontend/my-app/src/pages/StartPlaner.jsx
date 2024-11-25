import React, { useState } from 'react';
import Finanzanalyse from '../components/StartPlaner/Finanzanalyse';
import Transaktionen from '../components/StartPlaner/Transaktionen';
import Dauerauftraege from '../components/StartPlaner/Dauerauftraege';
import Umbuchungen from '../components/StartPlaner/Umbuchungen';
// Weitere Importe von Komponenten

import './StartPlaner.css';

function StartPlaner() {
  const [currentView, setCurrentView] = useState('finanzanalyse');

  // Navigationselemente für die Sidebar
  const navItems = [
    { id: 'finanzanalyse', label: 'Finanzanalyse' },
    { id: 'transaktionen', label: 'Transaktionen' },
    { id: 'dauerauftraege', label: 'Daueraufträge' },
    { id: 'umbuchungen', label: 'Umbuchungen' },
    // Weitere Navigationselemente hier hinzufügen
  ];

  return (
    <div className="startplaner-container">
      <nav className="sidebar">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={currentView === item.id ? 'active' : ''}
              onClick={() => setCurrentView(item.id)}
            >
              {item.label}
            </li>
          ))}
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
