// Navbar Toggle Script
const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");

  // Optional icon swap if using Font Awesome
  const icon = menuToggle.querySelector("i");
  if (icon) {
    if (icon.classList.contains("fa-bars")) {
      icon.classList.replace("fa-bars", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-bars");
    }
  }
});

// Optional: Close the menu when a link is clicked (mobile UX)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    menuToggle.classList.remove("open");

    const icon = menuToggle.querySelector("i");
    if (icon && icon.classList.contains("fa-times")) {
      icon.classList.replace("fa-times", "fa-bars");
    }
  });
});