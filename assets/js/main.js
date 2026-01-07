(function ($) {
    "use strict";

    var windowOn = $(window);

    // preloader 
    windowOn.on('load', function () {
        $("#loading").fadeOut(1000);
    })

    // Back To Top
    var $backToTop = $(".mh-back-to-top");
    $backToTop.hide();

    windowOn.on('scroll', function() {
      if ($(this).scrollTop() > 300 ) {
        $backToTop.fadeIn();
        $backToTop.addClass("mh-back-to-top-open");
      } else {
        $backToTop.fadeOut();
        $backToTop.removeClass("mh-back-to-top-open");
      }
    });

    $backToTop.on('click', function(e) {
      $("html, body").animate({scrollTop: 0}, 300);
    });

    // sticky js 
    windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
      if (scroll < 100) {
         $("#mh-header-sticky").removeClass("header-sticky");
      } else {
         $("#mh-header-sticky").addClass("header-sticky");
      }
    });


    //Mobile Menu Custom
    var mhMenuHTML = $('.mh-mobile-menu-active > ul').clone();
    var mhOffcanvasMenu = $('.mh-offcanvas-menu > nav');

    mhOffcanvasMenu.append(mhMenuHTML);

    if($(mhOffcanvasMenu).find('.sub-menu').length !=0) {
      $(mhOffcanvasMenu).find('.sub-menu').parent().append('<button class="mh-sidemenu-close"><i class="far fa-chevron-right"></i></button>');
    };

    var mhSideMenuToggle = $('button.mh-sidemenu-close');

    $(mhSideMenuToggle).on('click',function(){
      $(this).siblings('.sub-menu').slideToggle();
      $(this).parent().toggleClass('active');
    });


    // offcanvas 
    $(".mh-header-toggle").on('click', function(){
      $(".mh-offcanvas-area").addClass("mh-offcanvas-open");
      $(".mh-offcanvas-overlay").addClass("mh-offcanvas-overlay-open");
    });

    $(".mh-offcanvas-close-button,.mh-offcanvas-overlay").on('click', function(){
      $(".mh-offcanvas-area").removeClass("mh-offcanvas-open");
      $(".mh-offcanvas-overlay").removeClass("mh-offcanvas-overlay-open");
    });



    // Hero Slider
    var heroSwiper = new Swiper(".mh-hero-slider-active", {
      slidesPerView: 1,
		  loop: true,
		  autoplay: true,
		  arrow: false,
		  spaceBetween: 0,
		  speed: 1000,
		  effect:'fade',
      pagination: {
        el: ".mh-hero-dot",
        clickable: true,
      },
      a11y: false,
    });

    // Brand Slider
    var textSlider = new Swiper(".mh-brand-slide", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freemode: true,
      centeredSlides: true,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });

    // data bg color
    $("[data-bg-color]").each(function () {
      $(this).css("background-color", $(this).attr("data-bg-color"))
    });

    // Brand-2 Slider
    var textSlider = new Swiper(".mh-brand-2-active", {
      slidesPerView: 'auto',
      freemode: true,
      centeredSlides: true,
      loop: true,
      speed: 20000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });

    // Gallery slider
    var showcase = new Swiper('.gallery-slider-active', {
		slidesPerView: 4,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 15,
		speed: 1000,
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,

	});

    // Testimonials Slider
    var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".mh-testimonial-dot",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
      },
    });

  // video
  $('.test-popup-link').magnificPopup({
    type: 'iframe'
  });

  // data bg img 
  $("[data-bg-img]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
  });

  
  // data bg color 
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", "url(" + $(this).attr("data-bg-color") + ")")
  });
  
  // data color
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"))
  });

// CounterUp
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

 // jarallax
  if ($('.jarallax').length !=0) {
    $('.jarallax').jarallax({
        speed: 0.2,
    });
  }


})(jQuery)