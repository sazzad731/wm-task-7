window.addEventListener("DOMContentLoaded", function () {
  function handleNavbarDropdown() {
    const navbarDropdown = document.querySelector(".navbar-dropdown");
    const navUlLi = document.querySelectorAll(".nav-ul-li");
    const logoAqua = document.querySelector(".logo-aqua");
    const logoRoot = document.querySelector(".logo-root");
    const navBarDropdownDiv = document.querySelectorAll(".navbar-dropdown-div");
    const menu3Dot = document.querySelectorAll(".menu-3-dot");
    const navUlLiMobile = document.querySelectorAll(".nav-ul-li-mobile");

    let activeArrow;

    const dropdownLis = document.querySelectorAll(".li-dropdown");

    navUlLi.forEach((li) => {
      li.addEventListener("mouseenter", function () {
        navBarDropdownDiv.forEach((item) => item.classList.remove("active"));

        if (li.classList.contains("li-dropdown")) {
          navbarDropdown.classList.add("active");
          logoAqua.style.opacity = "0";
          logoRoot.style.opacity = "1";
          activeArrow = li.querySelector(".nav-arrow-down");

          activeArrow.style.rotate = "-180deg"

          const index = Array.from(dropdownLis).indexOf(li);
          if (index !== -1 && navBarDropdownDiv[index]) {
            navBarDropdownDiv[index].classList.add("active");
          }
        } else {
          navbarDropdown.classList.remove("active");
          activeArrow.style.rotate = "0deg";
          logoAqua.style.opacity = "1";
          logoRoot.style.opacity = "0";
        }
      });
    });
    
    navbarDropdown.addEventListener("mouseleave", function () {
      navbarDropdown.classList.remove("active");
      navBarDropdownDiv.forEach((item) => item.classList.remove("active"));
      activeArrow.style.rotate = "0deg";
      logoAqua.style.opacity = "1";
      logoRoot.style.opacity = "0";
    });


    menu3Dot.forEach(dot => {
      dot.addEventListener("click", function () {
      if (navbarDropdown.classList.contains("active")) {
        navbarDropdown.classList.remove("active")
        document.body.style.overflow = "auto";
      } else {
        navbarDropdown.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    })
    })


    // for mobile device
    navUlLiMobile.forEach(li => {
      if (li.classList.contains("li-mobile-dropdown")) {
        li.addEventListener("click", function () {
          const navbarDropdownDivMobile = this.querySelector(".navbar-dropdown-div-mobile")
          activeArrow = li.querySelector(".nav-arrow-down");
          if (navbarDropdownDivMobile) {
            if (navbarDropdownDivMobile.classList.contains("active")) {
              navbarDropdownDivMobile.classList.remove("active");
              navbarDropdownDivMobile.style.height = "0px";
              activeArrow.style.rotate = "0deg";
            } else {
              navbarDropdownDivMobile.classList.add("active");
              navbarDropdownDivMobile.style.height = (navbarDropdownDivMobile.scrollHeight + 46) + "px";
              activeArrow.style.rotate = "-180deg";
            }
          }
        });
      } else {
        li.addEventListener("click", function () {
          navbarDropdown.classList.remove("active")
        });
      }
    })

    
    
    let lastScrollTop = 0;
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll === 0) {
        navbarDropdown.style.position = "relative"
      } else {
        navbarDropdown.style.position = "fixed";
        navbarDropdown.style.top = "-5px";
      }
      if (currentScroll < lastScrollTop) {
        header.style.top = "45px";
      } else {
        header.style.top = "-500px";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }

  handleNavbarDropdown(); 
})





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
const h3 = document.querySelectorAll(".slide-sec-3-slide-h3");
h3.forEach(el => {
  const nodes = Array.from(el.childNodes);
  let newHTML = "";
  let wordIndex = 0;

  nodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/\s+/);
      words.forEach((word) => {
        if (word.trim() !== "") {
          let delay = wordIndex * 0.10;
          newHTML += `<span class="anim-word" style="--delay: ${delay}s">${word}</span> `;
          wordIndex++;
        }
      });
    }

    else if (node.nodeType === Node.ELEMENT_NODE) {
      newHTML += node.outerHTML;
    }
  })
  el.innerHTML = newHTML;
})
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