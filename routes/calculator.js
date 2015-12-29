var express = require('express');
var router = express.Router();

var defaultSizes = {
  room:12,
  kitchen: 10,
  hall:5,
  bathroom:6,
  dining:20
};

function House(housedata){
  var roomtypes = ["bedroom", "wc", "bathroom", "kitchen", "dining", "boiler"];
  this.floors = housedata.floors;         // [{number:number1, height: height1}, {number:number2, height: height2}]
  this.walls = housedata.walls;           // [width, height]
  this.foundation = housedata.foundation; // string
  this.roof = housedata.roof;             // string
  this.rooms=housedata.rooms;             //[   {floor, type, area, windows: [{id, width, height}], {} ]
};

//var paramsCalculate = function(sizes, input){
//  var params = {
//    totalArea: sizes.room * input.rooms + sizes.kitchen + sizes.hall + sizes.bathroom + sizes.dining
//  };
//  return params;
//};

router.get('/', function(req, res, next) {
  res.render('calculator', { title: 'Калькулятор' });
});

router.post('/', function(req, res) {
  var houseParams = {
    floors : req.body.floors,
    walls : req.body.walls,
    foundation : req.body.foundation,
    roof : req.body.roof,
    rooms : req.body.rooms
  };
  console.log(houseParams);
  var parsed = JSON.parse(houseParams);
  console.log(parsed);
  res.json(houseParams);
  res.render('results', houseParams );
});

module.exports = router;