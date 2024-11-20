import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react';
import './ver-profesionales.css';

const VerProfesionales: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const veterinarios = [
        { nombre: "Dr. Juan Pérez", especialidad: "Medicina General", descripcion: "Dr. Pérez tiene más de 10 años de experiencia en medicina general.", img: "dia-del-veterinario_1440x810.jpg" },
        { nombre: "Dra. Laura Martínez", especialidad: "Cirugía", descripcion: "La Dra. Martínez es experta en cirugía veterinaria y ha realizado procedimientos avanzados.", img: "ruta-a-imagen-veterinario2.jpg" },
        { nombre: "Dr. Carlos Ruiz", especialidad: "Dermatología", descripcion: "El Dr. Ruiz se especializa en dermatología animal y ofrece tratamientos avanzados.", img: "ruta-a-imagen-veterinario3.jpg" },
        { nombre: "Dra. Ana Gómez", especialidad: "Comportamiento Animal", descripcion: "La Dra. Gómez ayuda a mejorar la conducta de mascotas.", img: "ruta-a-imagen-veterinario4.jpg" },
        { nombre: "Dr. Luis Fernández", especialidad: "Cardiología", descripcion: "Dr. Fernández es un cardiólogo veterinario con experiencia.", img: "ruta-a-imagen-veterinario5.jpg" },
        { nombre: "Dra. Elena Díaz", especialidad: "Odontología", descripcion: "Dra. Díaz ofrece servicios de odontología veterinaria de alta calidad.", img: "ruta-a-imagen-veterinario6.jpg" },
        { nombre: "Dr. Martín López", especialidad: "Oftalmología", descripcion: "Dr. López se especializa en la salud ocular de las mascotas.", img: "ruta-a-imagen-veterinario7.jpg" },
        { nombre: "Dra. Rosa Martínez", especialidad: "Oncología", descripcion: "Dra. Martínez es una oncóloga veterinaria altamente capacitada.", img: "ruta-a-imagen-veterinario8.jpg" }
    ];

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
                    <img src={veterinario.img} alt={veterinario.nombre} />
                    <IonCardHeader>
                    <IonCardTitle className="carousel-title">{veterinario.nombre}</IonCardTitle>
                    <IonCardSubtitle className="carousel-subtitle">{veterinario.especialidad}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>{veterinario.descripcion}</IonCardContent>
                    <IonButton color="primary" expand="block" className="carousel-button">
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