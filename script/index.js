const sliderContainer = document.querySelector(".client_slider");
const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".prev");

$(sliderContainer).slick({
  dots: false,
  infinite: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  prevArrow: prevArrow,
  nextArrow: nextArrow,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

let darkMode = localStorage.getItem("darkMode");

const enable = () => {
  document.querySelector("body").classList.add("dark__bg");
  localStorage.setItem("darkMode", "enabled");
  rightToggle.style.display = "inline";
  toggleBtn.style.display = "none";
};

const disabled = () => {
  document.querySelector("body").classList.remove("dark__bg");
  localStorage.setItem("darkMode", null);
  rightToggle.style.display = "none";
  toggleBtn.style.display = "inline";
};

// dark and light
const button = document.querySelector(".dark_toggle");
const toggleBtn = document.querySelector(".toggle");
const rightToggle = document.querySelector(".right_toggle");
if (darkMode == "enabled") {
  enable();
  toggleBtn.classList.add("active");
}

button.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enable();
  } else {
    disabled();
  }
});

// arrow up
const arrowUp = document.querySelector(".arrow_up");

arrowUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// loading part
AOS.init();
const loader = document.querySelector(".loader");

window.addEventListener("DOMContentLoaded", () => {
  let setTime = setTimeout(() => {
    loader.style.display = "none";
    //scroll  animation function
    AOS.init();
  }, 3000);

  return setTime;
});
