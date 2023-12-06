// ===================  nav button ===================
const navButton = document.querySelector(".links .icon");

navButton.addEventListener("click", function (e) {
  this.nextElementSibling.classList.toggle("open");
  e.stopPropagation();
});

document.addEventListener("click", function (event) {
  const isClickInsideLinks = event.target.closest(".links");

  if (!isClickInsideLinks) {
    navButton.nextElementSibling.classList.remove("open");
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
