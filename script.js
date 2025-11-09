document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  const navLinks = nav.querySelectorAll("a");
  const contactForm = document.getElementById("contact-form");

  // --- Mobile Menu Toggle ---
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  // Close the menu when a link is clicked (for better mobile UX)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // --- Simple Form Submission Handling (Placeholder) ---
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // In a real-world scenario, you would send this data to a server
      // or a form service (like EmailJS, Formspree, or a backend API).

      alert("Thank you for your inquiry! We will get back to you shortly.");
      contactForm.reset();
    });
  }
});
