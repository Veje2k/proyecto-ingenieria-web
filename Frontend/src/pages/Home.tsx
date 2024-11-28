import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { pawOutline, medicalOutline, calendarOutline } from "ionicons/icons";
import "./Home.css";
import { useHistory } from "react-router";

const Home: React.FC = () => {

  const history = useHistory();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PetMedic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="home-content">
        <div className="welcome-section">
          <h1>¡Bienvenido a PetMedic!</h1>
          <p>Tu clínica veterinaria de confianza, dedicada al cuidado y bienestar de tus mascotas.</p>
        </div>

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Consultas Veterinarias</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Contamos con un equipo experto para atender a tus mascotas en todo momento.
                  <IonButton expand="full" color="primary" className="action-button" onClick={()=>history.push('/ver-profesionales')}>
                    <IonIcon icon={medicalOutline} slot="start" />
                    Más información
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Reserva tu Cita</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Agenda fácilmente una cita desde nuestra app y evita largas esperas.
                  <IonButton expand="full" color="secondary" className="action-button" onClick={()=>history.push('/seleccion-especialidad')}>
                    <IonIcon icon={calendarOutline} slot="start" />
                    Reservar ahora
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Adopciones</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Dale un hogar a un amigo peludo que lo necesita. ¡Conoce más aquí!
                  <IonButton expand="full" color="success" className="action-button">
                    <IonIcon icon={pawOutline} slot="start" />
                    Ver adopciones
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
