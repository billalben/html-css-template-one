const navButton = document.querySelector(".links .icon");

navButton.addEventListener("click", function(e) {
  this.nextElementSibling.classList.toggle("open");
  e.stopPropagation();
})

document.addEventListener("click", function(event) {
  const isClickInsideLinks = event.target.closest('.links');
  
  if (!isClickInsideLinks) {
    navButton.nextElementSibling.classList.remove("open");
  }
});