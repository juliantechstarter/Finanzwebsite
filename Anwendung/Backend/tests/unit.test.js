// tests/unit.test.js
const request = require('supertest');
const app = require('../src/server');
const { sequelize, Account, Budget, Transaction, User } = require('../src/models');

beforeAll(async () => {
  // Synchronisiere die Datenbank vor den Tests
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  // Schließe die Verbindung zur Datenbank nach den Tests
  await sequelize.close();
});

afterEach(async () => {
  // Lösche alle Testdaten nach jedem Test
  await Account.destroy({ where: {} });
  await Budget.destroy({ where: {} });
  await Transaction.destroy({ where: {} });
  await User.destroy({ where: {} });
});

// ------------------------- AUTH ROUTES -------------------------
describe('POST /api/auth/register', () => {
  it('sollte einen neuen Benutzer registrieren', async () => {
    const newUser = {
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    };

    const res = await request(app).post('/api/auth/register').send(newUser);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.email).toBe(newUser.email);
  });
});

describe('POST /api/auth/login', () => {
  it('sollte einen Benutzer erfolgreich einloggen', async () => {
    const user = await User.create({
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    });

    const res = await request(app).post('/api/auth/login').send({
      email: 'testuser@example.com',
      password: 'password123',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});

// ------------------------- ACCOUNT ROUTES -------------------------
describe('GET /api/accounts', () => {
  it('sollte alle Konten des Benutzers abrufen', async () => {
    const res = await request(app).get('/api/accounts');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /api/accounts', () => {
  it('sollte ein neues Konto erstellen', async () => {
    const accountData = {
      name: 'Girokonto',
      balance: 5000,
    };

    const res = await request(app).post('/api/accounts').send(accountData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', accountData.name);
    expect(res.body).toHaveProperty('balance', accountData.balance);
  });
});

// ------------------------- BUDGET ROUTES -------------------------
describe('POST /api/budgets', () => {
  it('sollte ein neues Budget erstellen', async () => {
    const budgetData = {
      name: 'Lebensmittel',
      limit: 300,
    };

    const res = await request(app).post('/api/budgets').send(budgetData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', budgetData.name);
    expect(res.body).toHaveProperty('limit', budgetData.limit);
  });
});

// ------------------------- TRANSACTION ROUTES -------------------------
describe('GET /api/transactions', () => {
  it('sollte alle Transaktionen zurückgeben', async () => {
    const res = await request(app).get('/api/transactions');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /api/transactions', () => {
  it('sollte eine neue Transaktion erstellen', async () => {
    const transactionData = {
      amount: 150,
      description: 'Einkauf bei Aldi',
      date: '2024-11-01',
    };

    const res = await request(app).post('/api/transactions').send(transactionData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('amount', transactionData.amount);
    expect(res.body).toHaveProperty('description', transactionData.description);
  });
});

// ------------------------- PLAID ROUTES -------------------------
describe('GET /api/plaid/accounts', () => {
  it('sollte alle verknüpften Bankkonten abrufen', async () => {
    const res = await request(app).get('/api/plaid/accounts');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
