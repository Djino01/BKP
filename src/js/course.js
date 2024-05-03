// Изначальная функция клика, управляющая видимостью элементов
document.querySelectorAll('.course__top').forEach(item => {
    item.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.classList.toggle('active');
        if (parent.classList.contains('active')) {
            parent.nextElementSibling.style.display = 'block';
        } else {
            document.querySelectorAll('.course').forEach(box => {
                box.classList.remove('active');
            });
        }
    });
});

// Функция для обработки клика вне активного .course
document.addEventListener('mouseup', function(e) {
    const activeBox = document.querySelector('.course.active');
    if (activeBox && !activeBox.contains(e.target)) {
        activeBox.classList.remove('active');
    }
});

function updateAllProgress() {
	const progresses = document.querySelectorAll('.progress');
	progresses?.forEach(progress => {
		const percent = parseInt(progress.getAttribute('data-percent'), 10);
		const path = progress.querySelector('path');
		const circleLength = 339.292;
		const offset = circleLength - (percent / 100) * circleLength;
		path.style.strokeDashoffset = offset;
	});
}
document.addEventListener('DOMContentLoaded', updateAllProgress);

// Изначальная функция клика, управляющая видимостью элементов
document.querySelectorAll('.course-programm__top').forEach(item => {
    item.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.classList.toggle('active');
        if (parent.classList.contains('active')) {
            parent.nextElementSibling.style.display = 'block';
        } else {
            document.querySelectorAll('.course-programm__accordion').forEach(box => {
                box.classList.remove('active');
            });
        }
    });
});

// Функция для обработки клика вне активного .course-programm__accordion
document.addEventListener('mouseup', function(e) {
    const activeBox = document.querySelector('.course-programm__accordion.active');
    if (activeBox && !activeBox.contains(e.target)) {
        activeBox.classList.remove('active');
    }
});
