exports.version = '0.0.2';

exports.make_error = function(err, msg) {
  var e = new Error(msg);
  e.code = err;
  return e;
};


exports.send_success = function(res, data) {
  var output = { error: null, data: data };
  res.json(output);
};


exports.send_failure = function(res, code, err) {
  var code = (err.code) ? err.code : err.name;
  var output = { error: code, message: err.message };
  res.json(output);
};


exports.invalid_resource = function() {
  return exports.make_error("invalid_resource",
    "the requested resource does not exist.");
};

exports.send_validation_failure = function(res, err) {
  var output = { error: 400, message: err };
  res.json(output);
};