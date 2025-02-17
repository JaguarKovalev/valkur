// script.js
function showDiv(divId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (content.id === divId) {
            content.classList.remove('hidden');
            content.classList.add('visible');
            content.style.display = 'block'; // Показываем блок
        } else {
            content.classList.remove('visible');
            content.classList.add('hidden');
            setTimeout(() => { content.style.display = 'none'; }, 500); // Скрываем с задержкой
        }
    });
}