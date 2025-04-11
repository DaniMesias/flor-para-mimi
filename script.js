const messages = [
  "Te amo, ten una florcita para ti mi amor 💜",
  "Te adoro mi preciosa Mimi 🥰",
  "Una flor para otra flor 🌸",
  "Te mereces esto y más ✨"
];

const flower = document.getElementById("flower");
const messageBox = document.getElementById("message");

flower.addEventListener("click", () => {
  const random = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[random];
});

// Opcional: fondo con partículas tech
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() * 0.5,
    dy: Math.random() * 0.5
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(179, 136, 235, 0.5)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(drawParticles);
}

drawParticles();
