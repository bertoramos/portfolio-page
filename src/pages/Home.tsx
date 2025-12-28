
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Home.css';
import { loadCV } from '../controller/cv_load';
import { CVType } from '../model/cv';

const Home: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  return (
    <>
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
      {cv && <p>{cv.about.about_description}</p>}
    </>
  );
};

export default Home;
