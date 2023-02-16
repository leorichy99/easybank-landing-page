const mobileLinks = document.querySelector(".nav-links");
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

menuIcon.addEventListener("click", (e) => {
  e.target.classList.remove("active"); // the active class is removed and added to the close icon
  closeBtn.classList.add("active");
  mobileNav.classList.add('show');
});

closeBtn.addEventListener("click", (e) => {
  e.target.classList.remove("active"); // the active class is removed and added to the menu icon
  menuIcon.classList.add("active");
  mobileNav.classList.remove('show');
});
