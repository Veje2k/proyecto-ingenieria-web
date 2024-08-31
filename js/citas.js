function listarCitas(){
    const listaCitas = document.getElementById('citas-pendientes');


    var citas = [];

    $.getJSON('data/citas.json',function(datos){
        citas = datos;

        citas.forEach(cita => {
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
                                <button class="btn btn-danger pt-1 p-0" style="width: 35px;"><span class="material-symbols-outlined align-self-center">
                                    close
                                    </span></button>
                            </div>
                        </div>`;
            listaCitas.appendChild(item);

        });
        
    });


}

listarCitas();

