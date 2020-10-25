const navToggle = document.querySelector(".burger-nav");
const links = document.querySelector(".main-nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
