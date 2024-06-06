document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.select').forEach(function(select) {
        select.addEventListener('click', function(event) {
            if (!select.classList.contains('disabled')) {
                document.querySelectorAll('.select').forEach(function(otherSelect) {
                    if (otherSelect !== select) {
                        otherSelect.classList.remove('active');
                        otherSelect.querySelector('.select-options').style.display = 'none';
                    }
                });
                select.classList.toggle('active');
                const options = select.querySelector('.select-options');
                options.style.display = (options.style.display === 'block') ? 'none' : 'block';
            }
        });
    });

    document.querySelectorAll('.select-options__value').forEach(function(option) {
        option.addEventListener('click', function() {
            document.querySelectorAll('.select-options__value').forEach(function(otherOption) {
                otherOption.classList.remove('active');
            });
            const select = option.closest('.select');
            select.querySelector('.select-title__value').innerHTML = option.innerHTML;
            option.classList.add('active');
            const input = select.querySelector('input');
            const value = option.dataset.value.trim();
            input.value = value !== '' ? value : option.innerHTML;
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.select')) {
            document.querySelectorAll('.select').forEach(function(select) {
                select.classList.remove('active');
                select.querySelector('.select-options').style.display = 'none';
            });
        }
    });
});
