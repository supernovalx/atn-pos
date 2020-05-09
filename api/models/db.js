var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://admin:020300@atn-rt7kb.mongodb.net/atn?retryWrites=true&w=majority';
mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// BRING IN YOUR SCHEMAS & MODELS
require('./users');
require('./products');
require('./transactions');