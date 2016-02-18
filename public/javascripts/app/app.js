define([
  'jquery', 'app/render', 'app/formhandler', 'app/directory'
], function ($, render, Form, directory) {
  $( document ).ready(function() {

    var head, body,results_template;

    $.get( "templates/head.html", function( template ) {
      render( template, {}, "head" );
      head = template;
    });
    $.get( "templates/body.html", function( template ) {
      render( template, {}, "body" );
      body = template;
    });
    $.get( "templates/results.html", function( template ) {
      results_template = template;
    });


    require(['app/restart'], function() {});
    require(['app/navigation'], function() {});

    // When the page has loaded
    $(window).on("loaded", function() {
      //Show app content
      $("body").fadeIn(200);
      //Forms init
      var formCalc = new Form('form#calculation');
      formCalc.init();
      //var formContact = new Form('form#contact');
      //formContact.init();
    });

    // When the form succesfully submitted
    $(window).on("form_submitted", function(e, data) {
      $(data.form).parents('section.form').toggleClass('active');
      render( results_template, {
        results:data.data.data,
        translate: function(){
          return function(text,render){
            return directory[render(text)].name;
          }
        }},
        'section.results');
      //$(data.id).parents('section.page.active').find('section.form').toggleClass('active');

      //$('section.results').toggleClass('active');
    });

  });
});