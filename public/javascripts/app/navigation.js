define([
  'jquery'
], function ($) {

  render("home");

  $(window).on('pagechange', function(event, url){
    // Hide all elements
    $('.main .content .page').removeClass("active");
    // Get page name and invoke rendering
    var page = url.split('/')[1];
    render(page);
  });

  //function toggleView(source, target){
  //  $('section.section.'+source).toggleClass("active");
  //  $('section.section.'+target).toggleClass("active");
  //  $('ul.nav li.'+source).toggleClass("active");
  //  $('ul.nav li.'+target).toggleClass("active");
  //  $('body').data('current',target );
  //  window.history.pushState("object or string", "Title", target);
  //};

  $('ul.nav li').click(function(e){
    e.preventDefault();
    var target = e.target.pathname;
    $(window).trigger('pagechange', [target]);
  });

  function render(pageName) {
    $('section.page.'+pageName).toggleClass("active");
    //set browser url
    window.history.pushState("object or string", "title", pageName);
  };

  function renderErrorPage(){
    var page = $('.error');
    page.addClass('visible');
  };
});
