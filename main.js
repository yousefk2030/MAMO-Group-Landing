let header = document.querySelector("header");
let logo = document.querySelector("#logo");
let burgerIcon = document.querySelector("#burger-icon");
let bars = document.querySelectorAll("#burger-icon span");
let nav = document.querySelector("nav");
let link = document.querySelectorAll("nav li a");
let themeIcon = document.querySelector("#theme");
let langIcon = document.querySelector("#lang");
let hero = document.querySelector("#hero");
let heroTitle = document.querySelector("#hero h1");
let playIcon = document.querySelector("#play-button .fa-play");
let playButton = document.querySelector("#play-button");

// Burger Icon
function barsBehaviour() {
  bars.forEach((ele, index) => {
    // 1st & 3rd bar
    if (index === 0 || index === 2) {
      if (index === 0) {
        ele.classList.toggle("rotate-45");
      }
      if (index === 2) {
        ele.classList.toggle("-rotate-45");
      }
      ele.classList.toggle("absolute");
      ele.classList.toggle("translate-y-1/2");
    }

    // 2nd bar
    if (index === 1) {
      ele.classList.toggle("opacity-0");
    }
  });
}

burgerIcon.addEventListener("click", () => {
  nav.classList.toggle("max-h-0");
  nav.classList.toggle("pbe-5");
  nav.classList.toggle("max-h-85");
  barsBehaviour();
});

link.forEach((ele) => {
  ele.onclick = () => {
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      nav.classList.toggle("max-h-0");
      nav.classList.toggle("pbe-5");
      nav.classList.toggle("max-h-85");
      barsBehaviour();
    }
  };
});

// Dark Mode Icon
themeIcon.addEventListener("click", () => {
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");
  header.classList.toggle("bg-mamo-black");
  header.classList.toggle("bg-white");
  nav.classList.toggle("bg-mamo-black");
  nav.classList.toggle("bg-white");
  nav.classList.toggle("text-black");
  logo.classList.toggle("bg-mamo-black");
  logo.classList.toggle("p-1");
  bars[0].classList.toggle("bg-white");
  bars[0].classList.toggle("bg-mamo-black");
  bars[1].classList.toggle("bg-white");
  bars[1].classList.toggle("bg-mamo-black");
  bars[2].classList.toggle("bg-white");
  bars[2].classList.toggle("bg-mamo-black");
  // hero.classList.toggle("from-mamo-gold/15 bg-linear-to-b to-mamo-black");
  // hero.classList.toggle("from-mamo-gold/15 bg-linear-to-b to-bg-white");
  heroTitle.classList.toggle("text-black");
});

// Language button
langIcon.addEventListener("click", () => {
  langIcon.innerText === "EN"
    ? (langIcon.innerText = "AR")
    : (langIcon.innerText = "EN");
});

// Video buton
playButton.addEventListener("click", () => {
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
});
