import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Education.css';
import { CVType } from '../model/cv';
import { globe, locationOutline } from 'ionicons/icons';

const Education: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  const education = cv?.education || [];

  return (

    <>
      <div className="bg-sky-500 education-bg">
        <h1 className="text-white text-center text-4xl font-bold p-4">Education</h1>

        <IonAccordionGroup expand="inset" className="m-8">

          {education.length === 0 ? (
            <p>Error cargando CV</p>
          ) : (
            education.map((edu, index) => (
              <IonAccordion key={index} value={`edu-${index}`} toggleIconSlot="end">
                <IonItem slot="header" color="light">
                  <IonLabel>{edu.degree} @ {edu.institution}</IonLabel>
                  <IonLabel className="mr-8" slot="end">{edu.startDate} - {edu.endDate || 'Present'}</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  <IonCard>
                    <IonCardHeader>
                      <IonRow>
                        <IonCol size="auto">
                          <IonIcon icon={locationOutline} /> {edu.location}
                        </IonCol>
                        <IonCol size="auto">
                          <IonIcon icon={globe} /> <a href={edu.url} target="_blank">{edu.url}</a>
                        </IonCol>
                      </IonRow>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonRow>
                        <IonCol offset="0" size="12" size-md="2" push-md="9.5" className="ion-text-center">
                          <img src={"logo"} alt={"logo"} />
                        </IonCol>
                        <IonCol size="12" size-md="9" pull-md="2">
                          <div>{edu.description}</div>
                          <div className='ion-padding-top'>{
                            edu.technologies.map((tech, index) => (
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

export default Education;
