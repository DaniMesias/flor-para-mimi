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

// Estrellas (partículas blancas)
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars = [];
for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}
drawStars();
