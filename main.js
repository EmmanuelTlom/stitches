document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    autoplay: true,
    arrows: false,
    pagination: false,
    interval: 2000,
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide2", {
    type: "loop",
    autoplay: true,
    arrows: false,
    pagination: false,
    interval: 2000,
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide3", {
    autoplay: true,
    rewind: true,
    perPage: 3,
    pagination: false,
    gap: 20,
    arrows: true,
    breakpoints: {
      1200: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide4", {
    autoplay: true,
    rewind: true,
    perPage: 6,
    pagination: false,
    perMove: 1,
    gap: 20,
    arrows: false,
    breakpoints: {
      1200: {
        perPage: 6,
      },
      // 768: {
      //   perPage: 1,
      // },
      480: {
        perPage: 5,
      },
    },
  }).mount();
});
