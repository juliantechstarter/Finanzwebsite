const { createTransaction } = require('../../src/controllers/transactionController');
const Transaction = require('../../src/models/Transaction');

jest.mock('../../src/models/Transaction');

describe('createTransaction', () => {
  it('sollte eine Transaktion erstellen', async () => {
    const req = {
      body: { amount: 100, type: 'income', description: 'Test' },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Transaction.create.mockResolvedValue(req.body);

    await createTransaction(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
