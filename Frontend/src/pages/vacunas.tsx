import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './vacunas.css'; // Asegúrate de crear este archivo CSS

const Vacunas: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Vacunas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="vacunas-content">
                <div className="vacunas-info">
                    <p>Ofrecemos vacunas para perros y gatos, incluyendo vacunas anuales y de refuerzo.</p>
                    <div className="vacunas-list">
                        <h3>Vacunas disponibles:</h3>
                        <ul>
                            <li><strong>Rabia</strong> <span>Vacuna obligatoria</span></li>
                            <li><strong>Parvovirus</strong> <span>Previene enfermedades graves</span></li>
                            <li><strong>Moquillo</strong> <span>Vacuna esencial para cachorros</span></li>
                            <li><strong>Leptospirosis</strong> <span>Protege contra infecciones bacterianas</span></li>
                        </ul>
                    </div>
                    <p>Contacta con nosotros para programar una vacunación para tu mascota.</p>
                    <IonButton expand="full" color="primary" onClick={() => history.push('/seleccion-especialidad')}>
                        Agendar cita
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Vacunas;
