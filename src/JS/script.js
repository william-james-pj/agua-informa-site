const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElem = document.querySelectorAll(".has-fade");
const a_menu = document.querySelectorAll(".header__menu a");
const menuItems = document.querySelectorAll('header a[href^="#"]');

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Menu
    header.classList.remove("open");
    body.classList.remove("noscroll");

    fadeElem.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Menu
    header.classList.add("open");
    body.classList.add("noscroll");

    fadeElem.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

a_menu.forEach(a => {
  a.addEventListener("click", function () {
    header.classList.remove("open");
    body.classList.remove("noscroll");
    fadeElem.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  });
})

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}
function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}
function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget);
  scrollToPosition(to);
}
menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});
