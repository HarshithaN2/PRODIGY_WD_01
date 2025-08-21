// Change navbar color on scroll
window.addEventListener("scroll", function() {
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Responsive Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
