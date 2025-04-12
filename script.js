// Crear estrellas
function createStars() {
    const container = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.background = '#fff';
        star.style.borderRadius = '50%';
        container.appendChild(star);
    }
}

// Crear flores
function createFlowers() {
    const container = document.getElementById('flowersContainer');
    const messages = [
        "Te amo Mimi <3",
        "Eres lo mejor de mi vida",
        "Te mereces mucho más",
        "Te adoro preciosa"
    ];

    for (let i = 0; i < 9; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = `${10 + (i * 9)}%`;
        
        // Crear tallo
        const stem = document.createElement('div');
        stem.className = 'stem';
        stem.style.height = `${150 + Math.random() * 50}px`;
        stem.style.left = '50%';
        
        // Crear pétalos
        for (let j = 0; j < 25; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.transform = `
                rotate(${j * 15}deg)
                translateY(${-j * 3}px)
                scale(${0.8 + (j * 0.02)})
            `;
            flower.appendChild(petal);
        }
        
        flower.appendChild(stem);
        container.appendChild(flower);
    }

    // Manejar clicks
    document.body.addEventListener('click', () => {
        const message = messages[Math.floor(Math.random() * messages.length)];
        const messageElement = document.getElementById('messageContainer');
        messageElement.textContent = message;
        messageElement.style.animation = 'none';
        void messageElement.offsetWidth; // Reiniciar animación
        messageElement.style.animation = 'fade 3s';
    });
}

// Inicialización
window.onload = () => {
    createStars();
    createFlowers();
    
    // Efecto de brisa aleatoria
    setInterval(() => {
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach(flower => {
            flower.style.animationDuration = `${3 + Math.random() * 3}s`;
        });
    }, 5000);
};
