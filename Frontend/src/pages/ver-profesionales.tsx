import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react';
import './ver-profesionales.css';
import { ProfessionalService } from '../services/profesional-service'; // Importa el servicio
import { useHistory } from 'react-router';

const VerProfesionales: React.FC = () => {
    const history = useHistory();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [veterinarios, setVeterinarios] = useState<any[]>([]);  // Estado para los profesionales

    // Cargar los profesionales desde la API
    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                const response = await ProfessionalService.getAllProfessionals();
                setVeterinarios(response); // Actualizar el estado con los datos obtenidos
            } catch (error) {
                console.error("Error fetching professionals:", error);
            }
        };
        fetchProfessionals();
    }, []);

    const profilesPerPage = 4;
    const totalPages = Math.ceil(veterinarios.length / profilesPerPage);

    const nextPage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalPages - 1 : prevIndex - 1
        );
    };

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Seleccione un profesional</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <div className="carousel-container">
            <div
                className="carousel-wrapper"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {veterinarios.map((veterinario, index) => (
                <div className="carousel-card" key={index}>
                    <img src='https://media.istockphoto.com/id/1368569467/es/vector/m%C3%A9dico-profesional-con-icono-de-silueta-de-estetoscopio-m%C3%A9dicos-masculinos-especialista-y.jpg?s=612x612&w=0&k=20&c=9oHAla8By-EMw8t5QtutRJrA-knNeUe2WtmCUJAE0bI=' alt={veterinario.nombre} />
                    <IonCardHeader>
                    <IonCardTitle className="carousel-title">{veterinario.nombre}</IonCardTitle>
                    <IonCardSubtitle className="carousel-subtitle">{veterinario.especialidad}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Disponibilidad: {veterinario.descripcion || 'No hay descripción disponible.'}</IonCardContent>
                    <IonButton color="primary" expand="block" className="carousel-button" onClick={()=>history.push('/seleccion-especialidad')}>
                    Reservar cita
                    </IonButton>
                </div>
                ))}
            </div>
            
            {/* Flechas de navegación */}
            <button className="arrow-button arrow-left" onClick={prevPage}>←</button>
            <button className="arrow-button arrow-right" onClick={nextPage}>→</button>
            </div>
        </IonContent>
        </IonPage>
    );
};

export default VerProfesionales;
