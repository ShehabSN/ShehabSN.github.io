/*!
    Title: Dev Portfolio Template
    Version: 1.2.1
    Last Change: 08/27/2017
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues
    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {
  $(function () {
    $(document).ready(function(){
      setTimeout(function(){
        $(".intro").fadeOut(2000,function(){
          $(".description").fadeIn(2000);
        });
      },3000);

    });

  });
    // Remove no-js class
    // $('html').removeClass('no-js');

    // Animate to section when nav is clicked


    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });
    $(function() {
        //caches a jQuery object containing the header element

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var height=$("#lead").height();
if(scroll>=height){
              $('.nav').css({"color":"black"});
}else{
  $('.nav').css({"color":"white"});
}

        });
    });


//     var targetOffset = $("#lead").offset().top;
//
// var $w = $(window).scroll(function(){
//     if ( $w.scrollTop() > targetOffset ) {
//         $('.navbars-white').css({"color":"black"});
//
//     } else {
//       // ...
//       $('.navbars-white').css({"color":"white"});
//     }
// });

})(jQuery);
