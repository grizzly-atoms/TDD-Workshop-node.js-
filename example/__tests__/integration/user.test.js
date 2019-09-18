'use strict';

const request = require('supertest');
const app = require('../../app');

describe('/users/:email', () => {
  it('returns user objects', async () => {
    const response = await request(app).get('/users/jack.torrance@overlook.com');
    expect(response.status).toBe(200);
    const { header } = response;
    expect(header['content-type']).toBe('application/vnd.api+json');
  });
});
