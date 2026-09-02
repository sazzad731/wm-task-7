


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






const swiperTowSectionColor = [
  {
    color: "#A5C4FF",
  },
  {
    color: "#CED2BB",
  },
  {
    color: "#E7FD83",
  },
  {
    color: "#CED2BB",
  },
];
const swiperTow = new Swiper(".swiperTow", {
  effect: "fade",
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  speed: 100,
  navigation: {
    prevEl: ".swiperTow-button-next",
    nextEl: ".swiperTow-button-prev",
  },
  pagination: {
    el: ".swiperTow-pagination",
    clickable: true,
    bulletClass: "swiperTow-pagination-bullet",
    bulletActiveClass: "swiperTow-pagination-bullet-active",
  },
  keyboard: true,
  on: {
    slideChange: function () {
      let activeIndex = this.realIndex;
      const color = swiperTowSectionColor[activeIndex];
      if (color) {
        document.querySelector(".slide-2-section").style.background =
          color.color;
      }
    },
  },
});
