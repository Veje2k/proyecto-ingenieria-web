// src/pages/Servicios/Peluqueria.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Peluqueria: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Peluquería Canina</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <p>Nuestros servicios de peluquería incluyen:</p>
        <ul>
            <li>Baño y corte de uñas</li>
            <li>Peinado y corte de pelo</li>
            <li>Tratamiento antipulgas</li>
        </ul>
        <p>Ofrecemos un servicio seguro y cómodo para la higiene de tu mascota.</p>
        </IonContent>
    </IonPage>
);

export default Peluqueria;