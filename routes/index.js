var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('layout', { title: 'Расчёт строительства дома Online' });
  res.sendFile(path.join(__dirname+'/index.html'));
});

module.exports = router;