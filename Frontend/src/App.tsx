import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Nosotros from './pages/nosotros';
import VerProfesionales from './pages/ver-profesionales';
import Vacunas from './pages/vacunas';
import Peluqueria from './pages/peluqueria';
import Footer from './components/footer';
import SeleccionEspecialidad from './pages/Seleccion-especialidad';
import ReservarCita from './pages/Reservar-cita';
import Citas from './pages/citas';
import RegistrarCuenta from './pages/registrar-cuenta';
import Login from './pages/Inicio-sesion';
import VerMapa from './pages/ver-mapa';
import Dashboard from './pages/dashboard';

const App: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const history = useHistory();

  // Comprobar el estado de autenticación al cargar la página
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setIsAuthenticated(true);
    }
  }, []);

  // Función para manejar el login
  const handleLogin = (userId: string) => {
    localStorage.setItem('userId', userId);
    setIsAuthenticated(true);
    history.push('/home');  // Redirige al home después de login
  };

  // Función para manejar el logout
  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    history.push('/home');  // Redirige al home después de logout
  };


  return (
    <IonApp>
      <IonReactRouter>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/nosotros" component={Nosotros} exact />
          <Route path="/ver-profesionales" component={VerProfesionales} exact />
          <Route path="/reservar-cita" component={ReservarCita} exact />
          <Route path="/seleccion-especialidad" component={SeleccionEspecialidad} exact />
          <Route path="/servicios/vacunas" component={Vacunas} exact />
          <Route path="/servicios/peluqueria" component={Peluqueria} exact />
          <Route path="/citas" component={Citas} exact />
          <Route path="/mapa" component={VerMapa} exact />

          <Route path="/inicio-sesion" render={() => <Login onLogin={handleLogin} />} exact />
          <Route path="/registrar-cuenta" component={RegistrarCuenta} exact />
          <Route path="/dashboard" component={Dashboard} exact />

          <Redirect from="/" to="/home" exact />
        </IonRouterOutlet>
        {/* <Footer/ > */}

      </IonReactRouter>
    </IonApp>
  ); 
};
export default App;
