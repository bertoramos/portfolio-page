import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Projects.css';
import { CVType } from '../model/cv';

const Projects: React.FC<{ cv: CVType | null }> = ({ cv }) => {
  return (
    
    <IonContent fullscreen>
      <div className='snap-container'>
        <div className='snap-item'>
          Project 1
        </div>
        <div className='snap-item bg-green-500'>
          Project 2
        </div>
        <div className='snap-item bg-blue-500'>
          Project 3
        </div>
      </div>
    </IonContent>
    
  );
};

export default Projects;
