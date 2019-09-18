'use strict';

const mongoose = require('mongoose');

// Configure mongoose to use global promsise provider
mongoose.Promise = global.Promise;

// Hold connection and manage queries
mongoose.connect('mongodb://localhost/tddWorkshop');

module.exports = mongoose;