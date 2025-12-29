import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './About.css';
import { CVType } from '../model/cv';

const About: React.FC<{ cv: CVType | null }> = ({ cv }) => {
  return (
    
    <>
    {
      Array.from({ length: 10 }, (_, i) => (
        <p key={i}>{cv?.about.about_description}</p>
      ))
    }
      

    </>
    
  );
};

export default About;
