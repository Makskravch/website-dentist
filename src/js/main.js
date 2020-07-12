let $ = require('jquery')
let AOS = require('aos')
let magnificPopup = require('magnific-popup')
let slick = require('./slick.js')

$(function() {
  const $body = $('body')
  const $nav = $('nav')

  
  $(window).bind("load", function() {
    //Пример исключения ссылки:
    //jQuery('a[href*="#"]:not([href="#"],[href="#spu-209"]').click(function() {
    $('a[href*="#"]:not([href="#"]').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $("html, body").animate({
            scrollTop: target.offset().top - 100
          }, 1000);
          return false;
        }
      }
    });
  });

  // Open/close navigation
  $(document).on('click', '.js-nav-toggle', function(e) {
    $(this).toggleClass('is-active')
    $nav.toggleClass('is-active')
    $body.toggleClass('overflow')
    $('.header__phone').toggleClass('is-hidden')
  })

  // Open/close subnav (on mobile version)
  $(document).on('click', '.js-subnav-toggle', function() {
    if ($(window ).width() <= 992) {
      $(this).next('.subnav').slideToggle()
    }
  })
  

/* ======================================================================================================= */
  // HOME
  // Slider (promotion section)
  if ($('.promotion .slider__list').length) {
    $('.promotion .slider__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      infinite: true,
      // autoplay: 2000,
      dots: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        },
      ]
    });
  }

  // Slider (services section)
  if ($('.services .slider__list').length) {
    $('.services .slider__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      infinite: true,
      speed: 1000,
    });
  }

  // Slider (our-works section)
  if ($('.our-works .slider__list').length) {
    $('.our-works .slider__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      infinite: true,
      dots: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
          }
        },
      ]
    });
  }

  // Slider (blog section)
  if ($('.blog .slider__list').length) {
    $('.blog .slider__list').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      draggable: true,
      infinite: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '35%',
            arrows: false,
          }
        },
      ]
    })
    .on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  }

  // Slider (reviews section)
  if ($('.reviews .slider__list').length) {
    $('.reviews .slider__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      infinite: true,
      speed: 1000,
    })
    .on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  }

  // Maps of the "contacts" block ("home" page)
  if ($('.contacts .map').length) {
    let $streetItem = $('.street__item')
    let $mapItem = $('.map__iframe')
    
    $(document).on('click', '.street__item', function() {
      $streetItem.removeClass('is-active')
      $(this).addClass('is-active')
      $mapItem.removeClass('is-active')
      $mapItem[$streetItem.index(this)].classList.add('is-active')
    })
  }

  /* ================================================================================================= */
  // ORTHODONTICS
  // Correction
  if ($('.orthodontics .slider__list').length) {
    $('.orthodontics .slider__list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      infinite: true,
      speed: 1000,
      rows: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20%',
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '35%',
            arrows: false,
          }
        },
      ]
    })
    .on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  }
  
  // =================================================================================================================
  // AOS Initial (Animate on scroll)
  if ($('h1, h2, h3, h4, h5, h6, img').length) {
    $('h1, h2, h3, h4, h5, h6, img').attr("data-aos", "fade-up")

    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    });
  }

  // =================================================================================================================
  // Magnific Popup Initial
  if ($('.mfp-clinic').length) {
    $('.mfp-clinic').magnificPopup({
      type:'image',
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
      },
      gallery:{
        enabled:true,
        navigateByImgClick: true,
      },
    });
  }
  if ($('.mfp-certificates').length) {
    $('.mfp-certificates').magnificPopup({
      type:'image',
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
      },
      gallery:{
        enabled:true,
        navigateByImgClick: true,
      },
    });
  }
})

$(window).on('load', function() {
  function goToByScroll(id) {
    $("html, body").animate({
      scrollTop: $(id).offset().top - 100
    }, 1000);
  }
  if (window.location.hash != '') {
    goToByScroll(window.location.hash);
  }
});