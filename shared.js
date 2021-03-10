var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".main-burger");
var mobileNav = document.querySelector(".mobile-nav");
// var body = document.querySelector("body")

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  mobileNav.getElementsByClassName('open')
  toggleButton.classList.remove("open");
  toggleButton.getElementsByClassName('open')
  // body.classList.remove("lock")
  // body.getElementsByClassName("lock")
  closeMenu();
});

function closeMenu() {
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
  toggleButton.classList.add("open");
});