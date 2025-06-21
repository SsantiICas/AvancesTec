// Menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // solo una vez
    }
  });
}, {
  threshold: 0.1
});

// Aplicar a elementos visibles
document.querySelectorAll(".feature-card, .hero-content").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
