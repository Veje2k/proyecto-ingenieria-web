import { Redirect, Route } from 'react-router-dom';
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

import React from 'react';
import Navbar from './components/navbar';
import Nosotros from './pages/nosotros';
import VerProfesionales from './pages/ver-profesionales';
import Vacunas from './pages/services/vacunas';
import Peluqueria from './pages/services/peluqueria';
import PedirHora from './pages/services/pedir-hora';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Navbar />
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/nosotros" component={Nosotros} exact />
        <Route path="/ver-profesionales" component={VerProfesionales} exact />
        <Route path="/servicios/vacunas" component={Vacunas} exact />
        <Route path="/servicios/peluqueria" component={Peluqueria} exact />
        <Route path="/servicios/pedir-hora" component={PedirHora} exact />
        <Redirect from="/" to="/home" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
); 
export default App;
