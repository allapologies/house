"use strict";

var express = require('express');
var router = express.Router();
var helpers = require('../handlers/helpers');
var User = require('../db/mongoose');
console.log(typeof User);


router.post('/', function(req, res) {
  var user = new User({
    name      : req.body.name,
    username      : req.body.username,
    email      : req.body.email,
    password      : req.body.password
  });

  user.save(function (err) {
    if (!err) {
      console.log("user created");
      helpers.send_success(res, user.username);
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


router.get('/:username', function(req, res) {
  User.find({username: req.params.username}, function (err, users) {
    if (err) {
      helpers.send_failure(res, 500, err)
    } else if(!users) {
        helpers.send_failure(res,err,err);
    } else {
        helpers.send_success(res, users)
    }
  });
});

module.exports = router;
