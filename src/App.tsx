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
import { useEffect, useState } from 'react';
import { CVType } from './model/cv';
import { loadCV } from './controller/cv_load';

setupIonicReact();

const App: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const [cv, setCV] = useState<CVType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchCV = async () => {
      try {
        const cvData = await loadCV(`${baseUrl}cv-alberto.yaml`);
        setCV(cvData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading CV');
      } finally {
        setLoading(false);
      }
    };

    fetchCV();
  }, []);

  return (
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
          <Template title="Home" content={<Home cv={cv} />} noContentScroll={true} />
        </Route>
        
        <Route exact path="/about">
          <Template title="About" content={<About cv={cv} />} noContentScroll={false} />
        </Route>

        <Route exact path="/education">
          <Template title="Education" content={<Education cv={cv} />} noContentScroll={true} />
        </Route>

        <Route exact path="/experience">
          <Template title="Experience" content={<Experience cv={cv} />} noContentScroll={true} />
        </Route>

        <Route exact path="/projects">
          <Template title="Projects" content={<Projects cv={cv} />} noContentScroll={true} />
        </Route>
    </HashRouter>
  </IonApp>
  );
};

export default App;
