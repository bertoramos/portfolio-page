import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Experience.css';
import { CVType } from '../model/cv';
import { locationOutline, globe } from 'ionicons/icons';
import TechChip from '../components/TechChip';

const Experience: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  const baseURL = import.meta.env.BASE_URL || '';
  const experience = cv?.experience || [];

  return (

    <>
      <h1 className="text-white text-center text-4xl font-bold p-4">Experience</h1>

      <IonAccordionGroup expand="inset" className="m-8">

        {experience.length === 0 ? (
          <p>Error cargando CV</p>
        ) : (
          experience.map((exp, index) => (
            <IonAccordion key={index} value={`exp-${index}`} toggleIconSlot="end">
              <IonItem slot="header" color="light">
                <IonLabel>{exp.position} @ {exp.company}</IonLabel>
                <IonLabel className="mr-8" slot="end">{exp.startDate} - {exp.endDate || 'Present'}</IonLabel>
              </IonItem>
              <div slot="content">
                <IonCard>
                  <IonCardHeader className="m-8">
                    <IonRow>
                      <IonCol size="auto">
                        <IonIcon className="ml-2 mr-2" icon={locationOutline} /> {exp.location}
                      </IonCol>
                      <IonCol size="auto">
                        <IonIcon className="ml-2 mr-2" icon={globe} /> <a href={exp.url} target="_blank">{exp.url}</a>
                      </IonCol>
                    </IonRow>
                  </IonCardHeader>
                  <IonCardContent className="m-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div>{exp.description}</div>
                        <div className='ion-padding-top'>{
                          exp.technologies.map((tech, index) => (
                            <IonCol key={index} size="auto" >
                              <TechChip tech={tech} />
                            </IonCol>
                          ))
                        }</div>
                      </div>
                      <div className="w-24 h-24 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img 
                          src={baseURL + exp.company_logo} 
                          alt={"logo " + exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonAccordion>
          ))
        )
        }
      </IonAccordionGroup>
      </>
  
    );
};

export default Experience;
