const toggle = document.querySelector(".toggle");
const showMenu = document.querySelector(".navContentsMobile");
const closeMenu = document.querySelector(".toggleClose");

const handleToggle = () => {};
toggle.addEventListener("click", () => {
  showMenu.style.display = "block";
  closeMenu.style.display = "block";
  toggle.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  toggle.style.display = "block";
  closeMenu.style.display = "none";
  showMenu.style.display = "none";
});
