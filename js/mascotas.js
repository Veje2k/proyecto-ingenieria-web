
const listaMascotas = document.getElementById('lista-mascotas');
var mascotas = [];


$.getJSON('data/mascotas.json',function(datos){

    mascotas = datos;
    
    actualizarLista();
    
});

function actualizarLista(){

    listaMascotas.innerHTML = '';

    if (mascotas.length > 0){
        mascotas.forEach((mascota, index) => {
            const item = document.createElement('li');
    
            item.className = 'list-group-item';
            item.innerHTML = `<div class="row align-items-center">
                        <div class="col-2">
                        <img src="images/perfil-perro.jpg">
                        </div>
                        <div class="col-4">

                            <div class="d-flex align-items-center">
                                <div><h5>Nombre: </h5></div>
                                <div class="ms-3"><h6>${mascota.nombre_mascota}</h6></div>

                            </div>
                            <div class="d-flex align-items-center">
                                <div><h5>Raza: </h5></div>
                                <div class="ms-3"><h6>${mascota.raza}</h6></div>

                            </div>

                            <div class="d-flex align-items-center">
                                <div><h5>Edad: </h5></div>
                                <div class="ms-3"><h6>${mascota.edad}</h6></div>

                            </div>

                            <div class="d-flex align-items-center">
                                <div><h5>Sexo: </h5></div>
                                <div class="ms-3"><h6>${mascota.sexo}</h6></div>

                            </div>
                            
                        </div>
                        <div class="col-5" style="font-size: 20px;">
                            ${mascota.peso}
                        </div>

                    </div>`;
            listaMascotas.appendChild(item);
    

        });
    }else{
        const item = document.createElement('li');
    
            item.className = 'list-group-item';
            item.textContent = 'No tienes mascotas registradas.';
            listaMascotas.appendChild(item);
    }

   

}
