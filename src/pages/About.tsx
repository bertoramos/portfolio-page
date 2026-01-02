
import './About.css';
import { CVType } from '../model/cv';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

const About: React.FC<{ cv: CVType | null }> = ({ cv }) => {
  {
    /*
    short-resume
    long-resume
    photo?
    skills
    location
    */
  }

  return (

    <>
      <div className="about-page-container">
        <div id="short-resume-section" className="about-section">
          {cv?.about.short_description}
        </div>
        <div id="long-resume-section" className="about-section">
          {cv?.about.about_description}
        </div>
        <div id="skills-section" className="about-section">
          <h2>Skills</h2>
        </div>
        <div id="location-section" className="about-section">
          <IonGrid>
            <IonRow>
              <IonCol sizeMd="4" className="ion-text-center">
                Offline
              </IonCol>
              <IonCol sizeMd="4" className="ion-text-center">
                Online
              </IonCol>
              <IonCol sizeMd="4" className="ion-text-center">
                Location
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
    </>

  );
};

export default About;
