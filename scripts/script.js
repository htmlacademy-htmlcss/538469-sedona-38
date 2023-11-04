const buttonSearch = document.querySelector(".find-hotel-link");
const modal = document.querySelector(".modal-container");
const modalButtonClose = modal.querySelector(".modal-search-close");
const buttonTooltip = modal.querySelector(".tooltip-toggle");
const tooltip = modal.querySelector(".tooltip-text");

buttonSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-container-show");

  modalButtonClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-container-show");
  })
});

buttonTooltip.addEventListener("click", function(evt) {
  evt.preventDefault();
  tooltip.classList.toggle("tooltip-text-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {

    if (tooltip.classList.contains("tooltip-text-show")) {
      evt.preventDefault();
      tooltip.classList.remove("tooltip-text-show");
      return;
    }

    if (modal.classList.contains("modal-container-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-container-show");
    }
  }
});
