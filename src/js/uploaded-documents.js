document.querySelectorAll('.uploaded-documents__delete').forEach(button => {
    button.addEventListener('click', function(event) {
        const parentItem = event.target.closest('.uploaded-documents__item');
        if (parentItem) {
            const action = button.getAttribute('data-action');
            const id = button.getAttribute('data-id');

            // AJAX запрос
            const xhr = new XMLHttpRequest();
            xhr.open('POST', action, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    // Успешное удаление
                    parentItem.remove();
                    const uploadedDocumentsContainer = document.querySelector('.uploaded-documents');
                    const remainingItems = uploadedDocumentsContainer.querySelectorAll('.uploaded-documents__item');
                    if (remainingItems.length === 0) {
                        uploadedDocumentsContainer.style.display = 'none';
                    }
                } else {
                    console.error('Ошибка при удалении документа');
                }
            };
            xhr.onerror = function() {
                console.error('Ошибка сети');
            };
            xhr.send(`id=${id}`);
        }
    });
});
