define([
  'jquery'
], function ($) {


  $("form").submit(function(e){
    console.log('clicked');
    e.preventDefault();
    var formData = $(this).serialize();

    $.post( "contact/send", formData, function( data ) {
      alert( data );
    }, "json");

  });
});
