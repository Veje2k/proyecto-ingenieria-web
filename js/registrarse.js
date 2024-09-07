document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario si hay errores de validación
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const rut = document.getElementById('rut').value.trim();
    const email = document.getElementById('email').value.trim();
    const region = document.getElementById('region').value.trim();
    const comuna = document.getElementById('comuna').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Variables de control para errores
    let hasError = false;

    // Limpiar mensajes de error previos
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Validación del nombre
    if (nombre === '') {
        document.getElementById('nombreError').textContent = 'El nombre es obligatorio.';
        hasError = true;
    }

    // Validación del RUT (simple validación de formato básico)
    if (!/^\d{7,8}-[kK\d]$/.test(rut)) {
        document.getElementById('rutError').textContent = 'RUT inválido. Debe tener el formato XXXXXXXX-X.';
        hasError = true;
    }

    // Validación del correo electrónico
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'El correo electrónico no es válido.';
        hasError = true;
    }

    // Validación de la región
    if (region === '') {
        document.getElementById('regionError').textContent = 'La región es obligatoria.';
        hasError = true;
    }

    // Validación de la comuna
    if (comuna === '') {
        document.getElementById('comunaError').textContent = 'La comuna es obligatoria.';
        hasError = true;
    }

    // Validación de la contraseña
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 8 caracteres.';
        hasError = true;
    }

    // Validación de la confirmación de contraseña
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Las contraseñas no coinciden.';
        hasError = true;
    }

    // Si no hay errores, enviar el formulario
    if (!hasError) {
        // Aquí puedes hacer el envío del formulario
        alert('Formulario enviado correctamente');
        // this.submit(); // Si quieres enviar el formulario
    }
});