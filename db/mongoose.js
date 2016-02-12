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
  username : {type:String, index: {unique: true, dropDups: true}},
  email    : String,
  password : String
});

UserSchema.methods.validPassword = function( pwd ) {
  return ( this.password === pwd );
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
