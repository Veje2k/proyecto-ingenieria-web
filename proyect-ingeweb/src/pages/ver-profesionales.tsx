// src/pages/VerProfesionales.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';

const VerProfesionales: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Ver Profesionales</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonList>
            <IonItem>Dr. Juan Pérez - Veterinario General</IonItem>
            <IonItem>Dra. Laura Martínez - Especialista en Cirugía</IonItem>
            <IonItem>Dr. Carlos Ruiz - Especialista en Dermatología</IonItem>
            {/* Agrega más profesionales según sea necesario */}
        </IonList>
        </IonContent>
    </IonPage>
);

export default VerProfesionales;
