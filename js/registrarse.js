document.addEventListener('DOMContentLoaded', function() {
    const jsonURL = 'data/regiones.json';
    const form = document.getElementById('registrationForm');
    const regionSelect = document.getElementById('region');
    const comunaSelect = document.getElementById('comuna');

    let regionesComunas = [];

    /*Cargar las regiones y comunas desde el archivo JSON*/
    fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            regionesComunas = data;
            poblarRegiones(regionesComunas);
        })
        .catch(error => console.error('Error cargando el JSON:', error));

    /*Poblar las regiones en el select de región*/
    function poblarRegiones(regionesComunas) {
        regionesComunas.forEach(region => {
            let option = document.createElement('option');
            option.value = region.nombre;
            option.textContent = region.nombre;
            regionSelect.appendChild(option);
        });
    }

    /* Cambio en el select de región para cargar las comunas*/
    regionSelect.addEventListener('change', function() {
        const selectedRegion = this.value;
        comunaSelect.innerHTML = '<option value="">Selecciona una comuna</option>'; // Resetear el select de comuna

        if (selectedRegion !== '') {
            const region = regionesComunas.find(r => r.nombre === selectedRegion);
            if (region) {
                region.comunas.forEach(function(comuna) {
                    let option = document.createElement('option');
                    option.value = comuna;
                    option.textContent = comuna;
                    comunaSelect.appendChild(option);
                });
            }
        }
    });

    /*Validación del formulario*/
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        /*Validación de usuario*/
        const usuario = document.getElementById('usuario');
        if (usuario.value.trim() === '') {
            usuario.classList.add('is-invalid');
        } else {
            usuario.classList.remove('is-invalid');
        }

        /* Validación de RUT (puedes ajustar la lógica según las reglas de tu país)*/
        const rut = document.getElementById('rut');
        if (!validarRUT(rut.value)) {
            rut.classList.add('is-invalid');
        } else {
            rut.classList.remove('is-invalid');
        }

        /*Validación de email*/
        const email = document.getElementById('email');
        if (!email.checkValidity()) {
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }

        /* Validación de región y comuna*/
        const region = document.getElementById('region');
        const comuna = document.getElementById('comuna');
        if (region.value === '') {
            region.classList.add('is-invalid');
        } else {
            region.classList.remove('is-invalid');
        }
        if (comuna.value === '') {
            comuna.classList.add('is-invalid');
        } else {
            comuna.classList.remove('is-invalid');
        }

        /* Validación de contraseñas*/
        const contrasenya = document.getElementById('contrasenya');
        const recontrasenya = document.getElementById('recontrasenya');
        if (contrasenya.value.trim() === '') {
            contrasenya.classList.add('is-invalid');
        } else {
            contrasenya.classList.remove('is-invalid');
        }

        if (recontrasenya.value.trim() === '' || recontrasenya.value !== contrasenya.value) {
            recontrasenya.classList.add('is-invalid');
        } else {
            recontrasenya.classList.remove('is-invalid');
        }

        /* Validación de términos y condiciones*/
        const terminos = document.getElementById('terminos');
        if (!terminos.checked) {
            terminos.classList.add('is-invalid');
        } else {
            terminos.classList.remove('is-invalid');
        }

        /* Verifica si el formulario es válido antes de enviarlo*/
        if (form.checkValidity()) {
            alert('Formulario enviado correctamente');
            form.submit();
        }
    });

    /* Función para validar el RUT (puedes reemplazarla con una lógica más avanzada)*/
    function validarRUT(rut) {
        /* Simple validación de longitud y formato (puedes ajustar según sea necesario)*/
        return rut.length >= 7 && /^[0-9]+-[0-9kK]$/.test(rut);
    }
});
