// toggle burger menu logic
const burger = document.querySelector(".header__burger");
const navigationMenu = document.querySelector(".header__navigation");
const navigationMenuLink = document.querySelector(".header__link");

const toggleClass = (element, className) => element.classList.toggle(className);
const changedClass = "active";

burger.addEventListener("click", () => {
  toggleClass(burger, changedClass);
  toggleClass(navigationMenu, changedClass);
});

navigationMenuLink.addEventListener("click", () => {
  burger.classList.remove(changedClass);
  navigationMenu.classList.remove(changedClass);
});

// slider logic
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel-legend").mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel-terrace").mount();
});
