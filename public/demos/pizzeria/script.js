const revealElements = document.querySelectorAll(".reveal");
const magneticButtons = document.querySelectorAll(".magnetic");
const tiltCards = document.querySelectorAll(".tilt-card");
const cursorGlow = document.getElementById("cursorGlow");
const particleCanvas = document.getElementById("particleCanvas");
const heroGradient = document.querySelector(".hero-gradient");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// Cursor glow effect for desktop.
window.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  if (cursorGlow) {
    cursorGlow.style.left = `${clientX}px`;
    cursorGlow.style.top = `${clientY}px`;
  }

  magneticButtons.forEach((button) => {
    const rect = button.getBoundingClientRect();
    const offsetX = clientX - (rect.left + rect.width / 2);
    const offsetY = clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(offsetX, offsetY);
    const radius = 150;

    if (distance < radius) {
      button.style.transform = `translate(${offsetX * 0.12}px, ${offsetY * 0.12}px)`;
    } else {
      button.style.transform = "translate(0, 0)";
    }
  });
});

window.addEventListener("mouseout", () => {
  magneticButtons.forEach((button) => {
    button.style.transform = "translate(0, 0)";
  });
});

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -12;
    const rotateY = (x / rect.width - 0.5) * 12;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
});

window.addEventListener("scroll", () => {
  if (!heroGradient) return;
  const move = window.scrollY * 0.16;
  heroGradient.style.transform = `translateY(${move}px)`;
});

const ctx = particleCanvas.getContext("2d");
let width = 0;
let height = 0;
let particles = [];

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  particleCanvas.width = width;
  particleCanvas.height = height;
}

function createParticles() {
  const count = Math.min(75, Math.floor(width / 20));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 1.9 + 0.5
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j += 1) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(255, 150, 109, ${0.16 - dist / 900})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});
