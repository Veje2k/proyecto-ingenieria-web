import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonToast } from '@ionic/react';
import './formularios.css'; 

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
        setToastMessage('Por favor, completa todos los campos.');
        setShowToast(true);
        return;
        }

        // Aquí deberías hacer una solicitud a tu backend para verificar las credenciales
        const response = await fetch('http://tu-backend.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
        const data = await response.json();
        setToastMessage('Inicio de sesión exitoso');
        // Maneja el inicio de sesión exitoso aquí (ej. almacenar token, redirigir, etc.)
        } else {
        setToastMessage('Correo electrónico o contraseña incorrectos.');
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
            <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
            </IonItem>
            <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
            </IonItem>
            <IonButton expand="full" onClick={handleLogin}>Iniciar Sesión</IonButton>
            <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastMessage} duration={2000} />
        </IonContent>
        </IonPage>
    );
};

export default Login;
