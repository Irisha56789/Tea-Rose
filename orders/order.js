// Hover effect on projects
document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#f9f9f9';
    });

    project.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#fff';
    });
});
const burgerIcon = document.getElementById('burger-icon');
   const menu = document.querySelector('.menu');

   burgerIcon.addEventListener('click', () => {
       menu.classList.toggle('active'); // Добавляем класс для отображения меню
   });