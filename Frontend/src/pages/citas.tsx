
import React, { useState } from 'react';
import { IonPage,  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonModal } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import citasData from '../data/citas.json'
import { closeOutline } from 'ionicons/icons';


const Citas: React.FC = () => {
    const history = useHistory();
    const [citaSeleccionada, setCitaSeleccionada] = useState<number | null>(null);
    let indexSeleccionado = -1;
    const [showModal, setShowModal] = useState(false);

    const handleSelectCita = (index: number) => {
      indexSeleccionado = index;
      setCitaSeleccionada(index);
      setShowModal(true);
    };

    return (<IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Inicio</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

            <div className="container">
                <h1 className="text-center">Gestionar citas</h1>

                <h3>Citas pendientes</h3>

∑
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

        {/* Citas */}
        {citasData.length > 0 ? (
          citasData.map((cita, index) => (
            <IonItem key={index}>
              <IonGrid>
                <IonRow className="ion-align-items-center">
                  <IonCol size="4">{cita.fecha}</IonCol>
                  <IonCol size="5">{cita.descripcion}</IonCol>
                  <IonCol size="3" className="ion-text-center">
                    <IonButton
                      color="danger"
                      onClick={() => handleSelectCita(index) }
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

                <h3 className="mt-4">Citas completadas</h3>

                {/* Modal */}
                <IonModal isOpen={showModal}  onDidDismiss={() => setShowModal(false)} >
                    <IonHeader>
                    <IonToolbar>
                        <IonTitle>Cancelar cita</IonTitle>
                    </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                    <p>¿Estás seguro que deseas cancelar la cita?</p>
                    <div className="ion-text-right">
                        <IonButton onClick={() => setShowModal(false)} color="secondary">Volver</IonButton>
                        <IonButton
                        color="danger"
                        onClick={() => {
                            // Lógica de cancelación de cita aquí
                            citasData.splice(indexSeleccionado, 1);
                            console.log('Cita cancelada:', citaSeleccionada);
                            setShowModal(false);
                        }}
                        >
                        Cancelar cita
                        </IonButton>
                    </div>
                    </IonContent>
                </IonModal>
                </div>
        </IonContent>
    </IonPage>
    );
};

export default Citas;
