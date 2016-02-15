define([
  'jquery', 'app/render', 'app/formhandler'
], function ($, render, Form) {
  $( document ).ready(function() {

    var head, body;

    $.get( "templates/head.jade", function( template ) {
      render( template, {title:"Head"}, "head" );
      head = template;
    });
    $.get( "templates/body.jade", function( template ) {
      render( template, {dadada:"test"}, "body" );
      body = template;
    });

    require(['app/restart'], function() {});
    require(['app/navigation'], function() {});

    // When the page has loaded
    $(window).on("loaded", function() {
      //Show app content
      $("body").fadeIn(200);
      //Forms init
      var form = new Form('form');
      form.init();
    });
  });
});