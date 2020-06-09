let $ = require('jquery')

$(function() {
  const $body = $('body')
  const $nav = $('nav')
  
  $(document).on('click', '.js-nav-toggle', function() {
    $(this).toggleClass('is-active')
    $nav.toggleClass('is-active')
    $body.toggleClass('overflow')
    $('.header__phone').toggleClass('is-hidden')
  })
})
