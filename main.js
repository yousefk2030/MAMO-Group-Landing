// Burger Icon
let body = document.body;
let header = document.querySelector("header");
let logo = document.querySelector("#logo");
let burgerIcon = document.querySelector("#burger-icon");
let bars = document.querySelectorAll("#burger-icon span");
let nav = document.querySelector("nav");
let link = document.querySelectorAll("nav li a");

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
    if (header.clientWidth < 1024) {
      nav.classList.toggle("max-h-0");
      nav.classList.toggle("pbe-5");
      nav.classList.toggle("max-h-85");
      barsBehaviour();
    }
  };
});


// Dark Mode Icon
let themeIcon = document.querySelector("#theme");

themeIcon.addEventListener("click", () => {
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");
  // header.classList.toggle("bg-mamo-black");
  // header.classList.toggle("bg-white");
  // nav.classList.toggle("bg-mamo-black");
  // nav.classList.toggle("bg-white");
  // nav.classList.toggle("text-black");
  // logo.classList.toggle("bg-mamo-black");
  // logo.classList.toggle("p-1");
  // bars[0].classList.toggle("bg-white");
  // bars[0].classList.toggle("bg-mamo-black");
  // bars[1].classList.toggle("bg-white");
  // bars[1].classList.toggle("bg-mamo-black");
  // bars[2].classList.toggle("bg-white");
  // bars[2].classList.toggle("bg-mamo-black");
  // localStorage.setItem("theme", "draklight");
});
