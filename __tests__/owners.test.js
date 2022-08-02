const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should add a new owner', async () => {
    const resp = await request(app).post('/owners').send({ name: 'Franny' });
    expect(resp.status).toBe(200);

  });

  afterAll(() => {
    pool.end();
  });
});
