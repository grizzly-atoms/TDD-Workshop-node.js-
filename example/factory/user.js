'use strict';

const factory = require('factory-girl').factory;
const User = require('../db/models/user');
 
factory.define('user', User, {
  email: factory.chance('email'),
  firstName: factory.chance('first'),
});