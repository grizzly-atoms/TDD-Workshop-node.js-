'use strict';

const request = require('supertest');
const app = require('../../app');
const factory = require('../../factory');
const db = require('../../lib/db');

afterEach(async () => {
  await db.connection.dropCollection('users');
})

describe('/users/:email', () => {
  it('returns user objects', async () => {
    const jack = await factory.create('user', {
      email: 'jack.torrance@overlook.com',
      firstName: 'Jack',
    });

    const wendy = await factory.create('user', {
      email: 'wendy.torrance@overlook.com',
      firstName: 'Wendy',
    });

    let response = await request(app).get('/users/jack.torrance@overlook.com');
    expect(response.status).toBe(200);
    const { header } = response;
    expect(header['content-type']).toBe('application/vnd.api+json; charset=utf-8');

    expect(JSON.parse(response.text)).toEqual({
      id: jack.email,
      type: 'user',
      data: {
        attributes: {
          firstName: jack.firstName,
        }
      },
    });

    response = await request(app).get('/users/wendy.torrance@overlook.com');
    expect(JSON.parse(response.text)).toEqual({
      id: wendy.email,
      type: 'user',
      data: {
        attributes: {
          firstName: wendy.firstName,
        }
      },
    });
  });
});
