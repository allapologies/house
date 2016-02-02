var express = require('express');
var router = express.Router();
var fs = require('fs');
var helpers = require('../handlers/helpers.js');

router.get('/', function(req, res, next) {

  fs.readFile('public/templates/bootstrap.html', function(err, contents){
    if (err) {
      helpers.send_failure(res, 500, err);
      return;
    };

    contents = contents.toString();
    contents = contents.replace('{{PAGE_NAME}}', 'home');
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(contents);
  });
});

router.get('/home.json', function(req, res, next) {

  fs.readFile('public/templates/home.html', function(err, contents){
    if (err) {
      helpers.send_failure(res, 500, err);
      return;
    };
    contents = contents.toString();
    contents = {
      "slider":"<p>THIS IS SLIDER</p>",
      "content":"<p>THIS IS CONTENT</p>"
    };

    var response = {"error": "null", "data": contents};
    res.json(response);
  });


});

module.exports = router;