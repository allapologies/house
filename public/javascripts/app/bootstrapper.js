define([
  'jquery', 'app/render'
], function ($, render) {
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
    require(['app/formhandler'], function() {});
  });

});

