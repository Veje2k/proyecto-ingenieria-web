// src/pages/Servicios/PedirHora.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const PedirHora: React.FC = () => {
  const history = useHistory();

  const handleSchedule = () => {
    alert("Hora agendada con éxito"); // Puedes reemplazar esto con una lógica real
    history.push('/home'); // Redirige al usuario al home o a otra página
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pedir Hora de Atención</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Elige una fecha y hora disponible para agendar una consulta para tu mascota.</p>
        {/* Aquí puedes agregar inputs para seleccionar fecha y hora */}
        <IonButton expand="block" onClick={handleSchedule}>Agendar Hora</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PedirHora;