body {
    margin: 0;
    overflow: hidden;
    background: #000;
    cursor: pointer;
}

.sky {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    animation: twinkle 3s infinite;
}

.grass {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 120px;
    background: linear-gradient(to top, 
        #0d3b0d 20%,
        #1a5a1a 60%,
        #2d5a2d 90%);
    box-shadow: inset 0 10px 15px rgba(0,30,0,0.5);
}

.flower {
    position: absolute;
    bottom: 120px;
    animation: sway 4s ease-in-out infinite;
}

.petal {
    position: absolute;
    width: 25px;
    height: 35px;
    background: linear-gradient(145deg, 
        #e6b3ff 0%, 
        #cc99ff 30%, 
        #b366ff 70%);
    border-radius: 50%;
    opacity: 0.9;
    transform-origin: bottom center;
}

.stem {
    position: absolute;
    width: 6px;
    background: linear-gradient(to right, 
        #2d5a2d, 
        #3d7a3d 30%, 
        #2d5a2d);
    transform-origin: bottom;
}

.message-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Arial', sans-serif;
    font-size: 2.5em;
    color: #ff99cc;
    text-shadow: 0 0 15px #ff66b3;
    opacity: 0;
    pointer-events: none;
    animation: fade 3s;
}

@keyframes sway {
    0%, 100% { transform: translateX(0) rotate(-2deg); }
    50% { transform: translateX(15px) rotate(2deg); }
}

@keyframes twinkle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.3; }
}

@keyframes fade {
    0% { opacity: 0; transform: translate(-50%, -30%); }
    20% { opacity: 1; transform: translate(-50%, -50%); }
    80% { opacity: 1; transform: translate(-50%, -50%); }
    100% { opacity: 0; transform: translate(-50%, -70%); }
}
