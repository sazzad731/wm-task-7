


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





const bulletTitles = ["technológia", "NOVINKY", "PRODUKTY", "NAŠA MISIA", "KOMUNITA"];
const swiperThree = new Swiper(".swiperThree", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1500,
  pagination: {
    el: ".slide-section-3-pagination",
    clickable: true,
    bulletClass: "slide-section-3-bullet",
    bulletActiveClass: "slide-section-3-bullet-active",
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + bulletTitles[index] + "</span>"
      );
    },
  },
});










const imageSrc = [
  { url: "./assets/images/Cibuľa.png" },
  { url: "./assets/images/Reďkovka.png" },
  { url: "./assets/images/Mrkva.png" },
  { url: "./assets/images/Paradajka.png" },
  { url: "./assets/images/Paprika.png" },
  { url: "./assets/images/Zemiak.png" },
  { url: "./assets/images/Hrach.png" },
  { url: "./assets/images/Kapusta.png" },
  { url: "./assets/images/Baklažán.png" },
  { url: "./assets/images/Uhorka.png" },
];
const swiperFour = new Swiper(".zoznamSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  slideToClickedSlide: true,
  loop: true,
  initialSlide: 3,
  loopAdditionalSlides: 3,
  centeredSlides: true,
  mousewheel: {
    eventsTarget: ".zoznamSwiper-div",
  },
  on: {
    slideChange: function () {
      let activeIndex = this.realIndex;
      const image = imageSrc[activeIndex];
      if (image) {
        document.querySelector(".zoznam-slide-img").setAttribute("src", image.url)
      }
    },
  },
});