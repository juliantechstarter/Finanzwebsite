import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPlaner.css';
import logo from '../assets/FINAERALOGO.png';

// Icons for navigation
const Icons = {
  overview: '📊',
  transactions: '💳',
  budget: '💰',
  accounts: '🏦',
  meinaccount: '👤'
};

const StartPlaner = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSectionClick = (section) => {
    if (section === 'meinaccount') {
      navigate('/mein-account');
    } else {
      setActiveSection(section);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/finanzplaner');
  };

  return (
    <div className="startplaner-container">
      <div className="header">
        <img src={logo} alt="FINAERA Logo" className="logo" />
      </div>
      
      <nav className="sidebar">
        <ul>
          {Object.entries(Icons).map(([section, icon]) => (
            <li
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => handleSectionClick(section)}
            >
              <span className="nav-icon">{icon}</span>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        {activeSection === 'overview' && (
          <section>
            <h2>ÜBERSICHT</h2>
            <div className="cards-container">
              <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
                <h3>Monatliche Zusammenfassung</h3>
                <p>Hier sehen Sie die Einnahmen und Ausgaben des aktuellen Monats.</p>
                <div className="card-stats">
                  <div className="stat">
                    <span className="stat-label">Einnahmen</span>
                    <span className="stat-value">€3,500</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Ausgaben</span>
                    <span className="stat-value">€2,800</span>
                  </div>
                </div>
                {isExpanded && (
                  <div className="expanded-details">
                    <h4>Detaillierte Übersicht</h4>
                    <div className="details-section">
                      <div className="details-column">
                        <h5>Einnahmen</h5>
                        <ul>
                          <li>
                            <span>Gehalt</span>
                            <span>€3,000</span>
                          </li>
                          <li>
                            <span>Nebeneinkünfte</span>
                            <span>€500</span>
                          </li>
                        </ul>
                      </div>
                      <div className="details-column">
                        <h5>Ausgaben</h5>
                        <ul>
                          <li>
                            <span>Miete</span>
                            <span>€1,200</span>
                          </li>
                          <li>
                            <span>Lebensmittel</span>
                            <span>€400</span>
                          </li>
                          <li>
                            <span>Transport</span>
                            <span>€200</span>
                          </li>
                          <li>
                            <span>Versicherungen</span>
                            <span>€300</span>
                          </li>
                          <li>
                            <span>Sonstiges</span>
                            <span>€700</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="balance-summary">
                      <span>Bilanz</span>
                      <span className="balance-amount">+€700</span>
                    </div>
                  </div>
                )}
              </div>
              
                <div className="card">
                  <h3>Finanzanalyse</h3>
                  <p>Detaillierte Analyse Ihrer finanziellen Situation.</p>
                  <div className="card-actions">
                    <button className="button-primary" onClick={() => navigate('/analytics')}>
                      <span>Zur Analyse</span>
                      <span className="button-icon">📈</span>
                    </button>
                  </div>
                </div>
              
              <div className="card">
                <h3>Investitionen</h3>
                <p>Übersicht und Verwaltung Ihrer Investitionen.</p>
                <div className="card-actions">
                  <button className="button-primary">
                    <span>Investitionen verwalten</span>
                    <span className="button-icon">📊</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'transactions' && (
          <section>
            <h2>Transaktionen</h2>
            <div className="card">
              <h3>Neue Transaktion</h3>
              <p>Fügen Sie eine neue Transaktion hinzu und verwalten Sie Ihre Finanzen.</p>
              <button className="button-primary add-button">
                <span className="plus-icon">+</span>
                <span>Transaktion hinzufügen</span>
              </button>
            </div>
          </section>
        )}

        {activeSection === 'budget' && (
          <section>
            <h2>Budget</h2>
            <div className="card">
              <h3>Budgetübersicht</h3>
              <p>Erstellen Sie ein Budget für Ihre Ausgaben und verfolgen Sie Ihre Fortschritte.</p>
              <div className="budget-progress">
                <div className="progress-item">
                  <span className="progress-label">Monatliches Budget</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                  <span className="progress-value">75% verwendet</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'accounts' && (
          <section>
            <h2>Bankkonten</h2>
            <div className="card">
              <h3>Verknüpfte Bankkonten</h3>
              <p>Hier können Sie Ihre Bankkonten verwalten und neue hinzufügen.</p>
              <div className="card-actions">
                <button className="button-primary">
                  <span>Bankkonto verknüpfen</span>
                  <span className="button-icon">🔗</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'Mein Account' && (
          <section className="account-container">
            <h2>Mein Account</h2>
            <div className="account-section">
              <h3>Persönliche Daten</h3>
              <div className="account-info">
                <div className="info-group">
                  <label>Name:</label>
                  <input type="text" placeholder="Max Mustermann" readOnly />
                </div>
                <div className="info-group">
                  <label>E-Mail:</label>
                  <input type="email" placeholder="max.mustermann@example.com" readOnly />
                </div>
              </div>
            </div>

            <div className="account-section">
              <h3>Passwort ändern</h3>
              <form className="password-form">
                <div className="form-group">
                  <label>Aktuelles Passwort:</label>
                  <input type="password" />
                </div>
                <div className="form-group">
                  <label>Neues Passwort:</label>
                  <input type="password" />
                </div>
                <div className="form-group">
                  <label>Passwort bestätigen:</label>
                  <input type="password" />
                </div>
                <button type="submit" className="button-primary">
                  <span>Passwort ändern</span>
                  <span className="button-icon">🔒</span>
                </button>
              </form>
            </div>

            <div className="account-section">
              <h3>Einstellungen</h3>
              <div className="settings">
                <div className="setting-item">
                  <label>
                    <input type="checkbox" defaultChecked />
                    E-Mail-Benachrichtigungen aktivieren
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Zwei-Faktor-Authentifizierung
                  </label>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <button 
        className="logout-button-bottom"
        onClick={handleLogout}
      >
        <span>Logout</span>
        <span className="button-icon">🚪</span>
      </button>
    </div>
  );
};

export default StartPlaner;
