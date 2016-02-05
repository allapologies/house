define([
  'jquery', 'app/render'
], function ($, render) {

  $('.home.page').toggleClass("active");

  $('ul.nav li').click(function(e){
    e.preventDefault();
    var target = e.target.pathname;
    $(window).trigger('pagechange', [target]);
  });

  $(window).on('pagechange', function(event, url){
    switchPage(url);
  });

  function switchPage(url) {
    // Get page name and invoke rendering
    var page = url.split('/')[1];
    // Hide all elements
    $('.page').removeClass("active");
    $('ul.nav li').removeClass("active");

    var map = {
     "": function () {
       $('.page.home').toggleClass("active");
       $('ul.nav li.home').toggleClass("active");

     },
      "calculator": function () {
        $('section.page.calculator').toggleClass("active");
        $('ul.nav li.calculator').toggleClass("active");
      },
      "contact": function () {
        $('section.page.contact').toggleClass("active");
        $('ul.nav li.contact').toggleClass("active");
      }
    };

    if(map[page]){
      map[page]();
      window.history.pushState("object or string", "title", page);
    }
    // If the keyword isn't listed in the above - render the error page.
    else {
      renderErrorPage();
    }
    require(['app/restart'], function() {});

  };

  function renderErrorPage(){
    alert ("error page rendered");
  };

});
