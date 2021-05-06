const toggle = document.querySelector(".toggle");
const showMenu = document.querySelector(".navContentsMobile");
const closeMenu = document.querySelector(".toggleClose");

const handleToggle = () => {};
toggle.addEventListener("click", () => {
  if (size.matches) {
    showMenu.style.display = "none";
    closeMenu.style.display = "none";
  } else {
    showMenu.style.display = "block";
    closeMenu.style.display = "block";
    toggle.style.display = "none";
  }
});

var size = window.matchMedia("(max-width: 980px)");

closeMenu.addEventListener("click", () => {
  toggle.style.display = "block";
  closeMenu.style.display = "none";
  showMenu.style.display = "none";
});
