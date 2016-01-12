$( document ).ready(
  $("button").click(function(){
    "use strict";
    let data = {
        floors:{1:3},
        walls:{
          sideA:10,
          sideB:10,
          thickness:0.3
        },
        foundation:"plita",
        roof:"flat",
        rooms: {
          floor:1,
          type:"bathroom",
          area:10,
          windows: {
            id:2,
            width:120,
            height:80
          }
        }
    };

    $.ajax({
      type: "POST",
      url: "/calculator/calculate.json",
      data: JSON.stringify(data),
      success: function(result){
        $(".result").html(JSON.stringify(result.data));
      },
      error: function(e){
        alert(e.message);
      },
      dataType: "json",
      contentType: "application/json"
    });

  })
);


