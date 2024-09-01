

var citaSeleccionada = -1;

const listaCitas = document.getElementById('citas-pendientes');

var citas = [];

cargarCitas();

let btnCancelar = document.getElementById('btn-cancelar-cita');
btnCancelar.addEventListener('click', function(){
    borrarCita();
})



function actualizarLista(){

    listaCitas.innerHTML = `
                <li class="list-group-item" style="background-color: aliceblue; font-weight: bold;">
                    <div class="row align-items-center">
                        <div class="col-4">
                            Fecha
                        </div>
                        <div class="col-5">
                            Descripcion
                        </div>
                        
                    </div>
                </li>
    `;

    if (citas.length > 0){
        citas.forEach((cita, index) => {
            const item = document.createElement('li');
    
            item.className = 'list-group-item';
            item.innerHTML = `<div class="row align-items-center">
                            <div class="col-4">
                                ${cita.fecha}
                            </div>
                            <div class="col-5">
                                ${cita.descripcion}
                            </div>
                            <div class="col-3 text-center">
                                <button class="btn btn-danger pt-1 p-0" style="width: 35px;" data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="material-symbols-outlined align-self-center">
                                    close
                                    </span></button>
                            </div>
                        </div>`;
            listaCitas.appendChild(item);
    
            // Selecciona el botón dentro del item recién creado
            const boton = item.querySelector('button');
    
            // Agrega un evento 'click' al botón
            boton.addEventListener('click', function(event) {
                
                event.stopPropagation();
    
    
                citaSeleccionada = index;
                console.log('cita seleccionada: ', citaSeleccionada)
    
            });
        });
    }else{
        const item = document.createElement('li');
    
            item.className = 'list-group-item';
            item.textContent = 'No tienes citas pendientes.';
            listaCitas.appendChild(item);
    }

   

}


function cargarCitas(){



    $.getJSON('data/citas.json',function(datos){

        citas = datos;
        
        actualizarLista();
        
    });


}

function borrarCita(){
    citas.splice(citaSeleccionada, 1);
    actualizarLista(citas)

}



