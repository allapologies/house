define([
  'jquery','jade','jade_runtime'
], function ($, jade, jade_runtime) {
  $( document ).ready(function() {
    var template;
    $.get( "templates/head.jade", function( data ) {
      var head = jade.render( data );
      $('head').html(head);
    });
    $.get( "templates/body.jade", function( data ) {
      var body = jade.render( data );
      $('body').html(body).addClass('collapsing_header').attr('data-current','home');
    });
  });
  require(['app/restart'], function() {});
  require(['app/navigation'], function() {});
  require(['app/formHandler'], function() {});
});
