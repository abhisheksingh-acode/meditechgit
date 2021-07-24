const slider = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 40,
  centeredSlides: false,
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
});

const slider2 = new Swiper(".slider-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});

$(document).ready(function () {
  $(".tab").click(function () {
    $(".active-tab").removeClass("active-tab");
    $(this).addClass("active-tab");
  });
});
