import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Nosotros: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Nosotros</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Información sobre nuestra veterinaria.</IonContent>
    </IonPage>
);

export default Nosotros;
