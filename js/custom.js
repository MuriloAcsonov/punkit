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
//
        
//
        //$(window).scroll(function() {
        //  if ($('body').scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //    navbar.addClass("top-nav-collapse");
        //      } else {
//                navbar.removeClass("top-nav-collapse");
        //      }
        //});


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
        var mybar = $('.custom-navbar');
        var about = $('#about');        
        var contact = $('#contact');

        $(window).scroll(function scrollFunction() {          
          
          if ($('body').scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.show();
          } else {
            mybutton.hide();            
          }

          if (($('body').scrollTop > about.offset().top - 90 || document.documentElement.scrollTop > about.offset().top - 90) && ($('body').scrollTop < contact.offset().top - 200 || document.documentElement.scrollTop < contact.offset().top - 200)) {
            mybar.css("background", "linear-gradient(180deg, rgba(1,3,120,1) 12%, rgba(0,0,0,1) 50%)");
          } else if ($('body').scrollTop < 20 || document.documentElement.scrollTop < 20) {
            mybar.css("background", "transparent");
          } else {
            mybar.css("background", "rgb(0,0,0)");
          }
          

        });        

        // Owl Carousel
        


})(jQuery);