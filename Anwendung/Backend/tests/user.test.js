const request = require('supertest');
const app = require('../src/app'); // Stelle sicher, dass dein Express-App exportiert wird
const User = require('../src/models/User');
const sequelize = require('../src/config/database'); // Deine DB-Konfiguration

// Vor jedem Test die Datenbank zurücksetzen (optional)
beforeAll(async () => {
  await sequelize.sync({ force: true }); // Löscht alle Tabellen und erstellt sie neu
});

afterAll(async () => {
  await sequelize.close(); // Verbindet die Datenbank nach den Tests
});

// Test: Benutzerregistrierung
describe('POST /register', () => {
  it('sollte einen neuen Benutzer erstellen und 201 zurückgeben', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'test@example.com',
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User created successfully');
    expect(response.body.user).toHaveProperty('username', 'testuser');
  });

  it('sollte Fehler zurückgeben, wenn der Benutzername bereits existiert', async () => {
    // Zuerst den Benutzer erstellen
    await request(app)
      .post('/register')
      .send({
        username: 'existinguser',
        password: 'testpassword',
        email: 'test@example.com',
      });

    // Dann mit dem gleichen Benutzernamen ein zweites Mal registrieren
    const response = await request(app)
      .post('/register')
      .send({
        username: 'existinguser',
        password: 'anotherpassword',
        email: 'new@example.com',
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Username already exists');
  });
});

// Test: Benutzer-Login
describe('POST /login', () => {
  it('sollte den Benutzer einloggen und ein JWT zurückgeben', async () => {
    // Vorab einen Benutzer erstellen
    await request(app)
      .post('/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'test@example.com',
      });

    const response = await request(app)
      .post('/login')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('token');
  });

  it('sollte Fehler zurückgeben bei falschen Anmeldedaten', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        username: 'wronguser',
        password: 'wrongpassword',
      });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Invalid credentials');
  });
});
