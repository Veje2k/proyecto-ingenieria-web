import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonDatetime, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const ReservarCita: React.FC = () => {
    const history = useHistory();

    return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Reservar cita</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
    <div className="container">
          <h1 className="text-center">Reservar Cita</h1>

          <h3>Seleccionar fecha</h3>
          <input className="form-control w-50" type="date" id="fecha" name="fecha" />
          <h3 className="mt-5">Seleccionar hora</h3>
          <IonSelect className="w-50" placeholder="Sin hora seleccionada" style={{backgroundColor: "aliceblue", color: "black"}}>
            <IonSelectOption value="1">10:00</IonSelectOption>
            <IonSelectOption value="2">12:00</IonSelectOption>
            <IonSelectOption value="3">15:00</IonSelectOption>
          </IonSelect>

          <div className="mt-5">
            <IonButton color="primary">Reservar cita</IonButton>
            <IonButton  color="danger" onClick={() => history.goBack()} className="mt-2">
              Volver
            </IonButton>
          </div>
        </div>
    </IonContent>
  </IonPage>
)
};

export default ReservarCita;