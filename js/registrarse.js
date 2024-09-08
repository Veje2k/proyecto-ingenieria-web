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

    /* Función para validar el RUT con formato de puntos y guion (ej: 12.345.678-9) */
    function validarRUT(rut) {
        /* Expresión regular para validar formato RUT chileno con puntos y guion */
        const rutRegex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]$/;

        /* Validar formato correcto */
        if (!rutRegex.test(rut)) {
            return false;
        }

        /* Remover puntos y guion para realizar la validación del dígito verificador */
        let rutLimpio = rut.replace(/\./g, '').replace(/-/g, '');

        /* Separar cuerpo del dígito verificador */
        const cuerpo = rutLimpio.slice(0, -1);
        const dv = rutLimpio.slice(-1).toUpperCase();

        /* Validar el dígito verificador */
        let suma = 0;
        let multiplo = 2;

        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += multiplo * parseInt(cuerpo.charAt(i));
            multiplo = multiplo === 7 ? 2 : multiplo + 1;
        }

        const dvEsperado = 11 - (suma % 11);
        const dvFinal = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

        return dv === dvFinal;
    }
});