document.addEventListener('DOMContentLoaded', function() {
    let inputs = document.querySelectorAll('.inputfile');
    let fileName = '';
    Array.prototype.forEach.call(inputs, function(input) {
        let label = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function(e) {
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName) {
                label.querySelector('span').innerHTML = fileName;
            } else {
                label.innerHTML = labelVal;
            }
        });
        input.addEventListener('focus', function() { input.classList.add('has-focus'); });
        input.addEventListener('blur', function() { input.classList.remove('has-focus'); });
    });

    const form = document.querySelector('.form-document');
    const url = form?.getAttribute('action');
    const method = form?.getAttribute('method');
    const modalSuccess = document.querySelector('.upload-document-modal');
    const modalError = document.querySelector('.upload-document-modal-error');
    const modalErrorType = document.querySelector('.upload-document-modal-type');
    const uploadButton = document.querySelector('.btn-upload-js');

    form?.addEventListener('submit', function(e) {
        e.preventDefault();

        const typeDocument = document.querySelector('.type-document-js');
        if (typeDocument && typeDocument.value === '0') {
            showModal(modalErrorType);
            return;
        }

        const formData = new FormData(form);

        // Отключение кнопки загрузки
        uploadButton.disabled = true;

        fetch(url, {
            method: method,
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Success:', data);
            showModal(modalSuccess);

            // Сброс формы
            form.reset();

            // Сброс текста в label
            document.querySelector('.upload span').innerHTML = "выберите файл";
            document.querySelector('.select-title__value').innerHTML = "Тип документа";
            document.querySelector('.type-document-js').value = 0;
        })
        .catch(error => {
            console.error('Error:', error);
            showModal(modalError);
        })
        .finally(() => {
            // Включение кнопки загрузки
            uploadButton.disabled = false;
        });
    });

    function showModal(modalElement) {
        modalElement.classList.add('active');
        setTimeout(() => {
            modalElement.classList.remove('active');
        }, 3000);
    }
});
