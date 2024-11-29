import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { ServiceService } from '../services/service-service'; // Asegúrate de importar el servicio

const SeleccionEspecialidad: React.FC = () => {
  const [especialidades, setEspecialidades] = useState<any[]>([]);  // Estado para almacenar las especialidades
  const [loading, setLoading] = useState(true);  // Estado para saber si estamos cargando los datos
  const history = useHistory();

  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const data = await ServiceService.getTypeServices();
        setEspecialidades(data);  // Guardamos las especialidades en el estado
      } catch (error) {
        console.error('Error fetching especialidades:', error);
      } finally {
        setLoading(false);  // Terminamos la carga
      }
    };

    fetchEspecialidades();
  }, []);  // Se ejecuta una sola vez cuando el componente se monta

  if (loading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Seleccionar Especialidad</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>Cargando especialidades...</h2>
        </IonContent>
      </IonPage>
    );
  }

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
              <div className="col" key={especialidad.id_tipo_servicio}>
                <IonCard>
                  <IonImg src={`../../public/img/tipo_servicio_${especialidad.id_tipo_servicio}.jpg`} ></IonImg>
                  <IonCardHeader>
                    <IonCardTitle>{especialidad.nombre}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p className="card-text">{especialidad.descripcion}</p>
                    <IonButton
                      expand="full"
                      onClick={() => history.push('/reservar-cita', { especialidad })}
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
