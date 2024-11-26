import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonToast } from '@ionic/react';
import './formularios.css';

const Login: React.FC = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Manejo de cookies de inicio de sesion desde el frontend.
    const handleLogin = async () => {
        if (!correo || !contrasena) {
            setToastMessage('Por favor, completa todos los campos.');
            setShowToast(true);
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, contrasena }),
                credentials: 'include' // Incluir cookies en la solicitud
            });
    
            if (response.ok) {
                const data = await response.json();
                setToastMessage('Inicio de sesión exitoso');
                // Maneja el inicio de sesión exitoso aquí (ej. redirigir, etc.)
                console.log('Token:', data.token);
            } else {
                setToastMessage('Correo electrónico o contraseña incorrectos.');
            }
        } catch (error) {
            setToastMessage('Error al conectar con el servidor.');
        }
    
        setShowToast(true);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Iniciar Sesión</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Correo Electrónico</IonLabel>
                    <IonInput type="email" value={correo} onIonChange={e => setCorreo(e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type="password" value={contrasena} onIonChange={e => setContrasena(e.detail.value!)} />
                </IonItem>
                <IonButton expand="full" onClick={handleLogin}>Iniciar Sesión</IonButton>
                <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastMessage} duration={2000} />
            </IonContent>
        </IonPage>
    );
};

export default Login;