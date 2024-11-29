import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
            Mein Konto
import defaultAvatar from '../assets/av1.jpg';
import logo from '../assets/FINAERALOGO.png';

            Mein Konto
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const showNotificationMessage = (message, type) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showNotificationMessage('Die Passwörter stimmen nicht überein', 'error');
      return;
    }
    if (passwordForm.newPassword.length < 8) {
      showNotificationMessage('Das Passwort muss mindestens 8 Zeichen lang sein', 'error');
      return;
    }
    showNotificationMessage('Passwort erfolgreich geändert', 'success');
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDeleteAccount = () => {
    showNotificationMessage('Konto wurde erfolgreich gelöscht', 'success');
    setShowDeleteConfirm(false);
    // Here you would typically handle the actual account deletion
    setTimeout(() => navigate('/'), 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/finanzplaner');
  };

  return (
    <div className="account-page">
      <div className="header">
        <img src={logo} alt="FINAERA Logo" className="logo" />
      </div>

      {showNotification && (
        <div className={'notification ' + notificationType}>
          {notificationMessage}
        </div>
      )}
      
      <div className="account-container">
        <section className="account-section profile-section">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={defaultAvatar} alt="Profilbild" />
              <button className="change-avatar-btn">Bild ändern</button>
            </div>
            <div className="profile-status">
              <span className="status-badge">Premium Mitglied</span>
              <span className="member-since">Mitglied seit: Januar 2024</span>
            </div>
          </div>
        </section>

        <section className="account-section">
          <h2>Persönliche Daten</h2>
          <div className="account-info">
            <div className="info-group">
              <label>Name:</label>
              <input type="text" placeholder="Max Mustermann" readOnly />
            </div>
            <div className="info-group">
              <label>E-Mail:</label>
              <input type="email" placeholder="max.mustermann@example.com" readOnly />
            </div>
            <div className="info-group">
              <label>Telefon:</label>
              <input type="tel" placeholder="+49 123 456789" readOnly />
            </div>
          </div>
          <button className="button-primary">
            <span>Daten bearbeiten</span>
            <span className="button-icon">✏️</span>
          </button>
        </section>

        <section className="account-section">
          <h2>Passwort ändern</h2>
          <form className="password-form" onSubmit={handlePasswordChange}>
            <div className="info-group">
              <label>Aktuelles Passwort:</label>
              <input 
                type="password"
                value={passwordForm.currentPassword}
                onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                required
              />
            </div>
            <div className="info-group">
              <label>Neues Passwort:</label>
              <input 
                type="password"
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                required
              />
            </div>
            <div className="info-group">
              <label>Passwort bestätigen:</label>
              <input 
                type="password"
                value={passwordForm.confirmPassword}
                onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="button-primary">
              <span>Passwort ändern</span>
              <span className="button-icon">🔒</span>
            </button>
          </form>
        </section>

        <section className="account-section">
          <h2>Einstellungen</h2>
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
            <div className="setting-item">
              <label>
                <input type="checkbox" />
                Newsletter abonnieren
              </label>
            </div>
          </div>
        </section>

        <section className="account-section">
          <h2>Letzte Aktivitäten</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-date">22. Nov 2024</span>
              <span className="activity-description">Passwort geändert</span>
            </div>
            <div className="activity-item">
              <span className="activity-date">20. Nov 2024</span>
              <span className="activity-description">Neue Einzahlung getätigt</span>
            </div>
            <div className="activity-item">
              <span className="activity-date">15. Nov 2024</span>
              <span className="activity-description">Profil aktualisiert</span>
            </div>
          </div>
        </section>

        <div className="account-actions">
          <button className="logout-button" onClick={handleLogout}>
            <span>Ausloggen</span>
            <span className="button-icon">🚪</span>
          </button>
          <button className="delete-account-button" onClick={handleDeleteAccount}>
            <span>Konto löschen</span>
            <span className="button-icon">🗑️</span>
          </button>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="delete-confirmation-modal">
          <div className="modal-content">
            <h3>Konto löschen</h3>
            <p>Sind Sie sicher, dass Sie Ihr Konto löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.</p>
            <div className="modal-actions">
              <button onClick={() => setShowDeleteConfirm(false)} className="button-primary">
                <span>Abbrechen</span>
                <span className="button-icon">✖️</span>
              </button>
              <button onClick={confirmDeleteAccount} className="delete-account-button">
                <span>Ja, Konto löschen</span>
                <span className="button-icon">🗑️</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeinAccount;
