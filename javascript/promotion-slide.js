/** This js file implements the automated slide show for the promotion section on the index/home page */

const slideBtns = document.querySelectorAll(".control__slide-btn");
const TOTAL_SLIDES = 3;

slideBtns.forEach((btn) => {
  btn.addEventListener("click", function(e) {
    if (this.dataset.selected === "false") {
      const currentSelectedBtn = document.querySelector(".control__slide-btn[data-selected='true']");
      const currentSlideNum = currentSelectedBtn.dataset.slideOrder;
      const newSlideNum = this.dataset.slideOrder;

      currentSelectedBtn.dataset.selected = "false";
      this.dataset.selected = "true";

      document.querySelector(`.slider-img-${newSlideNum}`).classList.add("selected-slider-img");

      setTimeout(() => {
        document.querySelector(`.slider-img-${currentSlideNum}`).classList.remove("selected-slider-img");
      }, 250);

    }
  })
})

const autoSplideSlide = () => {
  const currentSlideBtn = document.querySelector(".control__slide-btn[data-selected='true']");
  const currentSlideNum = currentSlideBtn.dataset.slideOrder;

  const nextSlideNum = currentSlideBtn.dataset.slideOrder % TOTAL_SLIDES + 1;
  const nextSlideBtn = document.querySelector(`.control__slide-btn[data-slide-order='${nextSlideNum}']`);

  const currentSlide = document.querySelector(`.slider-img-${currentSlideNum}`);
  const nextSlide = document.querySelector(`.slider-img-${nextSlideNum}`);

  currentSlideBtn.dataset.selected = "false";
  nextSlideBtn.dataset.selected = "true";

  nextSlide.classList.add("selected-slider-img");
  setTimeout(() => {
    currentSlide.classList.remove("selected-slider-img");
  }, 250);
}

setInterval(autoSplideSlide, 5000);



