document.addEventListener('DOMContentLoaded', function() {
    let mdalBtn = document.querySelectorAll('.modal--js');
    let modalClosed = document.querySelectorAll('.modal-closed--js');
    let modalForm = document.querySelector('.modal-form--js');
    let modal = document.querySelector('.modal');
    let lessenLike = document.querySelector('.lessen__like');
	let currentClass = '';

	const form = document.querySelector('.modal-form');
	const url = form?.getAttribute('action');
	const method = form?.getAttribute('method');

	mdalBtn.forEach(function (btn) {
		btn.addEventListener('click', function(event) {
			let targetElement = event.target.closest('.modal--js');
			if (targetElement) {
				var modalName = targetElement.getAttribute('data-modal');
				if (modalName) {
					var modalElement = document.querySelector(`.${modalName}`);
					if (modalElement) {
						modalElement.classList.add("active");
					} else {
						console.error(`Элемент с селектором .${modalName} не найден.`);
					}
				} else {
					console.error('Атрибут data-modal не найден.');
				}
			} else {
				console.error('Целевой элемент с классом modal--js не найден.');
			}
		});
	});

	modalClosed?.forEach(function (closed) {
		closed?.addEventListener('click', function(e) {
			document.querySelectorAll('.modal').forEach(function (el) {
				el.classList.remove('active');
			});
		});
    });

	document.addEventListener('mouseup', function(e) {
		const modalBodies = document.querySelectorAll('.modal__body');
		modalBodies.forEach(modalBody => {
			if (!modalBody.contains(e.target)) {
				const modal = modalBody.closest('.modal');
				if (modal) {
					modal.classList.remove("active");
				}
			}
		});
	});
	
	modalForm?.addEventListener('click', function(e) {
		e.preventDefault();

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


