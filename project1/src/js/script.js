const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");
const counters = document.querySelectorAll(".skills__ratings-counter");
const lines = document.querySelectorAll(".skills__ratings-line span");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
