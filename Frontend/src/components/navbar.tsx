import React, { useState, useEffect } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonPopover, IonList, IonItem, IonMenu, IonContent, IonMenuButton, IonMenuToggle, IonToast } from '@ionic/react';
import { pawOutline, chevronDownOutline, logInOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';


interface NavbarProps {
    isAuthenticated: boolean;
    onLogout: () => void;
  }

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, onLogout }) => {
    // Corregir -> Buscar como se hace con ionic
    const history = useHistory();
    const [isUser, setIsUser] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const [showToast, setShowToast] = useState(false); // Estado para manejar el Toast
    const [toastMessage, setToastMessage] = useState<string>(''); // Mensaje del Toast
  

    // Corregir -> Buscar como se hace con ionic
    const handleMenuClick = (path: string) => {
        if (!isAuthenticated && path !== '/home' && path !== '/mapa' && path !== '/nosotros' && path !== '/registrar-cuenta') {
            // Si no está autenticado, redirige al login
            history.push('/inicio-sesion'); // Para React Router v5
            setShowPopover(false)        
            setToastMessage('Debes iniciar sesión para acceder a esta página.');
            setShowToast(true);
        }else{
            history.push(path);
            setShowPopover(false);
        } // Cierra el popover de servicios
    };


    

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5000/usuarios/logout', {
                method: 'POST',
                credentials: 'include',
            });
    
            if (response.ok) {
                onLogout();
                history.replace('/home');
            } else {
                console.error('Error al cerrar sesión');
            }
        } catch (error) {
            console.error('Error al conectar con el servidor', error);
        }
    };

    useEffect(() => {
        // fetch(`http://localhost:5000/usuarios/me`, {
        //   method: 'GET',
        //   credentials: 'include' // Incluir cookies en la solicitud
        // }).then((res1) => {
        //   res1.json().then(us => {
        //     if (us.user)
        //         setIsUser(true);

        //   })
        // })
      }, []);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle style={{ padding: 0 }}>PetMedic</IonTitle>
                    <IonButtons slot="end">
                        {isAuthenticated ? (
                            <IonButton onClick={handleLogout}>
                                <IonIcon icon={pawOutline} size="large" />
                                Cerrar Sesión
                            </IonButton>
                        ) : (
                        <IonButton routerLink="/inicio-sesion" style={{ fontSize: '12px' }}>
                            <IonIcon icon={logInOutline} size='small' />
                            Iniciar Sesión
                        </IonButton>
                        )}                        
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
                    <IonMenuToggle>

                            
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
                            <IonItem button onClick={() => handleMenuClick('/registrar-cuenta')}>
                                Registrar Usuario 
                            </IonItem>
                            <IonPopover
                                isOpen={showPopover}
                                onDidDismiss={() => setShowPopover(false)}>
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
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>

            <IonContent id="main-content">
                {/* Contenido principal de la aplicación aquí */}
            </IonContent>

            <IonToast
        isOpen={showToast}
        message={toastMessage}
        duration={2000}
        color="danger"
        onDidDismiss={() => setShowToast(false)}
      />
        </>
    );
};

export default Navbar;