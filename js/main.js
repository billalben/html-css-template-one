// ===================  nav button ===================
const navToggleButton = document.querySelector(".links .icon");
const navLists = navToggleButton.nextElementSibling;
const navLinks = document.querySelectorAll(".links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLists.classList.remove("open");
  });
});

navToggleButton.addEventListener("click", function (e) {
  navLists.classList.toggle("open");
  e.stopPropagation();
});

document.addEventListener("click", function (event) {
  const clickedInsideNav = event.target.closest(".links");

  if (!clickedInsideNav) {
    navLists.classList.remove("open");
  }
});

// =================== Scroll to top ===================
const scrollUpButton = document.querySelector(".scroll-up");

window.onscroll = function () {
  this.scrollY >= 800
    ? scrollUpButton.classList.add("show")
    : scrollUpButton.classList.remove("show");
};

scrollUpButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
