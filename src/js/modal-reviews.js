document.addEventListener('DOMContentLoaded', function() {
    let lessenLike = document.querySelector('.lessen-like--js');
    let modalClosed = document.querySelector('.modal-closed--js');
    let modalForm = document.querySelector('.modal-form--js');
    let modal = document.querySelector('.modal');
	let currentClass = '';

	const form = document.querySelector('.modal-form');
	const url = form?.getAttribute('action');
	const method = form?.getAttribute('method');

    lessenLike?.addEventListener('click', function(e) {
		modal.classList.add("active");
    });

	modalClosed?.addEventListener('click', function(e) {
		modal.classList.remove("active");
    });

	document.addEventListener('mouseup', function(e) {
		const activeBox = document.querySelector('.modal__body');
		if (activeBox && !activeBox?.contains(e.target)) {
			modal.classList.remove("active");
		}
	});
	
	modalForm?.addEventListener('click', function(e) {

		function serializeForm(formElement) {
			const formData = new FormData(formElement);
			const pairs = {};
			for (const [key, value] of formData.entries()) {
				pairs[key] = value;
			}
			return new URLSearchParams(pairs).toString();
		}
		const data = serializeForm(form);
		fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: data
		})
		.then(response => response.text())
		.then(data => {
			console.log('Success:', data);
		})
		.catch(error => {
			console.error('Error:', error);
		});

		modal.classList.remove("active");
		const activeRadio = document.querySelector('input[name="reviews"]:checked');
		if (activeRadio) {
			const value = activeRadio.value;
			if (currentClass) {
				lessenLike.classList.remove(currentClass);
			}
			lessenLike.classList.add(value);
			currentClass = value;
		}
    });

});


