document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    autoplay: true,
    arrows: false,
    interval: 3000,
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide2", {
    type: "loop",
    autoplay: true,
    arrows: false,
    interval: 5000,
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide3", {
    type: "loop",
    autoplay: true,
    perPage: 3,
    perMove: 1,
    gap: 30,
    arrows: true,
  }).mount();
});
