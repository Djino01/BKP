document.addEventListener('DOMContentLoaded', function() {
    let lessenLike = document.querySelector('.lessen-like--js');
    let modalClosed = document.querySelector('.modal-closed--js');
    let modalForm = document.querySelector('.modal-form--js');
    let modal = document.querySelector('.modal');
	let currentClass = '';

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
		e.preventDefault();
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


