
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Home.css';
import { loadCV } from '../controller/cv_load';
import { CVType } from '../model/cv';

const Home: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  return (
    <>
      <IonGrid id="home-grid">
        <IonRow style={{ height: '100%' }}>
          <IonCol
            id="home-image-column"
            size="12"
            size-md="6"
            push-md="6"
          >
            <img
              id="home-image"
              src="/portfolio-page/assets/images/home/profile_home.jpg"
              alt="Home photo"
            />
          </IonCol>
          <IonCol
            id="home-text-column"
            size="12"
            size-md="6"
            pull-md="6"
          >
            <div id="home-text">
              <p id="home-title">
                Hey there,<br />
                Alberto here
              </p>
              <p id="home-subtitle">
                I'm computer scientist from<br />
                Canary Island, Spain
              </p>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default Home;
