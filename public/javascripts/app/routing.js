define(['jquery'], function($){
  return {
    home: {
      path: "/",
      title: "myHouse mainpage",
      render: function (data) {
        $('.page.home').toggleClass("active");
        $('ul.nav li.home').toggleClass("active");
      }
    },
    calculator: {
      path: "/calculator",
      title: "myHouse calculator",
      render: function (data) {
        $('section.page.calculator').toggleClass("active");
        $('ul.nav li.calculator').toggleClass("active");
      }
    },
    contact: {
      path: "/contact",
      title: "myHouse contact",
      render: function (data) {
        $('section.page.contact').toggleClass("active");
        $('ul.nav li.contact').toggleClass("active");
      }
    }
  };
});