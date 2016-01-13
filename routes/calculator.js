"use strict";

var express = require('express');
var router = express.Router();
var House = require('./../models/House');
var FoundationCalculation = require('./../models/FoundationCalculation');
var WallsCalculation = require('./../models/WallsCalculation');
var directory = require('./../models/directory');
/**
 * Parameters for house evaluation
 * @type {{foundationThickness: number, metallStep: number, metallLayers: number, roomtypes: string[]}}
 */
const parameters = {
  foundationThickness: 0.3,
  wallsThickness: 0.3,
  glueConsumption : 25,
  insulationThickness : 0.1,
  plasterySpecificWeight: 8.5,
  metallStep : 0.2,
  metallLayers : 2,
  roomtypes : ["bedroom", "wc", "bathroom", "kitchen", "dining", "boiler"]
};

/**
 * Calculation page controller
 */
router.get('/', function(req, res) {
  res.render('calculator', { title: 'Калькулятор' });
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
  let resultFoundation = foundation.countFoundation();
  let walls = new WallsCalculation(house);
  let resultWall = walls.countWalls();
  //let result = Object.assign(resultFoundation, resultWall);

  //res.json( {"error":null, "data":result} );
  res.render('results', {results:{foundation:resultFoundation, walls:resultWall}, directory:{directory}});
});

module.exports = router;