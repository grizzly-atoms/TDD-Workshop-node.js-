'use strict';

const request = require('supertest');
const app = require('../../app');

describe('/users/:email', () => {
  it('has a users page', async () => {
    const response = await request(app).get('/user/jack.torrance@overlook.com');
    expect(response.status).toBe(200);
  });
});
