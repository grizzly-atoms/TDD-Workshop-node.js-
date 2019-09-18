'use strict';

const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: String,
  firstName: String
})

module.exports = userSchema;