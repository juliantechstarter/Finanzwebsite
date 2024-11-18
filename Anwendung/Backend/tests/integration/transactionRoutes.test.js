const request = require('supertest');
const app = require('../../src/app');
const { sequelize, connectDB } = require('../../src/config/db');

beforeAll(async () => {
  await connectDB(); // Verbindung herstellen
});

describe('Transaction Routes Integration Tests', () => {
  it('sollte eine neue Transaktion erstellen', async () => {
    const response = await request(app)
      .post('/transactions')
      .send({
        amount: 100,
        description: 'Testtransaktion',
        date: '2024-11-15',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('sollte alle Transaktionen abrufen', async () => {
    const response = await request(app).get('/transactions');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

afterAll(async () => {
  await sequelize.close(); // Verbindung schließen
});
