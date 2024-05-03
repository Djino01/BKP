document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu-search--js [name="category"]').forEach(input => {
        input.addEventListener('keyup', function() {
            let val = this.value.toLowerCase();
            if (val === '') {
                document.querySelectorAll('.menu__course-box.selected').forEach(item => item.classList.remove('selected'));
                document.querySelectorAll('.menu__course').forEach(acc => acc.classList.remove('hide-accardeon'));
            } else {
                document.querySelectorAll('[data-name-menu]').forEach(item => {
                    if (item.getAttribute('data-name-menu').toLowerCase().includes(val)) {
                        item.classList.remove('hide-accardeon');
                        console.log(val);
                    } else {
                        item.classList.add('hide-accardeon');
                    }
                });
                document.querySelectorAll('.menu__list').forEach(list => {
                    let allVacancies = list.querySelectorAll('li').length;
                    let allVacanciesHide = list.querySelectorAll('li.hide-accardeon').length;
                    if (allVacancies === allVacanciesHide) {
                        list.closest('.menu__course-box').classList.remove('selected');
                        list.closest('.menu__course-box').previousElementSibling.classList.remove('selected');
                        list.closest('.menu__course').classList.add('hide-accardeon');
                    } else {
                        list.closest('.menu__course-box').classList.add('selected');
                        list.closest('.menu__course-box').previousElementSibling.classList.add('selected');
                        list.closest('.menu__course').classList.remove('hide-accardeon');
                    }
                });
            }
            showNotFound();
        });
    });

    // Function to show/hide "not found" message
    function showNotFound() {
        let allAccardeonsActive = document.querySelectorAll('.menu__course:not(.hide-accardeon)').length;
        let notFoundElement = document.querySelector('.not-found');
        if (allAccardeonsActive === 0) {
            notFoundElement.style.display = 'block';
        } else {
            notFoundElement.style.display = 'none';
        }
    }
});


// Изначальная функция клика, управляющая видимостью элементов
document.querySelectorAll('.menu__course-top').forEach(item => {
    item.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.classList.toggle('active');
        if (parent.classList.contains('active')) {
            parent.nextElementSibling.style.display = 'block';
        } else {
            document.querySelectorAll('.menu__course').forEach(box => {
                box.classList.remove('active');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let headerBurger = document.querySelector('.header__burger');
    let menu = document.querySelector('.menu');

    headerBurger?.addEventListener('click', function(e) {
		this.classList.toggle("active");
		menu.classList.toggle("active");
    });

});