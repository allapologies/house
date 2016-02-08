'use strict';

define([
  'jquery','jade','jade_runtime'
], function ($, jade, jade_runtime) {
    return function(template, data, target) {
        // Get page name and invoke rendering
        //var page = url.split('/')[1];
        // Hide all elements
      //$.get( "templates/head.jade", function( data ) {
      //  var head = jade.render( data );
      //  $('head').html(head);
      //});
      //$.get( "templates/body.jade", function( data ) {
      //  var body = jade.render( data );
      //  $('body').html(body).addClass('collapsing_header');
      //});
        var rendered  = jade.render(template, data);
        $(target).html(rendered);

        //
        //  $('.main .content .page').removeClass("active");
        //$('ul.nav li').removeClass("active");
        //
        //var map = {
        //  "": function () {
        //    $('section.page.home').toggleClass("active");
        //    $('ul.nav li.home').toggleClass("active");
        //
        //  },
        //  "calculator": function () {
        //    $('section.page.calculator').toggleClass("active");
        //    $('ul.nav li.calculator').toggleClass("active");
        //  },
        //  "contact": function () {
        //    $('section.page.contact').toggleClass("active");
        //    $('ul.nav li.contact').toggleClass("active");
        //  }
        //};
        //
        //if(map[page]){
        //  map[page]();
        //  window.history.pushState("object or string", "title", page);
        //}
        //// If the keyword isn't listed in the above - render the error page.
        //else {
        //  renderErrorPage();
        //}
    };
});

