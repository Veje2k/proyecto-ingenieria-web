import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from "@ionic/react";

const Nosotros: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sobre Nosotros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>¡Bienvenidos a PetMedic!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            En **PetMedic**, nuestra misión es proporcionar el mejor cuidado médico para tus mascotas. Con un equipo altamente capacitado y tecnología avanzada, ofrecemos soluciones integrales para la salud y el bienestar de tus amigos peludos.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Nuestros Servicios</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>✔ Consultas veterinarias</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>✔ Diagnósticos avanzados</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>✔ Vacunación y prevención</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>✔ Cirugías especializadas</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>✔ Emergencias 24/7</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Contáctanos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            📍 Dirección: Avenida Principal 456, Ciudad<br />
            📞 Teléfono: +56 9 9876 5432<br />
            ✉️ Email: contacto@petmedic.com
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Nosotros;
