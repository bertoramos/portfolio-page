import { HashRouter, Route } from 'react-router-dom';
import { IonApp, IonContent, setupIonicReact } from '@ionic/react';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

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
import Template from './components/Template';

setupIonicReact();

const PageDemo: React.FC<{ num: number }> = ({ num }) => (
  <IonContent>{`Demo Page ${num}`}</IonContent>
);

const App: React.FC = () => (
  <IonApp>
    {
      /*
       	• HOME
	      • ABOUT
	      • EDUCATION
	      • EXPERIENCE
        • PROJECTS
      */
    }
    <HashRouter>
        <Route exact path="/">
          <Template title="Home" content={<Home />} />
        </Route>
        
        <Route exact path="/about">
          <Template title="About" content={<About />} />
        </Route>

        <Route exact path="/education">
          <Template title="Education" content={<Education />} />
        </Route>

        <Route exact path="/experience">
          <Template title="Experience" content={<Experience />} />
        </Route>

        <Route exact path="/projects">
          <Template title="Projects" content={<Projects />} />
        </Route>
    </HashRouter>
  </IonApp>
);

export default App;
