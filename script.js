// Automatic Typing Home section

var typed = new Typed("#element", {
  strings: ["Website Developer", "Full-Stack Website Developer"],
  typeSpeed: 70,
});

// Nav-Link Color Shift Onscroll & Onclick

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 200; // adjust the offset as needed
  sections.forEach((section, index) => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});

// Navbar Hide After Clicking On Menu

// Get all navbar links
const navbarLinks = document.querySelectorAll(".nav-link");

// Add event listener to each link
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the navbar
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});
