"use strict";

var express = require('express');
var router = express.Router();
var House = require('./../models/House');
var FoundationCalculation = require('./../models/FoundationCalculation');
var WallsCalculation = require('./../models/WallsCalculation');
var RoofCalculation = require('./../models/RoofCalculation');
//var directory = require('./../models/directory');
var helpers = require('../handlers/helpers');
var validationRules = require('../handlers/calculatorValidationRules');

/**
 * Calculation page controller
// *
//router.get('/', function(req, res) {
//  res.render('layout', { title: 'Калькулятор строительства дома' });
//});

/**
 * Calculation interface
 */
router.post('/calculate', function(req, res) {
  req.checkBody(validationRules);
  var err = req.validationErrors();
  if (err) {
    helpers.send_validation_failure(res,err);
    return;
  } else {
    let houseData = {
      floors    : req.body.floors,
      walls     : {
        sideA: req.body.sideA,
        sideB: req.body.sideB
      },
      foundation: req.body.foundation,
      roof      : req.body.roof,
      rooms     : req.body.rooms
    };
    let house = new House(houseData);
    let foundation = new FoundationCalculation(house);
    let resultFoundation = foundation.count();
    let walls = new WallsCalculation(house);
    let resultWall = walls.count();
    let roof = new RoofCalculation(house);
    let resultRoof = roof.count();
    var results =[
      {stage:'foundation', materials: resultFoundation},
      {stage:'walls', materials: resultWall},
      {stage:'roof', materials: resultRoof}
    ];
    helpers.send_success(res, results);
  };
});

module.exports = router;