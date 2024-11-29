import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './peluqueria.css'; // Asegúrate de crear este archivo CSS

const Peluqueria: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Peluquería Canina</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="peluqueria-content">
                <div className="peluqueria-info">
                    <p>Ofrecemos los siguientes servicios de peluquería para tu mascota:</p>
                    <div className="peluqueria-list">
                        <h3>Servicios disponibles:</h3>
                        <ul>
                            <li><strong>Baño y corte de uñas</strong> <span>Deja a tu mascota limpia y cómoda</span></li>
                            <li><strong>Peinado y corte de pelo</strong> <span>El mejor corte para tu mascota</span></li>
                            <li><strong>Tratamiento antipulgas</strong> <span>Protege a tu mascota de las plagas</span></li>
                        </ul>
                    </div>
                    <p>Contáctanos para reservar una cita o para más información.</p>
                    <IonButton expand="full" color="primary" onClick={() => history.push('/seleccion-especialidad')}>
                        Agendar cita
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Peluqueria;
