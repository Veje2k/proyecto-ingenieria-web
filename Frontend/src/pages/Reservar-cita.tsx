import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonButton, IonToast } from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import { ServiceService } from '../services/service-service';
import { ProfessionalService } from '../services/profesional-service';

const ReservarCita: React.FC = () => {
  const history = useHistory();
  const [fechaCita, setFechaCita] = useState(""); // Estado para la fecha de la cita
  const [horaCita, setHoraCita] = useState(""); // Estado para la hora de la cita
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState<number | null>(null); // Estado para el profesional seleccionado
  const [profesionales, setProfesionales] = useState<any[]>([]); // Estado para almacenar los profesionales
  const [showToast, setShowToast] = useState(false); // Estado para manejar el Toast
  const [toastMessage, setToastMessage] = useState<string>(''); // Mensaje del Toast
  const [toastColor, setToastColor] = useState<string>('success'); // Color del Toast (success o danger)

  const location = useLocation<{ especialidad: { id_tipo_servicio: number; nombre: string; descripcion: string; } }>();
  const especialidad = location.state?.especialidad;

  // Obtener la lista de profesionales cuando se monta el componente
  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        const result = await ProfessionalService.getAllProfessionals();
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

  const [year, month, day] = fechaCita.split('-');  // Dividir la fecha en año, mes y día
  const combinedDate = new Date(`${year}-${month}-${day}T${horaCita}:00`);

  // Función para crear un servicio (cita)
  const handleCreateService = async () => {
    try {
      const newService = {
        fecha: combinedDate,
        estado: 'ACT', // Estado activo
        id_tipo_servicio: especialidad.id_tipo_servicio,
        id_veterinario: profesionalSeleccionado || 0, // El ID del profesional seleccionado
        id_mascota: null, // Puedes agregar la lógica para la mascota si es necesario
        id_usuario: localStorage.getItem('userId') || 1 // Usar el ID del usuario actual
      };

      const result = await ServiceService.createService(newService);

      if (result.success) {
        // Mostrar mensaje de éxito
        setToastMessage('Cita agendada con éxito');
        setToastColor('success');
        setShowToast(true);

        // Redirigir a la pantalla de inicio (puedes redirigir a cualquier pantalla que necesites)
        history.push('/home');
      } else {
        throw new Error('No se pudo agendar la cita');
      }
    } catch (error) {
      console.error('Error al crear la cita:', error);
      // Mostrar mensaje de error
      setToastMessage('Error al agendar la cita');
      setToastColor('danger');
      setShowToast(true);
    }
  };

  const fechaHoy = new Date().toISOString().split("T")[0]; // Establecer la fecha mínima como hoy

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reservar cita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="container">
          <h1 className="text-center">Reservar Cita para {especialidad?.nombre}</h1>

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
            <IonSelectOption value="10:00">10:00</IonSelectOption>
            <IonSelectOption value="11:00">11:00</IonSelectOption>
            <IonSelectOption value="11:30">11:30</IonSelectOption>
            <IonSelectOption value="12:00">12:00</IonSelectOption>
            <IonSelectOption value="15:00">15:00</IonSelectOption>
            <IonSelectOption value="16:00">16:00</IonSelectOption>

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
              <IonSelectOption key={profesional.id_profesional} value={profesional.id_profesional}>
                {profesional.nombre} {profesional.apellido}
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

      {/* IonToast para mostrar el mensaje de éxito o error */}
      <IonToast
        isOpen={showToast}
        message={toastMessage}
        duration={2000}
        color={toastColor}
        onDidDismiss={() => setShowToast(false)}
      />
    </IonPage>
  );
};

export default ReservarCita;
