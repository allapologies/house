define([
  'jquery'
], function ($) {

  function Form(id) {
    "use strict";
    this.id = id;
  };

  Form.prototype.init = function () {
    "use strict";
    var self = this;
    $(this.id).submit(function (e) {
      e.preventDefault();
      var url = $(this).attr("action"),
        formData = $(this).serialize();
        var cb = function(data) {$(window).trigger("form_submitted", {form:self.id, data:data})};
      self.submit(url,formData, cb);
    });
  };
  Form.prototype.submit = function (url, formData, cb) {
    "use strict";
    var self = this;
    $.post(url, formData, function (data, status) {
      if (!data.error) {
        return cb( data );
      } else {
        alert("Ошибка: " + data.error);
      }
    }, "json");
  };

  return Form;
});
