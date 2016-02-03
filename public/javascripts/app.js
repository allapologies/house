requirejs.config({
  baseUrl: 'javascripts/lib',
  paths: {
    app: '../app',
    jquery: 'jquery-2.2.0.min',
    bootstrap: "bootstrap.min",
    flexslider:'woothemes-FlexSlider-06b12f8/jquery.flexslider-min',
    prettyphoto: 'prettyPhoto_3.1.5/jquery.prettyPhoto',
    isotope:'isotope/jquery.isotope.min',
    totop: 'jquery.ui.totop',
    easing: 'easing',
    wow:'wow.min',
    snapsvg:'snap.svg-min',
    restart_theme:'restart_theme',
    modernizr:'modernizr.custom.48287',
    mustache:'mustache.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'flexslider':['jquery'],
    'prettyphoto':['jquery'],
    'totop':['jquery'],
    'easing': ['jquery'],
    'wow':['jquery'],
    'snapsvg':['jquery'],
    'restart_theme':['jquery', 'snapsvg', 'wow', 'isotope']
  }
});

requirejs(['jquery', 'bootstrap','modernizr'],
  function ($) {
    require(['app/restart'], function() {});
    require(['app/navigation'], function() {});
    require(['app/formHandler'], function() {});
  }
);
