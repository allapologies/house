var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('calculator', { title: 'Калькулятор' });
});

module.exports = router;