


const swiperOne = new Swiper(".swiperOne", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1500,
  pagination: {
    el: ".slide-section-1-pagination",
    clickable: true,
    bulletClass: "slide-section-1-bullet",
    bulletActiveClass: "slide-section-1-bullet-active",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});



const swiperTow = new Swiper(".swiperTow", {
  cssMode: true,
  navigation: {
    prevEl: ".swiperTow-button-next",
    nextEl: ".swiperTow-button-prev",
  },
  pagination: {
    el: ".swiperTow-pagination",
    clickable: true,
  },
  keyboard: true,
});
