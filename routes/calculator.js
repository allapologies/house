var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('calculator', { title: 'Калькулятор' });
});

router.post('/', function(req, res, next) {
  var house = {
    rooms : parseInt(req.body.rooms) || 3,
    floors : parseInt(req.body.floors) || 1,
    roof : req.body.roof || "flat",
    ceiling : parseInt(req.body.ceiling, 10) || 2.7 ,
    foundation : req.body.foundation || "lenta"
  };
  res.json(house);
});

module.exports = router;