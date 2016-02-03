define([
  'jquery'
], function ($) {

  function toggleView(source, target){
    $('section.section.'+source).toggle("active");
    $('section.section.'+target).toggle("active");
    $('body').data('current',target );
    window.history.pushState("object or string", "Title", target);
  };

  $('ul.nav li').click(function(e){
    console.log('clicked');
    e.preventDefault();
    var source = $('body').data('current'),
        target;
    switch (e.target.pathname){
      case '/': target = "home"; break;
      case '/calculator': target = "calculator"; break;
      case '/contact': target = "contact"; break;
      default: target = "home";
    };
    if (source==target) return;
    console.log('going to '+ target);
    toggleView(source,target);

  });
});
