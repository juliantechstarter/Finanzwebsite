const { createTransaction } = require('../../src/controllers/transactionController');
const Transaction = require('../../src/models/Transaction');

// Mocke das Transaction Modell
jest.mock('../../src/models/Transaction');

describe('createTransaction', () => {
  it('sollte eine Transaktion erstellen', async () => {
    const req = {
      body: { amount: 100, type: 'income', description: 'Test' },
    };
    
    const res = {
      status: jest.fn().mockReturnThis(),  // Mock die `status` Methode
      json: jest.fn(),                     // Mock die `json` Methode
    };

    // Mocke die `Transaction.create` Methode
    Transaction.create.mockResolvedValue(req.body);

    // Rufe die `createTransaction` Methode auf
    await createTransaction(req, res);

    // Überprüfe, ob `status` mit 201 aufgerufen wurde
    expect(res.status).toHaveBeenCalledWith(201);
    
    // Überprüfe, ob `json` mit dem korrekten Datenobjekt aufgerufen wurde
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
