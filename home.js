document.getElementById('learn-more').addEventListener('click', function() {
    if (confirm('Нажмите OK, чтобы перейти на страницу с информацией о нашем розарии')) {
        // Переход на страницу "about.html" в папке "about"
        window.location.href = 'about/about.html';
    }

});

// Плавная анимация кнопки при загрузке страницы
window.onload = function() {
    const button = document.getElementById('learn-more');
    button.style.opacity = '0';
    setTimeout(function() {
        button.style.transition = 'opacity 1.5s';
        button.style.opacity = '1';
    }, 500);
};

// Бургер-меню
console.log('Скрипт загружен');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});


