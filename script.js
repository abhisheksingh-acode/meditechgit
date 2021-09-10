const swiper = new Swiper(".home-slider", {
  slidesPerView: 1,
  // spaceBetween: 40,
  centeredSlides: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    duration: 1500,
  },
});

const slider = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 45,
  centeredSlides: false,
  speed: 600,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
  autoplay: {
    duration: 1000,
  },
});
const videoSlider = new Swiper(".swiper-video", {
  slidesPerView: 3,
  spaceBetween: 25,
  centeredSlides: false,
  speed: 600,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".video-button-next",
    prevEl: ".video-button-prev",
  },
  // autoplay: {
  //   duration: 1000,
  // },
});
const blogSlider = new Swiper(".swiper-blogs", {
  slidesPerView: 4,
  spaceBetween: 25,
  centeredSlides: false,
  speed: 600,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".blogs-button-next",
    prevEl: ".blogs-button-prev",
  },
  // autoplay: {
  //   duration: 1000,
  // },
});
const testimoniSlider = new Swiper(".testimonial-swiper", {
  slidesPerView: 3,
  spaceBetween: 45,
  centeredSlides: false,
  speed: 600,
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   dynamicBullets: true,
  // },
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
  autoplay: {
    delay: 1000,
  },
});

const slider2 = new Swiper(".slider-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 600,
  loop: true,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  autoplay: {
    delay: 1000,
  },
});

$(document).ready(function () {
  $(".tab").click(function () {
    $(".active-tab").removeClass("active-tab");
    $(this).addClass("active-tab");

    let active = $(this).index();

    $(".tab-container").removeClass("active");
    $(".tab-container").eq(active).addClass("active");
  });
});

$(document).ready(function () {
  let img1 = "https://metropolisindia.com/newdata/images/body.svg";
  let img2 = "https://metropolisindia.com/newdata/images/femalebody.svg";

  $(".gender").change(function () {
    if ($(this).val() == "male") {
      $("#body-image").attr("src", img1);
      $("#body-image").removeClass("female-body");
      $(".female").addClass("d-none");
      $(".male").removeClass("d-none");
    } else {
      $("#body-image").attr("src", img2);
      $("#body-image").addClass("female-body");
      $(".male").addClass("d-none");
      $(".female").removeClass("d-none");
    }
  });
});
