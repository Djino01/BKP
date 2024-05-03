// Изначальная функция клика, управляющая видимостью элементов
document.querySelectorAll('.faq-accordion__top').forEach(item => {
    item.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.classList.toggle('active');
        if (parent.classList.contains('active')) {
            parent.nextElementSibling.style.display = 'block';
        } else {
            document.querySelectorAll('.faq-accordion').forEach(box => {
                box.classList.remove('active');
            });
        }
    });
});

// Функция для обработки клика вне активного .faq-accordion
document.addEventListener('mouseup', function(e) {
    const activeBox = document.querySelector('.faq-accordion.active');
    if (activeBox && !activeBox.contains(e.target)) {
        activeBox.classList.remove('active');
    }
});
