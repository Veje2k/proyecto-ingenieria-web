// Navbar.tsx
import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonPopover, IonList, IonItem } from '@ionic/react';
import { pawOutline, chevronDownOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
    const history = useHistory();
    const [showPopover, setShowPopover] = useState(false);

    return (
        <IonHeader>
        <IonToolbar>
            <IonButtons slot="end">
            <IonButton>
                <IonIcon icon={pawOutline} size="large" />
            </IonButton>
            </IonButtons>
            <IonButtons slot="start" style={{ display: 'flex', gap: '20px' }}>
            <IonButton onClick={() => history.push('/home')}>
                Inicio
            </IonButton>
            <IonButton onClick={() => history.push('/nosotros')}>
                Nosotros
            </IonButton>
            <IonButton onClick={() => history.push('/ver-profesionales')}>
                Ver Profesionales
            </IonButton>
            <IonButton onClick={() => setShowPopover(true)}>
                Servicios <IonIcon icon={chevronDownOutline} />
            </IonButton>
            <IonPopover
                isOpen={showPopover}
                onDidDismiss={() => setShowPopover(false)}
            >
                <IonList>
                <IonItem button onClick={() => { history.push('/servicios/vacunas'); setShowPopover(false); }}>
                    Vacunas
                </IonItem>
                <IonItem button onClick={() => { history.push('/servicios/peluqueria'); setShowPopover(false); }}>
                    Peluquería Canina
                </IonItem>
                <IonItem button onClick={() => { history.push('/servicios/pedir-hora'); setShowPopover(false); }}>
                    Pedir Hora de Atención
                </IonItem>
                </IonList>
            </IonPopover>
            </IonButtons>
        </IonToolbar>
        </IonHeader>
    );
};

export default Navbar;