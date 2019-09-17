'use strict';

const request = require('supertest');
const app = require('../../app');

describe('/fubar', () => {
  it('returns 404 errors when an invalid page is requested', async () => {
    const response = await request(app).get('/fubar');
    expect(response.status).toBe(404);
  });
});
