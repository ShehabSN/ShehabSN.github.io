new WOW().init();
(function($) {

$(".description").hide();
$(".intro").hide();
$(".btn-rounded-white").hide();

  $(window).on("load", function() {
setTimeout(function(){

  $(".intro").show();
      setTimeout(function() {
        $(".intro").removeClass('rollIn');

                  $(".intro").addClass('rollOut slow');
                  setTimeout(function(){
                    $(".intro").remove();
                    $(".description").show(function(){
                      $(".btn-rounded-white").show();
                      $(".btn-rounded-white").addClass('rubberBand');
                    });

                  },1000);



      }, 2500);
},1000);


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
