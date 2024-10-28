import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const SeleccionEspecialidad: React.FC = () => {
    const history = useHistory();

    return (   <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Inicio</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <div className="container mt-3 mb-3">
        <h1 className="text-center">Seleccione la especialidad</h1>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ms-2 me-2 g-4">
            <div className="col">
            <div className="card">
                <img src="images/vet.jpeg" className="card-img-top" alt="Veterinaria general" />
                <div className="card-body">
                <h5 className="card-title">Veterinaria general</h5>
                <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <button onClick={()=> history.push('/reservar-cita')} className="btn btn-primary">Reservar hora</button>
                </div>
            </div>
            </div>

            <div className="col">
            <div className="card">
                <img src="images/peluqueria.webp" className="card-img-top" alt="Peluquería" />
                <div className="card-body">
                <h5 className="card-title">Peluquería</h5>
                <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <button onClick={()=> history.push('/reservar-cita')} className="btn btn-primary">Reservar hora</button>
                </div>
            </div>
            </div>

            <div className="col">
            <div className="card">
                <img src="images/vet.jpeg" className="card-img-top" alt="Vacunas" />
                <div className="card-body">
                <h5 className="card-title">Vacunas</h5>
                <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                </p>
                <button onClick={()=> history.push('/reservar-cita')} className="btn btn-primary">Reservar hora</button>
                </div>
            </div>
            </div>

            <div className="col">
            <div className="card">
                <img src="images/vet.jpeg" className="card-img-top" alt="Consultas" />
                <div className="card-body">
                <h5 className="card-title">Consultas</h5>
                <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                </p>
                <button onClick={()=> history.push('/reservar-cita')} className="btn btn-primary">Reservar hora</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        </IonContent>
    </IonPage>
    )
};

export default SeleccionEspecialidad;