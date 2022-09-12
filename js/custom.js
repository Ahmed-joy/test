$(function ()
{

    /* back2top part start*/
    $(".back2top i").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1200)
    })
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if( scrolling > 20){
            $(".back2top i").fadeIn(500)
        }else{
            $(".back2top i").fadeOut(500)
        }
    
    
        if( scrolling > 50){
            $(".navbar").addClass("nav_bg")
        }else{
            $(".navbar").removeClass("nav_bg")
        }
    })
    
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       .5,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

      /* banner part type */
      var typed = new Typed('.banner_type', {
        strings: [
        'DESINGER', 
        'YOUTUBER', 
        'HACKER',
        'DEVELOPER'
        
    ],
        typeSpeed: 200,
        loop:true,
      });

     // slider part start//

  $('.slick_main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode: true,
    centerPadding: '0px',
    nextArrow:".next",
    prevArrow:".prev",
  });
  
  /* port slick start*/
  $('.port_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    
  });

  

 // channel viceo part start//

 var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay:true,
    autoplaySpeed:4000,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
   
  });
    // preloader part start//
    $(window).preloader({
        delay: 1500
       
      });

      // finish//

      $(function() {
        $('.tabs nav a').on('click', function() {
          show_content($(this).index());
        });
        
        show_content();
      
        function show_content(index) {
          // Make the content visible
          $('.tabs .content.visible').removeClass('visible');
          $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');
      
          // Set the tab to selected
          $('.tabs nav a.selected').removeClass('selected');
          $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
        }
      });

      //finish//
  
  });
