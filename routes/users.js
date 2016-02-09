"use strict";

var express = require('express');
var router = express.Router();
var helpers = require('../handlers/helpers');
var User = require('../db/mongoose');
console.log(typeof User);


router.post('/', function(req, res) {
  var user = new User({
    name      : req.body.name,
    login      : req.body.login,
    email      : req.body.email,
    password      : req.body.password
  });

  user.save(function (err) {
    if (!err) {
      console.log("user created");
      helpers.send_success(res, user.login);
    } else {
      helpers.send_failure(res,res.statusCode,err.message);
    }
  });
});

router.get('/', function(req, res) {
  User.find(function (err, users) {
    if (err) {
      helpers.send_failure(res,res.statusCode,err.message);
    };
    helpers.send_success(res, users);
  })
});

module.exports = router;
