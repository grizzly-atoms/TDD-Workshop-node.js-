'use strict';

const request = require('supertest');
const app = require('../../app');

describe('/users', () => {
  it('has a users page', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.text).toBe('respond with a resource');
  });
});
