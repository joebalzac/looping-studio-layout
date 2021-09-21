const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("elem-hide");
});
