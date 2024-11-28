import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const SeleccionEspecialidad: React.FC = () => {
    const history = useHistory();

    const especialidades = [
        {
          id: 1,
          title: 'Veterinaria general',
          image: 'images/vet.jpeg',
          description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        },
        {
          id: 2,
          title: 'Peluquería',
          image: 'pages/img/peluqueria.webp',
          description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        },
        {
          id: 3,
          title: 'Vacunas',
          image: 'images/vet.jpeg',
          description: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
        },
        {
          id: 4,
          title: 'Consultas',
          image: 'images/vet.jpeg',
          description: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
        },
      ];
    
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Seleccionar Especialidad</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <div className="container mt-3 mb-3">
              <h1 className="text-center">Seleccione la especialidad</h1>
    
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ms-2 me-2 g-4">
                {especialidades.map((especialidad) => (
                  <div className="col" key={especialidad.id}>
                    <IonCard>
                        <IonImg src={especialidad.image}></IonImg>
                      <IonCardHeader>
                        <IonCardTitle>{especialidad.title}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <p className="card-text">{especialidad.description}</p>
                        <IonButton 
                          expand="full" 
                          onClick={() => history.push('/reservar-cita', {especialidad})}
                        >
                          Reservar hora
                        </IonButton>
                      </IonCardContent>
                    </IonCard>
                  </div>
                ))}
              </div>
            </div>
          </IonContent>
        </IonPage>
      );
};

export default SeleccionEspecialidad;