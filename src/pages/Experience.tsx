import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Experience.css';
import { CVType } from '../model/cv';
import { locationOutline, globe } from 'ionicons/icons';

const Experience: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  const experience = cv?.experience || [];

  return (
  
      <>
        <div className="bg-sky-500 education-bg">
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
                  <div className="ion-padding" slot="content">
                    <IonCard>
                      <IonCardHeader>
                        <IonRow>
                          <IonCol size="auto">
                            <IonIcon icon={locationOutline} /> {exp.location}
                          </IonCol>
                          <IonCol size="auto">
                            <IonIcon icon={globe} /> <a href={exp.url} target="_blank">{exp.url}</a>
                          </IonCol>
                        </IonRow>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonRow>
                          <IonCol offset="0" size="12" size-md="2" push-md="9.5" className="ion-text-center">
                            <img src={"logo"} alt={"logo"} />
                          </IonCol>
                          <IonCol size="12" size-md="9" pull-md="2">
                            <div>{exp.description}</div>
                            <div className='ion-padding-top'>{
                              exp.technologies.map((tech, index) => (
                                <IonCol key={index} size="auto" >
                                  <IonChip>
                                    <IonIcon icon={tech.icon}></IonIcon>
                                    <IonLabel>{tech.name}</IonLabel>
                                  </IonChip>
                                </IonCol>
                              ))
                            }</div>
                          </IonCol>
                        </IonRow>
                      </IonCardContent>
                    </IonCard>
                  </div>
                </IonAccordion>
              ))
            )
            }
          </IonAccordionGroup>
        </div>
      </>
  
    );
};

export default Experience;
