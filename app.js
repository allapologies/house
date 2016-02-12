var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var passport = require('passport');
var helpers = require('./handlers/helpers');
var expressSession = require('express-session');
var User = require('./db/mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession({secret: 'mySecretKey', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
var calculator = require('./routes/calculator');
var contact = require('./routes/contact');
var users = require('./routes/users');
var login = require('./routes/login');

app.use('/', index);
app.use('/calculator', calculator);
app.use('/contact', contact);
app.use('/users', users);
app.use('/login', login);

//app.get('/',function(req,res){
//  res.sendFile('index.html');
//  //It will find and locate index.html from View or Scripts
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    //res.status(err.status || 500);
    //res.render('error', {
    //  message: err.message,
    //  error: err
    //});
    helpers.send_failure(res,err.status || 500, err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;