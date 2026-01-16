import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Education.css';
import { CVType } from '../model/cv';
import { globe, locationOutline } from 'ionicons/icons';
import TechChip from '../components/TechChip';

const Education: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  const baseURL = import.meta.env.BASE_URL || '';
  const education = cv?.education || [];

  return (

    <>
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
              <div slot="content">
                <IonCard>
                  <IonCardHeader className="m-8">
                    <IonRow>
                      <IonCol size="auto">
                        <IonIcon className="ml-2 mr-2" icon={locationOutline} /> {edu.location}
                      </IonCol>
                      <IonCol size="auto">
                        <IonIcon className="ml-2 mr-2" icon={globe} /> <a className='hover:underline font-bold' href={edu.url} target="_blank">{edu.url}</a>
                      </IonCol>
                    </IonRow>
                  </IonCardHeader>
                  <IonCardContent className="m-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div>{edu.description}</div>
                        <div className='ion-padding-top'>{
                          edu.technologies.map((tech, index) => (
                            <IonCol key={index} size="auto" >
                              <TechChip tech={tech} />
                            </IonCol>
                          ))
                        }</div>
                      </div>
                      <div className="w-24 h-24 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img  
                          src={baseURL + edu.institution_logo} 
                          alt={"logo " + edu.institution}
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

export default Education;
