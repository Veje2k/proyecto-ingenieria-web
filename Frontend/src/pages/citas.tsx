import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonModal, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { closeOutline } from 'ionicons/icons';
import { ServiceService } from '../services/service-service';
import "./citas.css";

const Citas: React.FC = () => {
    const history = useHistory();
    const [citaSeleccionada, setCitaSeleccionada] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [citas, setCitas] = useState<any[]>([]); // Estado para almacenar las citas obtenidas desde la API.

    // Estados para separar citas por estado
    const [citasPendientes, setCitasPendientes] = useState<any[]>([]);
    const [citasCompletadas, setCitasCompletadas] = useState<any[]>([]);

    const [idCitaSeleccionada, setIdCitaSeleccionada] = useState<number | null>(null);


    // Estados para el IonToast
    const [showToast, setShowToast] = useState(false); // Estado para mostrar el Toast
    const [toastMessage, setToastMessage] = useState<string>(''); // Mensaje del Toast
    const [toastColor, setToastColor] = useState<string>('success'); // Color del Toast (success o danger)

    const fetchCitas = async () => {
      try {
          const id = parseInt(localStorage.getItem('userId') || '1') || 1;  // Este id debería ser dinámico si es posible
          const result = await ServiceService.getServicesByIdUser(id);
          setCitas(result);  // Establecer todas las citas en el estado

          // Filtrar las citas por estado
          const pendientes = result.filter(cita => cita.estado === 'ACT');
          const completadas = result.filter(cita => cita.estado !== 'ACT');

          setCitasPendientes(pendientes);  // Citas con estado "ACT"
          setCitasCompletadas(completadas); // Resto de las citas
      } catch (error) {
          console.error('Error al obtener las citas:', error);
      }
  };

    useEffect(() => {
        fetchCitas();
    }, []);


    const handleSelectCita = (index: number, idCita: number) => {
        setCitaSeleccionada(index);
        setShowModal(true);
        setIdCitaSeleccionada(idCita);
    };

    const cancelarCita = async () => {
        if (citaSeleccionada !== null) {
            const citaCancelada = citas[citaSeleccionada];
            try {
                // Llamar al ServiceService para cancelar la cita
                if (idCitaSeleccionada == null)
                    throw('Error al cancelar la cita');
                await ServiceService.cancelarServicio(idCitaSeleccionada);

                // Actualizar el estado de las citas
                const updatedCitas = citas.filter((_, index) => index !== citaSeleccionada);
                setCitas(updatedCitas);  // Actualiza la lista completa de citas

                // Actualizar las citas pendientes y completadas
                const updatedPendientes = updatedCitas.filter(cita => cita.estado === 'ACT');
                const updatedCompletadas = updatedCitas.filter(cita => cita.estado !== 'ACT');
                setCitasPendientes(updatedPendientes);
                setCitasCompletadas(updatedCompletadas);

                setShowModal(false);  // Cerrar el modal
                setCitaSeleccionada(null);  // Resetear la cita seleccionada
                setToastMessage('Cita cancelada con éxito');
                setToastColor('success');
                setShowToast(true); // Mostrar el Toast de éxito
                fetchCitas();
            } catch (error) {
                console.error('Error al cancelar la cita:', error);
                setToastMessage('Error al cancelar la cita');
                setToastColor('danger');
                setShowToast(true); // Mostrar el Toast de error
            }
        }
    };

    const formatDate = (dateString: string): string => {
      const date = new Date(dateString); // Convertir el string a un objeto Date
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,  // Para usar el formato de 24 horas
      };
      
      return date.toLocaleString('es-ES', options);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Inicio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="">
                <div className="container">
                    <h1 className="text-center">Gestionar citas</h1>

                    {/* Citas pendientes */}
                    <h3>Citas pendientes</h3>
                    <IonList> 
                        {/* Encabezado */}
                        <IonItem style={{ backgroundColor: 'aliceblue', fontWeight: 'bold' }}>
                            <IonGrid>
                                <IonRow className="ion-align-items-center">
                                    <IonCol size="4">Fecha</IonCol>
                                    <IonCol size="5">Descripción</IonCol>
                                    <IonCol size="3" className="ion-text-center">Acciones</IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonItem>

                        {/* Citas pendientes */}
                        {citasPendientes.length > 0 ? (
                            citasPendientes.map((cita, index) => (
                                <IonItem key={index}>
                                    <IonGrid>
                                        <IonRow className="ion-align-items-center">
                                            <IonCol size="4">{formatDate(cita.fecha)}</IonCol>
                                            <IonCol size="5">{cita.TipoServicio.descripcion} - Dr(a) {cita.Profesional.nombre} {cita.Profesional.apellido}</IonCol>
                                            <IonCol size="3" className="ion-text-center">
                                                <IonButton
                                                    color="danger"
                                                    onClick={() => handleSelectCita(index, cita.id_servicio)}
                                                    style={{ width: '35px', paddingTop: '5px', paddingBottom: '0' }}
                                                >
                                                    <IonIcon icon={closeOutline} />
                                                </IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonItem>
                            ))
                        ) : (
                            <IonItem>No tienes citas pendientes.</IonItem>
                        )}
                    </IonList>

                    {/* Citas completadas */}
                    <h3 className="mt-4">Citas completadas</h3>
                    <IonList>
                        <IonItem style={{ backgroundColor: 'aliceblue', fontWeight: 'bold' }}>
                            <IonGrid>
                                <IonRow className="ion-align-items-center">
                                    <IonCol size="4">Fecha</IonCol>
                                    <IonCol size="5">Descripción</IonCol>
                                    <IonCol size="3" className="ion-text-center">Estado</IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonItem>
                        {citasCompletadas.length > 0 ? (
                            citasCompletadas.map((cita, index) => (
                                <IonItem key={index}>
                                    <IonGrid>
                                        <IonRow className="ion-align-items-center">
                                            <IonCol size="4">{formatDate(cita.fecha)}</IonCol>
                                            <IonCol size="5">{cita.TipoServicio.descripcion}</IonCol>
                                            <IonCol size="3" className="ion-text-center">
                                                {cita.estado === 'CNL' ? 'Cancelada':'Terminada'}
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonItem>
                            ))
                        ) : (
                            <IonItem>No tienes citas completadas.</IonItem>
                        )}
                    </IonList>

                    {/* Modal */}
                    <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Cancelar cita</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-padding custom-modal">
                            <p>¿Estás seguro que deseas cancelar la cita?</p>
                            <div className="ion-text-right">
                                <IonButton onClick={() => setShowModal(false)} color="secondary">Volver</IonButton>
                                <IonButton
                                    color="danger"
                                    onClick={cancelarCita}
                                >
                                    Cancelar cita
                                </IonButton>
                            </div>
                        </IonContent>
                    </IonModal>

                    {/* IonToast para mostrar el mensaje de éxito o error */}
                    <IonToast
                        isOpen={showToast}
                        message={toastMessage}
                        duration={2000}
                        color={toastColor}
                        onDidDismiss={() => setShowToast(false)}
                    />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Citas;
