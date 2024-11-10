// Бургер-меню

console.log('Скрипт загружен');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

let score = 0;
let gameInProgress = false;

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameInProgress = true;
    startBtn.disabled = true;
    let gameDuration = 10000; // Игра длится 10 секунд
    let roseInterval = setInterval(createRose, 800); // Создавать новую розу каждые 0.8 секунд

    // Закончить игру через 10 секунд
    setTimeout(() => {
        clearInterval(roseInterval);
        gameInProgress = false;
        startBtn.disabled = false;
        alert(`Игра окончена! Ваш результат: ${score} очков.`);
    }, gameDuration);
}

function createRose() {
    if (!gameInProgress) return;

    const rose = document.createElement('div');
    rose.classList.add('rose');

    rose.style.top = `${Math.random() * (gameArea.clientHeight - 50)}px`;
    rose.style.left = `${Math.random() * (gameArea.clientWidth - 50)}px`;

    gameArea.appendChild(rose);

    // Добавляем движение к розе
    const moveX = Math.random() > 0.5 ? 1 : -1;
    const moveY = Math.random() > 0.5 ? 1 : -1;
    function moveRose() {
        if (!gameInProgress) return;

        const currentTop = parseFloat(rose.style.top);
        const currentLeft = parseFloat(rose.style.left);

        // Обновляем позицию
        rose.style.top = `${currentTop + moveY * 2}px`;
        rose.style.left = `${currentLeft + moveX * 2}px`;

        requestAnimationFrame(moveRose);
    }

    moveRose();

    rose.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        rose.remove();
    });

    setTimeout(() => {
        rose.remove();
    }, 1500);
}

// Запуск игры при нажатии на кнопку
startBtn.addEventListener('click', startGame);
