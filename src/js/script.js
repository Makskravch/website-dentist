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
})
