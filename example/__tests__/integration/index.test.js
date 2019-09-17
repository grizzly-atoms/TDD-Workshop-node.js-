'use strict';

const request = require('supertest');
const app = require('../../app');

describe('/', () => {
  it('has an index page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toMatch(/.*Welcome to Express.*/);
  });
});
