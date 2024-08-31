$(document).ready(function(){
    var regiones=[];
    $.getJSON('datos/regiones.json',function(datos){
        regiones=datos;
        datos.forEach(elemento => {
           $("#region").append(`<option>${elemento.nombre}</option>`);
        });
    });
   $("#region").on("change",function(e){
       $('#comuna').find('option').remove().end();
       var region = $(this).children("option:selected").val();
       if(region!==""){
           regiones.forEach(elemento=>{
               if(elemento.nombre==region){
                   $("#comuna").append("<option></option>");
                   elemento.comunas.forEach(comuna=>{
                       $("#comuna").append(`<option>${comuna}</option>`);
                   });
               }
           })
       }
   });
   $( ".needs-validation" ).validate( {
       errorClass: "is-invalid",
       validClass: "is-valid",
       rules: {
           usuario: {
               required: true,
           },
           rut:{
               required:true,
               validacionRUT:true
           },
           email: {
               required: true,
           },
           contrasenya:{
               required: true,
               pwcheck: true,
               minlength: 8
           },
           recontrasenya:{
               required: true,
               equalTo: contrasenya
           },
           comuna:{
               required:true
           },
           region:{
               required: true
           },
           terminos:{
               required: true
           }

       },
       messages:{
           usuario: {
               required: "El nombre de usuario es requerido"
           },
           rut:{
               required: "El rut es requerido",
               validacionRUT:"No tiene el formato de rut (sin puntos y sin espacios)"
           },
           email:{
               required: "El correo es requerido",
               email: "Ingrese un correo válido"
           },
           contrasenya:{
               required: "La contraseña es requerida",
               pwcheck: "La contraseña no tiene un formato válido",
               minlength: "Debe contener 8 caracteres"
           }, 
           recontrasenya:{
               required: "La confirmación de la contraseña es requerida",
               equalTo: "No son identicas"
           },
           region:{
               required:"La región es requerida"
           },
           comuna:{
               required: "La comuna es requerida"
           },
           terminos:{
               required: "Es requerido aceptar términos y condiciones"
           }
       }
   });
   $.validator.addMethod("pwcheck",
                       function(value, element) {
                           return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
   });
   $.validator.addMethod("validacionRUT",
                       function(value, element) {
                           return /^\d{7,8}-[k|K|\d]{1}$/.test(value);
   });
});
