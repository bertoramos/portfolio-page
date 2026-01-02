import { HashRouter, Route } from 'react-router-dom';
import { IonApp, IonButton, IonContent, IonIcon, setupIonicReact } from '@ionic/react';

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
import React from 'react';
import Hamburger from 'hamburger-react';
import Menu from './components/Menu';
import { chatbubblesOutline, toggle } from 'ionicons/icons';
import Contact from './pages/Contact';

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

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isContactOpen, setIsContactOpen] = React.useState(false);


  return (
    <IonApp>

      <div slot="end" id="menu_button" onClick={() => { setMenuOpen(!menuOpen); }}>
        <Hamburger size={20} toggled={menuOpen} toggle={setMenuOpen} />
      </div>

      <IonButton
        id="contact_button"
        shape="round"
        onClick={() => setIsContactOpen(isContactOpen => !isContactOpen)}
      >
        <IonIcon slot="start" icon={chatbubblesOutline} />
        Contact
      </IonButton>

      <Contact cv={cv} isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

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
          <Template
            title="Home"
            content={<Home cv={cv} />} noContentScroll={true}
            menuOpen={menuOpen} toggleMenu={toggleMenu}
          />
        </Route>

        <Route exact path="/about">
          <Template
            title="About" content={<About cv={cv} />} noContentScroll={false}
            menuOpen={menuOpen} toggleMenu={toggleMenu}
          />
        </Route>

        <Route exact path="/education">
          <Template
            title="Education" content={<Education cv={cv} />} noContentScroll={true}
            menuOpen={menuOpen} toggleMenu={toggleMenu}
          />
        </Route>

        <Route exact path="/experience">
          <Template
            title="Experience" content={<Experience cv={cv} />} noContentScroll={true}
            menuOpen={menuOpen} toggleMenu={toggleMenu}
          />
        </Route>

        <Route exact path="/projects">
          <Template
            title="Projects" content={<Projects cv={cv} />} noContentScroll={true}
            menuOpen={menuOpen} toggleMenu={toggleMenu}
          />
        </Route>
      </HashRouter>
    </IonApp>
  );
};

export default App;
