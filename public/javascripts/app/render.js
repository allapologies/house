define([
  'jquery', 'mustache'
], function ($, mustache) {
    return function(template, data, target) {
      var rendered  = mustache.render(template, data);
      $(target).html(rendered);
    };
});

