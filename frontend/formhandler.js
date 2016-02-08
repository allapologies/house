define([
  'jquery'
], function ($) {
  $("form").submit(function(e) {
    e.preventDefault();
    var apiURL= $(this).attr("action"),
        formData = $(this).serialize();
    $.post( apiURL, formData, function(data, status) {
      if (!data.error){
        alert ("Ответ получен: " + data);
      } else {
        alert ("Ошибка: " + data.error);
      }
    }, "json");
  });
});
