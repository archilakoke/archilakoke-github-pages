let car1 = document.getElementById('car1');
let car2 = document.getElementById('car2');
let timerDisplay = document.getElementById('timer');
let gameInterval;
let time = 0;
let gameRunning = false;

// Función para iniciar la carrera
function startGame() {
    if (gameRunning) return;

    gameRunning = true;
    time = 0;
    timerDisplay.textContent = time;
    car1.style.transform = 'translateY(0)';
    car2.style.transform = 'translateY(0)';

    // Iniciar cronómetro
    gameInterval = setInterval(() => {
        time++;
        timerDisplay.textContent = time;
    }, 1000);

    // Mover los carros hacia arriba en intervalos
    let moveInterval = setInterval(() => {
        let car1Pos = parseInt(window.getComputedStyle(car1).bottom);
        let car2Pos = parseInt(window.getComputedStyle(car2).bottom);

        if (car1Pos >= 500 || car2Pos >= 500) {
            clearInterval(moveInterval);
            clearInterval(gameInterval);
            alert("¡Carrera terminada!");
            gameRunning = false;
        }

        car1.style.transform = `translateY(${car1Pos + 5}px)`;
        car2.style.transform = `translateY(${car2Pos + 5}px)`;
    }, 50);
}
