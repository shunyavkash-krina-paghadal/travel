let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.style.backgroundColor = "var(--green-dark)";
    header.style.transition = "background-color 0.3s ease, padding 0.1s ease";
    header.style.padding = "20px";
  } else {
    header.style.backgroundColor = "";
    header.style.padding = "20px";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 70) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
   575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1424: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
