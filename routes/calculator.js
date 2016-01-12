"use strict";

var express = require('express');
var router = express.Router();

/**
 * Parameters for house evaluation
 * @type {{foundationThickness: number, metallStep: number, metallLayers: number, roomtypes: string[]}}
 */
const parameters = {
  foundationThickness: 0.3,
  metallStep : 0.2,
  metallLayers : 2,
  roomtypes : ["bedroom", "wc", "bathroom", "kitchen", "dining", "boiler"]
};

/**
 * House entity
 */
class House{
  constructor(data){
    this.floors = data.floors;         // {1:{height:3}, 2: {height:1.2}}
    this.walls = data.walls;           // {width:7, length:8}
    this.foundation = data.foundation; // string
    this.roof = data.roof;             // string
    this.rooms=data.rooms;             // {   {floor, type, area, windows: {{id, width, height}} {}   }
  }
}

/**
 * Calculation model
 */
class Calculation{
  constructor(house){
    this.house = house;
  };
  countAreas(){
    let perimeter   = (this.house.walls.sideA*this.house.walls.sideB)*2,
        foundation  = this.house.walls.sideA*this.house.walls.sideB,
        walls       = perimeter * 4;

    return {"perimeter":perimeter,
            "foundation": foundation,
            "walls": walls
    };
  };
}

class FoundationCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Foundation";
  };
  countFoundation(){
    let areas = super.countAreas();

    return {
      stage: this.stage,
      beton : areas.foundation * parameters.foundationThickness,
      metall : this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers
    };
  };
}

/**
 * Calculation page controller
 */
router.get('/', function(req, res) {
  res.render('calculator', { title: 'Калькулятор' });
});

/**
 * Calculation interface
 */
router.post('/calculate.json', function(req, res) {
  console.log(req.headers);
  let houseData = {
    floors : req.body.floors,
    walls : req.body.walls,
    foundation : req.body.foundation,
    roof : req.body.roof,
    rooms : req.body.rooms
  };
  let house = new House(houseData);
  let foundation = new FoundationCalculation(house);
  let result = foundation.countFoundation();

  res.json( {"error":null, "data":result} );
});

module.exports = router;