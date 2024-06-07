document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.form');
    form?.addEventListener('submit', function(event) {
		let error = false;
		let passwordValue = '';
        let newPasswordValue = '';
        let formLabels = document.querySelectorAll('.form__label');

        formLabels.forEach(function(label) {
            let inputField = label.querySelector('.form__field');
            let errorBox = label.querySelector('.form__error');

			if (!inputField || inputField.disabled) {
                return;
            }

			if (!errorBox) {
                errorBox = document.createElement('div');
                errorBox.classList.add('form__error');
                label.appendChild(errorBox);
            }

            if (inputField.name === 'password') {
                passwordValue = inputField.value;
            }

			if (inputField.classList.contains('password-new') && inputField.value.trim() !== '') {
                newPasswordValue = inputField.value;
            }

            if (inputField.value.trim() === '') {
                if (!inputField.classList.contains('password-new') && !inputField.classList.contains('password-new-recovery')) {
                    errorBox.textContent = 'Проверьте корректность введенных данных';
                    errorBox.classList.add('active');
                    error = true;
                } else {
                    errorBox.classList.remove('active');
                    errorBox.textContent = '';
                    if (errorBox.parentNode) {
                        errorBox.parentNode.removeChild(errorBox);
                    }
                }
            } else if (inputField.name === 'password' && inputField.value.length < 6) {
                errorBox.textContent = 'Пароль должен содержать от 6 символов';
                errorBox.classList.add('active');
                error = true;
            } else if (inputField.name === 'password-repeat' && inputField.value !== passwordValue) {
                errorBox.textContent = 'Не совпадает с введенным паролем';
                errorBox.classList.add('active');
                error = true;
            } else if (inputField.classList.contains('password-new') && inputField.value.length < 6) {
                errorBox.textContent = 'Пароль должен содержать от 6 символов';
                errorBox.classList.add('active');
                error = true;
            } else if (inputField.classList.contains('password-new-recovery') && inputField.value !== newPasswordValue) {
                errorBox.textContent = 'Не совпадает с введенным паролем';
                errorBox.classList.add('active');
                error = true;
            } else {
                errorBox.classList.remove('active');
                errorBox.textContent = '';
                if (errorBox.parentNode) {
                    errorBox.parentNode.removeChild(errorBox);
                }
            }
        });

		if (newPasswordValue !== '' && form.querySelector('.password-new-recovery').value !== newPasswordValue) {
            let recoveryLabel = form.querySelector('.password-new-recovery').closest('.form__label');
            let recoveryErrorBox = recoveryLabel.querySelector('.form__error');
            if (!recoveryErrorBox) {
                recoveryErrorBox = document.createElement('div');
                recoveryErrorBox.classList.add('form__error');
                recoveryLabel.appendChild(recoveryErrorBox);
            }
            recoveryErrorBox.textContent = 'Не совпадает с введенным паролем';
            recoveryErrorBox.classList.add('active');
            error = true;
        }

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


