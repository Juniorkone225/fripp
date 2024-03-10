var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 90,
    modifier: 3,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".slider .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");
let menu = document.querySelector(".menu");
let header = document.querySelector(".header");
let header_content_two = document.querySelector(".header_content_two");
let icon_toggle = document.querySelector(".mobile_menu_toggle");
thumbnail.appendChild(thumbnailItems[0]);
menu.addEventListener("click", () => {
  header.classList.toggle("header_shadow");
  header_content_two.classList.toggle("cc");
  icon_toggle.classList.toggle("active");
});

// Function for next button
nextBtn.onclick = function () {
  moveSlider("next");
};
// Fonction pour le diaporama automatique
function autoSlide() {
  moveSlider("next");
}

// Interval pour déclencher la fonction autoSlide toutes les X millisecondes (par exemple, toutes les 3000 millisecondes soit toutes les 3 secondes)
var autoSlideInterval = setInterval(autoSlide, 5000);

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev");
};

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");
  let focus = document.querySelectorAll(".focus");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  ); // Remove the event listener after it's triggered once
}
