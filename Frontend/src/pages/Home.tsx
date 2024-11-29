import React, { useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonToast } from "@ionic/react";
import { pawOutline, medicalOutline, calendarOutline } from "ionicons/icons";
import "./Home.css";
import { useHistory } from "react-router";

const Home: React.FC = () => {

  const history = useHistory();

  const handleNavigateToAdoptionPage = () => {
    // URL de la página externa
    const url = "https://www.garrasypatas.cl/";
    
    // Abrir la URL en una nueva pestaña
    window.open(url, '_blank');
  };

  const [showToast, setShowToast] = useState(false); // Estado para manejar el Toast
  const [toastMessage, setToastMessage] = useState<string>(''); // Mensaje del Toast


  
  const isAuthenticated = () => {
    return localStorage.getItem('userId') !== null; 
  };

  const handleClickOption = (path: string) => {
    if (!isAuthenticated()) {
      // Si no está autenticado, redirige al login
      setToastMessage('Debes iniciar sesión para acceder a esta página.');
      setShowToast(true);
    }else{
      history.push(path)
    }
  };
  


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
                  <IonButton expand="full" color="primary" className="action-button" onClick={()=>handleClickOption('/ver-profesionales')}>
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
                  <IonButton expand="full" color="secondary" className="action-button" onClick={()=>handleClickOption('/seleccion-especialidad')}>
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
                  <IonButton expand="full" color="success" className="action-button" onClick={handleNavigateToAdoptionPage}>
                    <IonIcon icon={pawOutline} slot="start" />
                    Ver adopciones
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonToast
        isOpen={showToast}
        message={toastMessage}
        duration={2000}
        color="danger"
        onDidDismiss={() => setShowToast(false)}
      />
    </IonPage>
  );
};

export default Home;
