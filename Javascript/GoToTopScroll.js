
//---Go To Top Scroll-------------------------------------------------------------------------------------------

$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 200){
        $('b').css({
          "opacity":"1", "pointer-events":"auto"
        });
      }else{
        $('b').css({
          "opacity":"0", "pointer-events":"none"
        });
      }
    });
    $('b').click(function(){
      $('html').animate({scrollTop:0}, 1000);
    });
  });
  