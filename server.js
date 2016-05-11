"use strict";

var path = require('path');
var express = require('express');
var api = require('./api');
var bodyParser = require('body-parser');
var port = 3001;
var host = 'localhost'

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/api', api)

app.listen(port, host, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://'+host+':' + port);
});
