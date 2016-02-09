"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/house');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  author    : ObjectId,
  name      : String,
  age      : Number
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!');
});
var User = mongoose.model('Users', UserSchema);

router.post('/', function(req, res) {
  //req.checkBody(validationRules);

  //var err = req.validationErrors();
  //if (err) {
  //  helpers.send_validation_failure(res,err);
  //  return;
  //} else {

  var results;
  //var user = new User({ "name": req.body.name, "age": req.body.age});
  //user.save(function (err, user) {
  //  if (err) return console.error(err);
    results = {"Number1":"7","Number2":"7"};
  //});
  console.log("post come!");
  helpers.send_success(res, results);
  //};
});

module.exports = router;
