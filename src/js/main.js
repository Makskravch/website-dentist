let $ = require('jquery')
let slick = require('./slick.js')

$(function() {
  const $body = $('body')
  const $nav = $('nav')
  
  // Open/close navigation
  $(document).on('click', '.js-nav-toggle', function() {
    $(this).toggleClass('is-active')
    $nav.toggleClass('is-active')
    $body.toggleClass('overflow')
    $('.header__phone').toggleClass('is-hidden')
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
  if ($('.orthodontics__correction .slider__list').length) {
    $('.orthodontics__correction .slider__list').slick({
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
})
