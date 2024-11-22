// Toggle Mobile Menu Visibility
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobileMenu");
  
    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  });