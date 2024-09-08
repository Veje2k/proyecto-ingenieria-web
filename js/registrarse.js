const { getJSON } = require("jquery");

document.addEventListener('DOMContentLoaded', function() {
    // URL del archivo JSON (puede ser una ruta local si está en el servidor)
    const jsonURL = 'path/to/regiones.json'; // Asegúrate de colocar la ruta correcta al archivo JSON

    const regionSelect = document.getElementById('region');
    const comunaSelect = document.getElementById('comuna');
    
    let regionesComunas = [];

    // Cargar las regiones y comunas desde el archivo JSON
    fetch()
        .then(response => response.json())
        .then(data => {
            regionesComunas = data;
            poblarRegiones(regionesComunas);
        })
        .catch(error => console.error('Error cargando el JSON:', error));

    // Poblar las regiones en el select de región
    function poblarRegiones(regionesComunas) {
        regionesComunas.forEach(region => {
            let option = document.createElement('option');
            option.value = region.nombre;
            option.textContent = region.nombre;
            regionSelect.appendChild(option);
        });
    }

    // Cambio en el select de región para cargar las comunas
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

    // Validación del formulario
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío por defecto
        let isValid = true;

        // Validar el nombre de usuario
        const usuario = document.getElementById('usuario');
        if (usuario.value.trim() === '') {
            usuario.classList.add('is-invalid');
            isValid = false;
        } else {
            usuario.classList.remove('is-invalid');
        }

        // Validar el RUT
        const rut = document.getElementById('rut');
        const rutPattern = /^\d{7,8}-[kK\d]$/; // Expresión regular simple para el RUT
        if (!rutPattern.test(rut.value.trim())) {
            rut.classList.add('is-invalid');
            isValid = false;
        } else {
            rut.classList.remove('is-invalid');
        }

        // Validar el correo electrónico
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // Validar la región
        const region = document.getElementById('region');
        if (region.value === '') {
            region.classList.add('is-invalid');
            isValid = false;
        } else {
            region.classList.remove('is-invalid');
        }

        // Validar la comuna
        const comuna = document.getElementById('comuna');
        if (comuna.value === '') {
            comuna.classList.add('is-invalid');
            isValid = false;
        } else {
            comuna.classList.remove('is-invalid');
        }

        // Validar la contraseña
        const contrasenya = document.getElementById('contrasenya');
        if (contrasenya.value.length < 8) {
            contrasenya.classList.add('is-invalid');
            isValid = false;
        } else {
            contrasenya.classList.remove('is-invalid');
        }

        // Validar la confirmación de contraseña
        const recontrasenya = document.getElementById('recontrasenya');
        if (recontrasenya.value !== contrasenya.value) {
            recontrasenya.classList.add('is-invalid');
            isValid = false;
        } else {
            recontrasenya.classList.remove('is-invalid');
        }

        // Validar aceptación de términos y condiciones
        const terminos = document.getElementById('terminos');
        if (!terminos.checked) {
            terminos.classList.add('is-invalid');
            isValid = false;
        } else {
            terminos.classList.remove('is-invalid');
        }

        // Si es válido, se puede enviar el formulario
        if (isValid) {
            alert('Formulario enviado correctamente');
            // Aquí podrías usar this.submit(); si quieres enviar el formulario realmente
        }
    });
});
