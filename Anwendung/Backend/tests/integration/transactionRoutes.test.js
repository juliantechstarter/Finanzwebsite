const request = require('supertest');
const app = require('../../src/app');

describe('GET /transactions', () => {
  it('sollte eine Liste aller Transaktionen zurückgeben', async () => {
    const response = await request(app).get('/transactions'); // Pfad zu '/transactions'
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
