$(document).ready(function(){
    $(".article-card").mouseover(function(){
      $(this).next().css("margin-left","-80px")
    });
    $(".article-card").mouseout(function(){
        $(this).next().css("margin-left","-130px")
      });

      /*var h=$(".underline").position();
    $("#background").css({ top: h.top});
    var g=$("#background").position();
    console.log("h "+h.top + " g "+g.top);*/

    $(".navbar-toggler").on({
      click: function() {
        $("nav").toggleClass("list");
        $(".navbar-collapse").toggle();
        
      }
    });
  });