/** This js file determines which product description/content to show on the product detail page. */

const contentSelections = document.querySelectorAll(".selection__content");

/* this event listener determines which product description/content to show on the product detail page. 
The user can click on either 'PRODUCT DETAIL' or 'DELIVERY' for more info */
contentSelections.forEach((content) => {
  content.addEventListener("click", (e) => {
    const selectedContent = e.target.dataset.content;
    document.querySelector(".selection__content[data-selected='true']").dataset.selected = "false";
    e.target.dataset.selected = "true";
  
    document.querySelector(".content__text[data-display='true']").dataset.display = "false";
    document.querySelector(`.content__text[data-content='${selectedContent}']`).dataset.display = "true";
  })
})