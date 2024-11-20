import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Vacunas: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Vacunas</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <p>Ofrecemos vacunas para perros y gatos, incluyendo vacunas anuales y de refuerzo.</p>
        <ul>
            <li>Rabia</li>
            <li>Parvovirus</li>
            <li>Moquillo</li>
            <li>Leptospirosis</li>
        </ul>
        <p>Contacta con nosotros para programar una vacunación para tu mascota.</p>
        </IonContent>
    </IonPage>
);

export default Vacunas;