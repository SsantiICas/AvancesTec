// Modo Oscuro
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙 Modo oscuro";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.top = "10px";
  toggleBtn.style.right = "10px";
  toggleBtn.style.zIndex = "1000";
  toggleBtn.style.padding = "10px";
  toggleBtn.style.borderRadius = "8px";
  toggleBtn.style.border = "none";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.backgroundColor = "#333";
  toggleBtn.style.color = "#fff";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Scroll animations
  const faders = document.querySelectorAll("h2, h3, p, ul, ol, img, table, form, video");

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  faders.forEach(el => {
    el.classList.add("hidden");
    appearOnScroll.observe(el);
  });

  // Temporizador de interacción
  setTimeout(() => {
    alert("¿Te está gustando la página? ¡Dale play a alguna canción!");
  }, 60000);

  // Validación del formulario
  const form = document.querySelector("form");
  const textarea = document.getElementById("mensaje");

  form.addEventListener("submit", (e) => {
    if (textarea.value.trim().length < 5) {
      e.preventDefault();
      alert("Por favor escribe un mensaje de al menos 5 caracteres 🙏");
    }
  });

  // Reproductor aleatorio (puedes agregar más si deseas)
  const tracks = [
    "https://www.youtube.com/watch?v=TpSmsr2y_Oo&list=PLJ-X0Vxby2aGVs5ajShCDRpeVCI_onaaL",
    "https://www.youtube.com/watch?v=tWLo7DTrEy0&list=PLJ-X0Vxby2aGVs5ajShCDRpeVCI_onaaL&index=64"
  ];
  const audio = document.createElement("audio");
  audio.src = tracks[Math.floor(Math.random() * tracks.length)];
  audio.autoplay = true;
  audio.loop = true;
  audio.volume = 0.2;
  document.body.appendChild(audio);
});
