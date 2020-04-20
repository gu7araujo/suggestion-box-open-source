const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('suggetion', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new Suggestion', async () => {
    await request(app)
      .post('/suggestions')
      .expect(200)
      .send({
        name: "Gustavo",
        suggestion: "kakakakakakakakakakakakakakakakakaka",
        phone: "3788888888",
        date: "20/04/2020"
      });
  });

});