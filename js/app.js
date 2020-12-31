const hamburger = document.querySelector(".hamburger-icon");
const navBar = document.querySelector(".main-nav");
const hover2drop = document.querySelector(".hover2drop");
const dropdown = document.querySelector(".dropdown");
const dropdown__icon = document.querySelector(".dropdown__icon");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("showNav");
  hamburger.classList.toggle("open");
});

hover2drop.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  dropdown__icon.classList.toggle("transformZ-90");
});
