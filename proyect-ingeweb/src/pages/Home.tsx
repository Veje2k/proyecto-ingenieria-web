// Home.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Inicio</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">Bienvenido a la veterinaria.</IonContent>
  </IonPage>
);

export default Home;