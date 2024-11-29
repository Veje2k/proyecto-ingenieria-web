import React, { useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter } from '@ionic/react';
import mapboxgl from 'mapbox-gl';
import './ver-mapa.css';  // Asegúrate de tener este archivo CSS con los estilos

const VerMapa: React.FC = () => {
  useEffect(() => {

    const loadMap = () => {
      mapboxgl.accessToken = 'pk.eyJ1IjoidmplMmsxIiwiYSI6ImNtMGl4YjBhNDByc28ya29haWRtbGlvYXUifQ.8cVndEoRfdOG-_PLK3Ti8g';

      const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
        center: [-71.61246320406093, -33.04454754605935], // Posición inicial [lng, lat]
        zoom: 15, // Zoom inicial,
      });

      new mapboxgl.Marker()
        .setLngLat([-71.61246320406093, -33.04454754605935])
        .addTo(map);
    };

    setTimeout(()=>{
      loadMap();
    }, 500);
  }, []); 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nuestra Ubicación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding content-container">
        <h1 className="text-center">Encuentra nuestra ubicación en el mapa</h1>
        <div className="map-container" id="map"></div>
      </IonContent>
      <IonFooter>
      </IonFooter>
    </IonPage>
  );
};

export default VerMapa;
