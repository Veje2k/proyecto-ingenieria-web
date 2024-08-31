function initializeFormValidation() {
    'use strict';

    var forms = document.querySelectorAll('.needs-validation');

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
}

// Ejecutar la validación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeFormValidation);