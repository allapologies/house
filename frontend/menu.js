const $ = require("jquery");

export function activate(){
  $("ul.nav").on('click','li', function(e){
    e.preventDefault();
    var target = e.target.pathname;
    $(document).trigger('pagechange', [target]);
  });

  $("form").submit(function(e) {
    e.preventDefault();
    var apiURL= $(this).attr("action"),
      formData = $(this).serialize();
    $.post( apiURL, formData, function(data, status) {
      if (!data.error){
        alert ("Ответ получен: " + data);
      } else {
        alert ("Ошибка: " + data.error);
      }
    }, "json");
  });
}
