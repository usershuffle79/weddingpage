
// ******************  Make Header Slide Away/Appear upon Scrolling  ******************

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {

  // Hide / show behavior
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }

  // Color change behavior
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollY = window.scrollY;
});


