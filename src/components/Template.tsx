import { IonHeader, IonPage, IonIcon, IonToolbar, IonTitle, IonButtons, IonButton, IonMenu, IonContent, IonList, IonItem, IonMenuButton } from '@ionic/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { chatbubblesOutline, logoIonic } from 'ionicons/icons';

import "./Template.css";
import Contact from '../pages/Contact';
import Menu from './Menu';

const Template: React.FC<{ title: string, content: React.ReactNode, noContentScroll?: boolean, menuOpen: boolean, toggleMenu: () => void }> = ({ title, content, noContentScroll = false, menuOpen, toggleMenu }) => {

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = (event: CustomEvent) => {
    const scrollTop = event.detail.scrollTop;
    setScrolled(scrollTop > 0);
  };

  return (
    <>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <IonPage id="main-content">
        
        <IonHeader
          id="main_header"
          translucent={true}
          className='ion-no-border'
          >

          <IonToolbar id="menu_toolbar" className={scrolled ? 'scrolled' : ''}>

            { /* Menu button for mobile view */ }
            <IonButtons slot="start">
              <IonMenuButton className="mobile-menu-btn" />
            </IonButtons>
            
            { /* Title with logo */ }
            <IonTitle><IonIcon icon={logoIonic} />Portfolio</IonTitle>

          </IonToolbar>

        </IonHeader>
        <IonContent fullscreen onIonScroll={handleScroll} scrollEvents={true} scrollY={!noContentScroll}>
          {content}
        </IonContent>
        
        
      </IonPage>
    </>
  );
};

export default Template;
