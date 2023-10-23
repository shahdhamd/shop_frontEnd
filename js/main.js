$(document).ready(function () {
  $('.products-items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.top-selling').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  // noUislider library
  var html5Slider = document.getElementById('html5');

  noUiSlider.create(html5Slider, {
    start: [200, 800],
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    }
  });

  var inputNumber = document.getElementById('input-number');
  var inputNumber1 = document.getElementById('input-number-1')

  html5Slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
      inputNumber.value = value;
    } else {
      inputNumber1.value = Math.round(value);
    }
  });

  inputNumber1.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
  });

  inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });
});


