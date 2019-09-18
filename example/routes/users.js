'use strict';

const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const User = require('../db/models/user');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});


router.get('/:email', async (req, res, next) => {
  const { params: { email } } = req;
  const { firstName } = await User.findOne({ email }).exec();

  res.type('application/vnd.api+json').send({
    id: email,
    type: 'user',
    data: {
      attributes: {
        firstName,
      }
    },
  });
});

module.exports = router;
