document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.form');
    form?.addEventListener('submit', function(event) {
		let error = false;
        let formLabels = document.querySelectorAll('.form__label');

        formLabels.forEach(function(label) {
            let inputField = label.querySelector('.form__field');
            let errorBox = label.querySelector('.form__error');

			if (!errorBox) {
                errorBox = document.createElement('div');
                errorBox.classList.add('form__error');
                label.appendChild(errorBox);
            }

            if (inputField.value.trim() === '') {
                errorBox.textContent = 'Проверьте корректность введенных данных';
                errorBox.classList.add('active');
                error = true;
            } else {
                errorBox.classList.remove('active');
                errorBox.textContent = '';
                errorBox.parentNode.removeChild(errorBox);
            }
        });

		if(error) {
			event.preventDefault();
		}
    });
});


let passwordFields = document.querySelectorAll('.form__password');
passwordFields?.forEach(function(passwordField) {
	passwordField.addEventListener('click', function() {
		let inputField = passwordField.previousElementSibling;
		if (inputField.getAttribute('type') === 'password') {
			inputField.setAttribute('type', 'text');
		} else {
			inputField.setAttribute('type', 'password');
		}
		passwordField.classList.toggle('active');
	});
});


let phoneMask = document.querySelector('.phone-mask');
phoneMask?.addEventListener('focus', function() {
    if (!this.value.startsWith('+7') || !this.value.startsWith('8')) {
        this.value = '+7';
    }
});
phoneMask?.addEventListener('input', function(event) {
    if (event.inputType != 'deleteContentBackward') {

        let value = this.value;
        value = value.replace(/\D/g, '');
        let length = value.length;
        if (length > 0) {
            let val1 = value.substring(0, 1);
            let val2 = value.substring(1, 4);
            let val3 = value.substring(4, 7);
            let val4 = value.substring(7, 9);
            let val5 = value.substring(9, 11);
            value = '+' + val1 + ' (' + val2 + ') ' + val3 + '' + val4 + '' + val5;
        }
        this.value = value;
    }
});


