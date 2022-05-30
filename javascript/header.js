/** This js file implements the navbar (collapse & expand) feature for every header on every page */

const expandNavBtn = document.querySelector(".nav-bar__outter-btn");
const exitNavBtn = document.querySelector(".exit-menu-outter-btn");
const navCover = document.querySelector(".nav-bar__cover");
const subNavToggles = document.querySelectorAll(".sub-nav__item-name");

const exitNav = () => {
  expandNavBtn.classList.remove("nav-bar--expand");
  document.body.style.overflow = "auto";
  subNavToggles.forEach((subNavToggle) => {
    subNavToggle.classList.remove("sub-nav--expand");
  });
}

const expandNav = () => {
  expandNavBtn.classList.add("nav-bar--expand");
  document.body.style.overflow = "hidden";
}

exitNavBtn.addEventListener("click", (e) => {
  exitNav();
});

navCover.addEventListener("click", (e) => {
  exitNav();
});

expandNavBtn.addEventListener("click", (e) => {
  expandNav();
});

subNavToggles.forEach((subNavToggle) => {
  subNavToggle.addEventListener("click", function(e) {
    this.classList.toggle("sub-nav--expand");
  })
});





