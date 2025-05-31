document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Auto carousel scrolling effect
  const carousel = document.querySelector(".carousel");
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 1;
    if (scrollAmount >= carousel.scrollWidth / 2) {
      scrollAmount = 0;
    }
    carousel.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});
