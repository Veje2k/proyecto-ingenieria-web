import React, { useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter } from '@ionic/react';
import mapboxgl from 'mapbox-gl';

const VerMapa: React.FC = () => {
  useEffect(() => {

    const loadMap = () => {
      mapboxgl.accessToken = 'pk.eyJ1IjoidmplMmsxIiwiYSI6ImNtMGl4YjBhNDByc28ya29haWRtbGlvYXUifQ.8cVndEoRfdOG-_PLK3Ti8g';

      const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
        center: [-71.61246320406093, -33.04454754605935], // Posición inicial [lng, lat]
        zoom: 15, // Zoom inicial
      });

      new mapboxgl.Marker()
        .setLngLat([-71.61246320406093, -33.04454754605935])
        .addTo(map);
    };

    loadMap();
  }, []); 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nuestra Ubicación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1 className="text-center">Nuestra ubicación</h1>
        <div className="container">
          <div id="map" style={{ width: '400px', height: '300px' }}></div>
        </div>
      </IonContent>
      <IonFooter>
      </IonFooter>
    </IonPage>
  );
};

export default VerMapa;
