import { IonHeader, IonPage, IonIcon, IonToolbar, IonTitle, IonButtons, IonButton, IonMenu, IonContent, IonList, IonItem, IonMenuButton } from '@ionic/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { logoIonic } from 'ionicons/icons';

import "./Template.css";

const Template: React.FC<{ title: string, content: React.ReactNode }> = ({ title, content }) => {

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = (event: CustomEvent) => {
    const scrollTop = event.detail.scrollTop;
    setScrolled(scrollTop > 0);
    console.log('Scroll Top:', scrollTop);
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' }
  ];

  return (
    <>
      { /* Menu for mobile view */ }
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {menuItems.map(item => (
              <IonItem key={item.path}>
                <NavLink exact to={item.path}>{item.label}</NavLink>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
      
      <IonPage id="main-content">

        
        <IonHeader id="main_header">

          <IonToolbar id="menu_toolbar" className={scrolled ? 'scrolled' : ''}>

            { /* Menu button for mobile view */ }
            <IonButtons slot="start">
              <IonMenuButton className="mobile-menu-btn" />
            </IonButtons>
            
            { /* Title with logo */ }
            <IonTitle><IonIcon icon={logoIonic} />Portfolio</IonTitle>

            { /* Navigation for desktop view */ }
            <IonButtons slot="end" className="desktop-nav">
              {menuItems.map(item => (
                <IonButton key={item.path}>
                  <NavLink exact to={item.path}>{item.label}</NavLink>
                </IonButton>
              ))}
            </IonButtons>
          </IonToolbar>

        </IonHeader>
        <IonContent onIonScroll={handleScroll} scrollEvents={true}>
          {content}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Template;
