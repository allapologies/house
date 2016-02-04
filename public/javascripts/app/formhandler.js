define([
  'jquery'
], function ($) {


  $("form").submit(function(e){
    var apiURL= $(this).attr("action");
    console.log('clicked');
    e.preventDefault();
    var formData = $(this).serialize();

    $.post( apiURL, formData, function( data ) {
      if (!data.error){
        $('.content').html("Ваш запрос успешно отправлен");
      } else {
        alert (data.error);
      }

    }, "json");

  });
});
