var btn = $('#progress-scroll');

$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '500');
});
// Testimonial Carousel Js
$('.testimonial-carousel.owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: false,
  active: true,
  smartSpeed: 1000,
  autoplayTimeout: 7000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
