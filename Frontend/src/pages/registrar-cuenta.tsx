import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonToast, IonCheckbox } from '@ionic/react';
import './formularios.css';

const isValidRut = (rut: string) => {
    const rutRegex = /^\d{1,8}-[0-9kK]{1}$/;
    return rutRegex.test(rut);
};

const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const RegistrarCuenta: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [rut, setRut] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleRegister = async () => {
        if (!name || !surname || !rut || !email || !password || !confirmPassword) {
            setToastMessage('Por favor, completa todos los campos.');
            setShowToast(true);
            return;
        }

        if (!isValidRut(rut)) {
            setToastMessage('RUT no es válido.');
            setShowToast(true);
            return;
        }

        if (!isValidEmail(email)) {
            setToastMessage('Correo electrónico no es válido.');
            setShowToast(true);
            return;
        }

        if (password !== confirmPassword) {
            setToastMessage('Las contraseñas no coinciden.');
            setShowToast(true);
            return;
        }

        if (!termsAccepted) {
            setToastMessage('Debes aceptar los términos y condiciones.');
            setShowToast(true);
            return;
        }

        const userData = {
            nombre: name,
            apellido: surname,
            rut,
            correo: email,
            contrasena: password,
        };

        try {
            const response = await fetch('http://localhost:5000/usuarios/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                credentials: 'include',
            });

            if (response.ok) {
                setToastMessage('Registro exitoso.');
                setName('');
                setSurname('');
                setRut('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setTermsAccepted(false);
            } else {
                const errorData = await response.json();
                setToastMessage(errorData.message || 'Error al registrar usuario.');
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
                    <IonTitle>Registrar Cuenta</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding form-container">
                <IonItem className="form-item">
                    <IonLabel position="floating">Nombre</IonLabel>
                    <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
                </IonItem>
                <IonItem className="form-item">
                    <IonLabel position="floating">Apellido</IonLabel>
                    <IonInput value={surname} onIonChange={e => setSurname(e.detail.value!)} />
                </IonItem>
                <IonItem className="form-item">
                    <IonLabel position="floating">RUT</IonLabel>
                    <IonInput value={rut} onIonChange={e => setRut(e.detail.value!)} />
                </IonItem>
                <IonItem className="form-item">
                    <IonLabel position="floating">Correo Electrónico</IonLabel>
                    <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
                </IonItem>
                <IonItem className="form-item">
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
                </IonItem>
                <IonItem className="form-item">
                    <IonLabel position="floating">Confirmar Contraseña</IonLabel>
                    <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} />
                </IonItem>
                <IonItem className="form-item">
                    <IonCheckbox checked={termsAccepted} onIonChange={e => setTermsAccepted(e.detail.checked!)} />
                    <IonLabel>Acepto los términos y condiciones</IonLabel>
                </IonItem>
                <IonButton expand="full" onClick={handleRegister}>Registrar</IonButton>
                <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastMessage} duration={2000} />
            </IonContent>
        </IonPage>
    );
};

export default RegistrarCuenta;