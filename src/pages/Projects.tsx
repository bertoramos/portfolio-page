import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Projects.css';
import { CVType } from '../model/cv';
import ProjectComponent from '../components/ProjectComponent';

const Projects: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  const baseUrl = import.meta.env.BASE_URL;

  return (

    <>
      <div className='project-snap-container'>
        {
          cv?.projects.map((project, index) => (
            <div key={index} className='project-snap-section'>
              <ProjectComponent
                title={project.name}
                description={project.description}
                short_description={project.short_description}
                url={project.url}
                image={baseUrl + project.image}
                technologies={project.technologies}
              />
            </div>
          ))
        }
      </div>
    </>

  );
};

export default Projects;
