(function($) {

  $(window).on("load",function(){
    var preloader = document.querySelector(".preloader");
    preloader.className += " hidden";

  });

  $(window).on("load", function() {
    setTimeout(function() {
      $(".intro").fadeOut(2000, function() {
        $(".description").fadeIn(2000);
      });
    }, 1000);

  });


  $('#to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });


  $('#lead-down span').click(function() {
    var scrollDistance = $('#lead').next().offset().top;
    $('html, body').animate({
      scrollTop: scrollDistance + 'px'
    }, 500);
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var height = $("#lead").height();
    if (scroll >= height) {
      $('.nav').css({
        "color": "black"
      });
    } else {
      $('.nav').css({
        "color": "white"
      });
    }

  });



})(jQuery);
