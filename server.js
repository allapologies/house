"use strict";

var path = require('path');
var express = require('express');
var api = require('./api');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3001;
var host = process.env.IP || '0.0.0.0';

var app = express();
app.use(bodyParser.json());
app.use('/api', api);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.listen(port, host, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://'+host+':' + port);
});
