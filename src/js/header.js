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
						//console.log(val);
					} else {
						item.classList.add('hide-accardeon');
					}
				});
				document.querySelectorAll('.menu__list').forEach(list => {
					let allVacancies = list.querySelectorAll('li').length;
					let allVacanciesHide = list.querySelectorAll('li.hide-accardeon').length;
					if (allVacancies === allVacanciesHide) {
						let courseBox = list.closest('.menu__course-box');
						if (courseBox) {
							courseBox.classList.remove('selected');
							let prevSibling = courseBox.previousElementSibling;
							if (prevSibling) {
								prevSibling.classList.remove('selected');
							}
						}
						list.closest('.menu__course').classList.add('hide-accardeon');
					} else {
						let courseBox = list.closest('.menu__course-box');
						if (courseBox) {
							courseBox.classList.add('selected');
							let prevSibling = courseBox.previousElementSibling;
							if (prevSibling) {
								prevSibling.classList.add('selected');
							}
						}
						list.closest('.menu__course').classList.remove('hide-accardeon');
					}
				});
			}
			showNotFound();
		});
	});
	

    function showNotFound() {
		let allAccardeonsActive = document.querySelectorAll('.menu__course:not(.hide-accardeon)').length;
		let notFoundElement = document.querySelector('.not-found');
		if (notFoundElement) { // Check if the element exists before accessing its style
			if (allAccardeonsActive === 0) {
				notFoundElement.style.display = 'block';
			} else {
				notFoundElement.style.display = 'none';
			}
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

document.addEventListener('DOMContentLoaded', function() {
    let headerProfile = document.querySelector('.header-profile');
    let headerProfileList = document.querySelector('.header-profile__list');

    headerProfile?.addEventListener('click', function(e) {
        e.stopPropagation();
        headerProfileList.classList.toggle("active");
    });

    document.addEventListener('click', function(e) {
        if (headerProfileList?.classList.contains('active') && !headerProfile.contains(e.target) && !headerProfileList.contains(e.target)) {
            headerProfileList?.classList.remove('active');
        }
    });

    headerProfileList?.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});



