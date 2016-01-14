"use strict";

var express = require('express');
var router = express.Router();
var House = require('./../models/House');
var FoundationCalculation = require('./../models/FoundationCalculation');
var WallsCalculation = require('./../models/WallsCalculation');
var RoofCalculation = require('./../models/RoofCalculation');
var directory = require('./../models/directory');

/**
 * Calculation page controller
 */
router.get('/', function(req, res) {
  res.render('calculator', { title: 'myHouse - калькулятор строительства дома' });
});

/**
 * Calculation interface
 */
router.post('/calculate', function(req, res) {
  let houseData = {
    floors : req.body.floors,
    walls : {
      sideA: req.body.sideA,
      sideB: req.body.sideB
    },
    foundation : req.body.foundation,
    roof : req.body.roof,
    rooms : req.body.rooms
  };
  let house = new House(houseData);
  let foundation = new FoundationCalculation(house);
  let resultFoundation = foundation.count();
  let walls = new WallsCalculation(house);
  let resultWall = walls.count();
  let roof = new RoofCalculation(house);
  let resultRoof = roof.count();

  res.render('results', {
      title: 'myHouse - результат рассчёта',
      results:{ foundation:resultFoundation,
                walls:resultWall,
                roof:resultRoof
      },
      directory:{directory}
  });
});

module.exports = router;