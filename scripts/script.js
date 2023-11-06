const buttonSearch = document.querySelector(".find-hotel-link");
const modal = document.querySelector(".modal-container");
const modalButtonClose = modal.querySelector(".modal-search-close");

buttonSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-container-show");

  modalButtonClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-container-show");
  })
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {

    if (modal.classList.contains("modal-container-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-container-show");
    }
  }
});
