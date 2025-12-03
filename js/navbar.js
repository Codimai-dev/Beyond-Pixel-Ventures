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

// Close the menu when a link is clicked (mobile UX)
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

// Highlight active section on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function highlightActiveSection() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100; // Offset for navbar height
    const sectionId = section.getAttribute("id");
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Listen for scroll events
window.addEventListener("scroll", highlightActiveSection);

// Run on page load
document.addEventListener("DOMContentLoaded", highlightActiveSection);