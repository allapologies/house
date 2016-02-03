$(function(){
 
    var template,   // Main template HTML
    tdata = {};// JSON data object that feeds the template
 
    // Initialise page
    var initPage = function() {
 
        // Load the HTML template
        $.get("/templates/home.html", function(d){
          template = d;
        });

        //$.getJSON("/home.json", function(d){
        //    tdata = d;
        //});

        // Retrieve the server data and then initialise the page
        //$.getJSON("/home.json", function (d) {
        //    $.extend(tdata, d.data);
        //});
        // When AJAX calls are complete parse the template
        // replacing mustache tags with vars
        $(document).ajaxStop(function () {
            //var renderedPage = Mustache.to_html( template, tdata );
            $("body").html( template );
        });
    }();

    //var initMenu = function(){
    //  $(".navbar").click(function(e){
    //    e.preventDefault();
    //    if (e.target === 1)
    //    menuHandler(e.target);
    //  })
    //}();
    //
    //function menuHandler(target){
    //
    //};
    //
    //function loadContent(target){
    //  "use strict";
    //};


});

