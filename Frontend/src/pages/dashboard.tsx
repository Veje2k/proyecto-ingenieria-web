import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton expand="full" onClick={() => history.push('/crear-mascota')}>Crear Mascota</IonButton>
                <IonButton expand="full" onClick={() => history.push('/Reservar-cita')}>Gestionar Citas</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;