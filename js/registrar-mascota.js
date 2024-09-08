document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroMascota');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Validación del nombre de mascota
        const nombre = document.getElementById('usuario');
        if (nombre.value.trim() === '') {
            nombre.classList.add('is-invalid');
        } else {
            nombre.classList.remove('is-invalid');
        }

        // Validación del tipo de animal
        const tipo = document.getElementById('tipo');
        if (tipo.value.trim() === '') {
            tipo.classList.add('is-invalid');
        } else {
            tipo.classList.remove('is-invalid');
        }

        // Validación de la raza
        const raza = document.getElementById('raza');
        if (raza.value.trim() === '') {
            raza.classList.add('is-invalid');
        } else {
            raza.classList.remove('is-invalid');
        }

        // Validación de la edad (solo números)
        const edad = document.getElementById('edad');
        if (!/^\d+$/.test(edad.value)) {
            edad.classList.add('is-invalid');
        } else {
            edad.classList.remove('is-invalid');
        }

        // Validación del sexo
        const sexo = document.getElementById('sexo');
        if (sexo.value === '') {
            sexo.classList.add('is-invalid');
        } else {
            sexo.classList.remove('is-invalid');
        }

        // Validación del peso
        const peso = document.getElementById('peso');
        if (peso.value.trim() === '') {
            peso.classList.add('is-invalid');
        } else {
            peso.classList.remove('is-invalid');
        }

        // Verifica si el formulario es válido antes de enviarlo
        if (form.checkValidity()) {
            alert('Formulario enviado correctamente');
            form.submit();
        } else {
            form.classList.add('was-validated');
        }
    });
});
