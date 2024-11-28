import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import { ServiceService } from './services/service-service';
//import { ProfessionalsService } from './services/professionals-service'; // Suponiendo que tienes este servicio

const ReservarCita: React.FC = () => {
  const history = useHistory();
  const [fechaCita, setFechaCita] = useState(""); // Estado para la fecha de la cita
  const [horaCita, setHoraCita] = useState(""); // Estado para la hora de la cita
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState<number | null>(null); // Estado para el profesional seleccionado
  const [profesionales, setProfesionales] = useState<any[]>([]); // Estado para almacenar los profesionales

  const location = useLocation<{ especialidad: { id: number; title: string; image: string; description: string; } }>();
  const especialidad = location.state?.especialidad;

  // Obtener la lista de profesionales cuando se monta el componente
  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        const result = [{
          id: 1,
          name: 'Jorge Perez'
        },
        {
          id: 2,
          name: 'Angelina Castro'
        }];
        setProfesionales(result);
      } catch (error) {
        console.error('Error al obtener los profesionales:', error);
      }
    };

    fetchProfesionales();
  }, []);

  // Manejar cambios en el campo de fecha
  const handleCambioFecha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFechaCita(event.target.value);
  };

  // Manejar cambios en el campo de hora
  const handleCambioHora = (event: any) => {
    setHoraCita(event.target.value);
  };

  // Manejar cambios en el select del profesional
  const handleCambioProfesional = (event: any) => {
    setProfesionalSeleccionado(event.detail.value); // Guardar el ID del profesional seleccionado
  };

  // Función para manejar el envío de la cita
  const manejarEnvio = () => {
    alert(`Fecha seleccionada: ${fechaCita}, Hora seleccionada: ${horaCita}, Profesional seleccionado: ${profesionalSeleccionado}`);
  };

  // Función para crear un servicio (cita)
  const handleCreateService = async () => {
    try {
      const newService = {
        fecha: new Date(),
        estado: 'newuser@example.com', // 
        id_tipo_servicio: especialidad.id,
        id_veterinario: profesionalSeleccionado || 0, // El ID del profesional seleccionado
        id_mascota: 0,
      };

      const result = await ServiceService.createService(newService);
      console.log('Cita agendada:', result);
    } catch (error) {
      console.error('Error al crear la cita:', error);
    }
  };

  const fechaHoy = new Date().toISOString().split("T")[0];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reservar cita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="container">
          <h1 className="text-center">Reservar Cita para {especialidad?.title}</h1>

          <h3>Seleccionar fecha</h3>
          <input
            className="form-control w-50"
            type="date"
            id="fecha"
            name="fecha"
            min={fechaHoy}
            onChange={handleCambioFecha}
            value={fechaCita}
          />

          <h3 className="mt-5">Seleccionar hora</h3>
          <IonSelect
            className="w-50"
            value={horaCita}
            onIonChange={handleCambioHora}
            placeholder="Sin hora seleccionada"
            style={{ backgroundColor: "aliceblue", color: "black" }}
          >
            <IonSelectOption value="1">10:00</IonSelectOption>
            <IonSelectOption value="2">12:00</IonSelectOption>
            <IonSelectOption value="3">15:00</IonSelectOption>
          </IonSelect>

          <h3 className="mt-5">Seleccionar profesional</h3>
          <IonSelect
            className="w-50"
            value={profesionalSeleccionado}
            onIonChange={handleCambioProfesional}
            placeholder="Seleccionar profesional"
            style={{ backgroundColor: "aliceblue", color: "black" }}
          >
            {profesionales.map((profesional) => (
              <IonSelectOption key={profesional.id} value={profesional.id}>
                {profesional.name}
              </IonSelectOption>
            ))}
          </IonSelect>

          <div className="mt-5">
            <IonButton
              color="primary"
              onClick={handleCreateService}
              disabled={fechaCita === '' || horaCita === '' || profesionalSeleccionado === null}
            >
              Reservar cita
            </IonButton>
            <IonButton color="danger" onClick={() => history.goBack()} className="mt-2">
              Volver
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ReservarCita;
