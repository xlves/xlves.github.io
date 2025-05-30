document.addEventListener('DOMContentLoaded', function() {
    // Имитация загрузки (в реальном проекте используйте window.onload)
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        const content = document.querySelector('.content');
        
        // Плавно скрываем лоадер
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        
        // Показываем контент
        content.classList.remove('hidden');
        content.classList.add('visible');
        
        // Удаляем лоадер из DOM после анимации
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1200); // Время задержки для демонстрации
});


// Магнитный курсор
const cursor = document.createElement('div');
cursor.classList.add('magnetic-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a, button, .portfolio-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});