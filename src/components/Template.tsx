import { IonHeader, IonPage, IonIcon, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { logoIonic } from 'ionicons/icons';

import "./Template.css";

const Template: React.FC<{ title: string, content: React.ReactNode }> = ({ title, content }) => {

  return (

    <IonPage>

      <IonHeader id="main_header">
        <IonToolbar>
          
          
          <IonTitle><IonIcon icon={logoIonic} />Portfolio</IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <NavLink exact to="/">Home</NavLink>
            </IonButton>
            <IonButton>
              <NavLink exact to="/about">About</NavLink>
            </IonButton>
            <IonButton>
              <NavLink exact to="/education">Education</NavLink>
            </IonButton>
            <IonButton>
              <NavLink exact to="/experience">Experience</NavLink>
            </IonButton>
            <IonButton>
              <NavLink exact to="/projects">Projects</NavLink>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {content}

    </IonPage>

  );
};

export default Template;
