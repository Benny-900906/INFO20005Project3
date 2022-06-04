/** This js file implements the footer (collapse & expand) feature for every header on every page */

const dropDownToggles = document.querySelectorAll(".category__drop-down-toggle");

/* using regular function instead of arrow function for accessible 'this' */
dropDownToggles.forEach((dropDown) => {
  dropDown.addEventListener("click", function(e) {
    this.classList.toggle("expand-drop-down");
  });
})