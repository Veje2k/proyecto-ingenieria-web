import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const CrearMascota: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [edad, setEdad] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const history = useHistory();

    const handleCreatePet = async () => {
        try {
            const response = await fetch('http://localhost:5000/mascota/:id_usuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, especie, raza, edad, id_usuario: 1 }) // Reemplazar id_usuario con el ID del usuario autenticado
            });

            if (response.ok) {
                setToastMessage('Mascota creada con éxito');
                history.push('/dashboard'); // Redirigir al dashboard
            } else {
                setToastMessage('Error al crear mascota');
            }
        } catch (error) {
            setToastMessage('Error al conectar con el servidor');
        }

        setShowToast(true);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Crear Mascota</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Nombre</IonLabel>
                    <IonInput value={nombre} onIonChange={e => setNombre(e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Especie</IonLabel>
                    <IonInput value={especie} onIonChange={e => setEspecie(e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Raza</IonLabel>
                    <IonInput value={raza} onIonChange={e => setRaza(e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Edad</IonLabel>
                    <IonInput type="number" value={edad} onIonChange={e => setEdad(e.detail.value!)} />
                </IonItem>
                <IonButton expand="full" onClick={handleCreatePet}>Crear Mascota</IonButton>
                <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastMessage} duration={2000} />
            </IonContent>
        </IonPage>
    );
};

export default CrearMascota;