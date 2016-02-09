"use strict";

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/house');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!');
});

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name     : String,
  login    : String,
  email    : String,
  password : String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
