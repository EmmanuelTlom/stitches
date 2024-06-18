document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    autoplay: true,
    arrows: false,
    pagination: false,
    interval: 3000,
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide2", {
    type: "loop",
    autoplay: true,
    arrows: false,
    pagination: false,
    interval: 5000,
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide3", {
    autoplay: true,
    rewind: true,
    perPage: 3,
    pagination: false,
    perMove: 1,
    gap: 20,
    arrows: true,
    breakpoints: {
      1200: {
        perPage: 3,
      },
      768: {
        perPage: 1,
      },
      480: {
        perPage: 1,
      },
    },
  }).mount();
});
