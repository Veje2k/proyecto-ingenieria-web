// Navbar.tsx
import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonPopover, IonList, IonItem, IonMenu, IonContent, IonMenuButton } from '@ionic/react';
import { pawOutline, chevronDownOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
    const history = useHistory();
    const [showPopover, setShowPopover] = useState(false);
    const handleMenuClick = (path: string) => {
        history.push(path);
        setShowPopover(false); // Cierra el popover de servicios
    };

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>PetMedic</IonTitle>
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon icon={pawOutline} size="large" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonMenu contentId="main-content">
                <IonHeader>
                <IonToolbar>
                    <IonTitle>PetMedic</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        
                     <IonItem onClick={() => handleMenuClick('/home')}>
                            Inicio
                        </IonItem>
                        <IonItem button onClick={() => handleMenuClick('/nosotros')}>
                            Nosotros
                        </IonItem>
                        <IonItem button onClick={() => handleMenuClick('/ver-profesionales')}>
                            Ver Profesionales
                        </IonItem>
                        <IonItem button onClick={() => setShowPopover(true)}>
                            Servicios <IonIcon icon={chevronDownOutline} />
                        </IonItem>
                        <IonPopover
                            isOpen={showPopover}
                            onDidDismiss={() => setShowPopover(false)}
                        >
                            <IonList>
                                <IonItem button onClick={() => { handleMenuClick('/servicios/vacunas'); setShowPopover(false); }}>
                                    Vacunas
                                </IonItem>
                                <IonItem button onClick={() => { handleMenuClick('/servicios/peluqueria'); setShowPopover(false); }}>
                                    Peluquería Canina
                                </IonItem>
                                <IonItem button onClick={() => { handleMenuClick('/seleccion-especialidad'); setShowPopover(false); }}>
                                    Pedir Hora de Atención
                                </IonItem>
                                <IonItem button onClick={() => { handleMenuClick('/citas'); setShowPopover(false); }}>
                                    Ver citas
                                </IonItem>
                                <IonItem button onClick={() => { handleMenuClick('/mapa'); setShowPopover(false); }}>
                                    Ver mapa
                                </IonItem>
                            </IonList>
                        </IonPopover>
                    </IonList>
                </IonContent>
            </IonMenu>

            <IonContent id="main-content">
                {/* Contenido principal de la aplicación aquí */}
            </IonContent>
        </>
    );
};

export default Navbar;
