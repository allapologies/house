define(['jquery', 'app/routing', 'app/restart'], function ($, routing, restart) {

  function checkPath(path) {
    var routingPathRegex = Object.keys(routing).map(function (key) {
      var path = routing[key].path;
      var regex = new RegExp(path.replace(/:([^\/]+)/g, "([^\/]+)"));
      return {
        key : key,
        path: regex
      };
    });

    var route = null;

    $.each(routing, function (key, value) {
      if (! route) {
        var regex = new RegExp("^" + value.path.replace(/:([^\/]+)/g, "([^/]+)") + "$");
        var match = path.match(regex);
        if (match) {
          route = $.extend({}, value);
          var data = match.slice(1);
          ["data", "title"].forEach(function (key) {
            if (typeof route[key] === "function") {
              route[key] = route[key].apply(null, data);
            }
          });
        }
      }
    });

    return route;
  }

  /**
   * move to render function
   */
  $('.home.page').toggleClass("active");

  $('a').click(function(e){
    var $target = $(e.target);
    if ($target.attr("target") === "_self") {
      return;
    };
    //Prevent hyperlink opening
    e.preventDefault();
    switchPage($target.attr("href"));
  });

  function switchPage(href) {
    var route = checkPath(href);
    if (! route) {
      console.error("%s does not match routing!!", href);
      return;
    };

    // Hide all elements
    $('.page').removeClass("active");
    /**
     * TODO
     * Changing active menu class
     */
    $('ul.nav li').removeClass("active");

    route.render();
    history.pushState("", route.title, href);
    document.title = route.title;
    //require(['app/restart'], function() {});

  };

});
