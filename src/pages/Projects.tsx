import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Projects.css';
import { CVType } from '../model/cv';
import ProjectComponent from '../components/ProjectComponent';

const Projects: React.FC<{ cv: CVType | null }> = ({ cv }) => {
  return (

    <IonContent fullscreen>
      <div className='snap-container'>
        {
          cv?.projects.map((project, index) => (
            <div key={index} className='snap-item bg-sky-500'>
              <ProjectComponent
                title={project.name}
                description={project.description}
                short_description={project.short_description}
                url={project.url}
                image={"image"}
                technologies={project.technologies}
              />
            </div>
          ))
        }
      </div>
    </IonContent>

  );
};

export default Projects;
