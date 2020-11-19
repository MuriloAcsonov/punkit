(function ($) {

    "use strict";   

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').delay(500).slideUp('slow'); // set duration in brackets              
          
        });        

        // MENU
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });


        // PARALLAX JS
        function initParallax() {
          $('#home').parallax("60%", 100);
          $('#about').parallax("100%", 80);
          $('#project').parallax("80%", 60);
          $('#team').parallax("40%", 40);
          $('#contact').parallax("20%", 20);
          }
        initParallax();

        $(document).ready(function(){
          
          $('.simple-ajax-popup').magnificPopup({
            type: 'ajax'
          });       
          
        });

        //SCROLL WHATS BUTTON
        var mybutton = $('#whats');

        $(window).scroll(function scrollFunction() {          
          if ($('body').scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.show();
          } else {
            mybutton.hide();
          }
        });        

        // Owl Carousel
        


})(jQuery);