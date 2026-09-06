window.addEventListener("DOMContentLoaded", () => {
  function handleNavbar() {
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

    const navbarDropdown = $(".navbar-dropdown");
    const navBarDropdownDivs = $$(".navbar-dropdown-div");
    const dropdownLis = $$(".li-dropdown");
    const allArrows = $$(".nav-arrow-down");

    // helper function
    const toggleDesktopNav = (isActive) => {
      navbarDropdown.classList.toggle("active", isActive);
      $(".logo-aqua").style.opacity = isActive ? "0" : "1";
      $(".logo-root").style.opacity = isActive ? "1" : "0";
    };

    // 1. Desktop Nav Hover Logic
    $$(".nav-ul-li").forEach((li) => {
      li.addEventListener("mouseenter", () => {
        navBarDropdownDivs.forEach((d) => d.classList.remove("active"));
        allArrows.forEach((arrow) => (arrow.style.rotate = "0deg"));

        if (li.classList.contains("li-dropdown")) {
          toggleDesktopNav(true);

          const currentArrow = $(".nav-arrow-down", li);
          if (currentArrow) currentArrow.style.rotate = "-180deg";

          const div = navBarDropdownDivs[[...dropdownLis].indexOf(li)];
          if (div) div.classList.add("active");
        } else {
          toggleDesktopNav(false);
        }
      });
    });

    navbarDropdown.addEventListener("mouseleave", () => {
      navBarDropdownDivs.forEach((d) => d.classList.remove("active"));
      allArrows.forEach((arrow) => (arrow.style.rotate = "0deg"));
      toggleDesktopNav(false);
    });

    // 2. Mobile 3-Dot Menu Logic
    $$(".menu-3-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        const isActive = navbarDropdown.classList.toggle("active");
        document.body.style.overflow = isActive ? "hidden" : "auto";
      });
    });

    // 3. Mobile Dropdown Logic
    $$(".nav-ul-li-mobile").forEach((li) => {
      li.addEventListener("click", () => {
        if (li.classList.contains("li-mobile-dropdown")) {
          const div = $(".navbar-dropdown-div-mobile", li);
          const currentArrow = $(".nav-arrow-down", li);

          if (div) {
            const isActive = div.classList.toggle("active");
            div.style.height = isActive ? `${div.scrollHeight + 46}px` : "0px";
            if (currentArrow)
              currentArrow.style.rotate = isActive ? "-180deg" : "0deg";
          }
        } else {
          navbarDropdown.classList.remove("active");
        }
      });
    });

    // 4. Scroll Logic (Desktop only)
    if (window.innerWidth > 992) {
      let lastScrollTop = 0;
      const header = $(".header");

      window.addEventListener("scroll", () => {
        const currentScroll = Math.max(window.scrollY, 0);

        Object.assign(navbarDropdown.style, {
          position: currentScroll === 0 ? "relative" : "fixed",
          top: currentScroll === 0 ? "" : "-5px",
        });

        if (header) {
          header.style.top = currentScroll < lastScrollTop ? "45px" : "-500px";
        }
        lastScrollTop = currentScroll;
      });
    }
  }
  handleNavbar();


  function handleUnderlineAnimation() {
    const $ = (ele, ctx = document) => ctx.querySelector(ele);
    const $$ = (ele, ctx = document) => ctx.querySelectorAll(ele);

    const dotLinkWhite = $$(".wm-dot-link-white");
    const dotLinkRoot = $$(".wm-dot-link-root");
    const dotLinkStone = $$(".wm-dot-link-stone");

    dotLinkWhite.forEach(link => {
      link.addEventListener("mouseenter", () => {
        const elementWidth = link.offsetWidth;
        link.style.setProperty("--before-left", `-${elementWidth + 60}px`);
        link.style.setProperty("--after-left", "0px");
      })

      link.addEventListener("mouseleave", () => {
        const elementWidth = link.offsetWidth;

        link.style.setProperty("--before-left", "0px");
        link.style.setProperty("--after-left", `${elementWidth + 60}px`);
      });
    })

    dotLinkRoot.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const elementWidth = link.offsetWidth;
        link.style.setProperty("--before-left", `-${elementWidth + 60}px`);
        link.style.setProperty("--after-left", "0px");
      });

      link.addEventListener("mouseleave", () => {
        const elementWidth = link.offsetWidth;

        link.style.setProperty("--before-left", "0px");
        link.style.setProperty("--after-left", `${elementWidth + 60}px`);
      });
    });

    dotLinkStone.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const elementWidth = link.offsetWidth;
        link.style.setProperty("--before-left", `-${elementWidth + 60}px`);
        link.style.setProperty("--after-left", "0px");
      });

      link.addEventListener("mouseleave", () => {
        const elementWidth = link.offsetWidth;

        link.style.setProperty("--before-left", "0px");
        link.style.setProperty("--after-left", `${elementWidth + 60}px`);
      });
    });
  }
  handleUnderlineAnimation();



  function handleLogoColor() {
    const logo = document.querySelector(".logo-aqua");
    const sections = document.querySelectorAll("section[data-theme]");
    const logoDarkSrc = "./assets/images/dropdown-logo.png";
    const logoLightSrc = "./assets/images/primary-logo-AGROKRUH.png";

    const observerOptions = {
      root: null,
      rootMargin: "-50px 0px -90% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute("data-theme");

          if (theme === "dark") {
            logo.setAttribute("src", logoLightSrc);
          } else {
            logo.setAttribute("src", logoDarkSrc);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }
  handleLogoColor();
});





const swiperOne = new Swiper(".swiperOne", {
  effect: "fade",
  autoplay: true,
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





const brandSwiper = new Swiper(".brandSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 25,
  freeMode: true,
  breakpoints: {
    1440: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    425: {
      slidesPerView: 1.7,
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