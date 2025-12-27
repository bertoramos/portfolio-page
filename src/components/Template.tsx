import { IonHeader, IonPage, IonIcon } from '@ionic/react';
import React from 'react';

import { logoIonic } from 'ionicons/icons';

import "./Template.css";
import { Link } from 'react-router-dom';

const Template: React.FC<{ title: string, content: React.ReactNode }> = ({ title, content }) => {

  return (

    <IonPage>

      <IonHeader id="main_header">
        {

        }
      </IonHeader>

      {}

      {content}

    </IonPage>

  );
};

export default Template;
