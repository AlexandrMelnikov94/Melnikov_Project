var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
// var toggleButton = document.querySelector(".toggle-button");
var toggleButton = document.querySelector(".header-burger");
var mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  mobileNav.getElementsByClassName('open')
  closeModal();
});

backdrop.addEventListener("click", function() {
  toggleButton.classList.remove("open");
  toggleButton.getElementsByClassName('open')
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeBurger);
}

function closeBurger() {
  if (modal) {
    modal.classList.remove('open');
  }
  toggleButton.classList.remove('open');
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}


toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
  toggleButton.classList.add("open");
});