define([
  'jquery'
], function ($) {


  $("form").submit(function(e){
    console.log('clicked');
    e.preventDefault();
    var formData = $(this).serialize();

    $.post( "contact/send", formData, function( data ) {
      if (!data.error){
        $('.content').html("Ваш запрос успешно отправлен");
      } else {
        alert (data.error);
      }

    }, "json");

  });
});
