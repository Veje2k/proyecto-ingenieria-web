const datepicker = document.getElementById('fecha');

const fechaActual = new Date().toISOString().split('T')[0];

console.log(fechaActual);

datepicker.setAttribute('min', fechaActual);
