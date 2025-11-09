// =============================
// Script principal do portfólio
// =============================

// ----- Efeito no cabeçalho ao rolar -----
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ----- Botão "Voltar ao Topo" -----
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ----- Animação suave ao aparecer seções -----
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".card, .project-card, .services h2").forEach((el) => {
  observer.observe(el);
});

// ----- Partículas animadas sutis no fundo -----
const particlesContainer = document.getElementById("particles");
if (particlesContainer) {
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particlesContainer.appendChild(particle);
  }
}

// ----- Comentários animados nos projetos -----
const projectCards = document.querySelectorAll(".project-card");
const commentBox = document.getElementById("projectCommentBox");
const commentText = document.getElementById("projectCommentText");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const comment = card.getAttribute("data-comment");
    if (comment) {
      commentText.textContent = comment;
      commentBox.classList.add("active");
    }
  });

  card.addEventListener("mouseleave", () => {
    commentBox.classList.remove("active");
  });
});
