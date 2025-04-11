const messages = [
  "Te amo, ten una florcita para ti mi amor 💜",
  "Te adoro mi preciosa Mimi 🥰",
  "Una flor para otra flor 🌸",
  "Te mereces esto y más ✨"
];

const scene = document.getElementById("scene");
const messageBox = document.getElementById("message");

// Generar múltiples flores
const numberOfFlowers = 9;
for (let i = 0; i < numberOfFlowers; i++) {
  const flowerContainer = document.createElement("div");
  flowerContainer.classList.add("flower-container");

  flowerContainer.innerHTML = `
    <svg viewBox="0 0 200 300" width="100" height="300">
      <!-- Pasto -->
      <rect x="0" y="280" width="200" height="20" fill="#4caf50" />
      
      <!-- Tallo -->
      <rect x="95" y="150" width="10" height="130" fill="#388e3c" rx="3"/>

      <!-- Peonía estilizada -->
      <g transform="translate(100, 140)">
        <circle r="30" fill="#cba0e8"/>
        <circle r="25" fill="#d1a9ec" cx="5" cy="-5"/>
        <circle r="20" fill="#ddaef4" cx="-5" cy="-5"/>
        <circle r="15" fill="#f1ceff" cx="0" cy="5"/>
      </g>
    </svg>
  `;
  scene.appendChild(flowerContainer);
}

// Mostrar mensaje al hacer clic en pantalla
document.body.addEventListener("click", () => {
  const random = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[random];
});

// Fondo de estrellas animado
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2 + 0.3,
    dx: Math.random() * 0.3 - 0.15,
    dy: Math.random() * 0.3 - 0.15
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();

    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
  requestAnimationFrame(drawStars);
}
drawStars();
