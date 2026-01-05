
import './About.css';
import { CVType } from '../model/cv';
import { IonCol, IonGrid, IonRow, IonText } from '@ionic/react';

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

  const createGrid = (rows: number, cols: number, content: any[]) => {
    return Array.from({ length: rows }, (_, rowIndex) => (
      <IonRow key={rowIndex}>
        {Array.from({ length: cols }, (_, colIndex) => (
          <IonCol key={colIndex}>
            {content[rowIndex * cols + colIndex]}
          </IonCol>
        ))}
      </IonRow>
    ));
  };

  // Obtener todas las tecnologias
  const technologies = Object.entries(cv?.technologies || {});
  const categories = Array.from(new Set(technologies.map(([_, tech]) => tech.categoryLabel || 'Other')));

  return (

    <>
      <div className="about-page-container">
        <section id="short-resume-section" className="about-section">
          {cv?.about.short_description}
        </section>
        <section id="long-resume-section" className="about-section">
          {cv?.about.about_description}
        </section>
        <section id="skills-section" className="about-section">
          <IonGrid>
            <IonRow>
              <IonCol
                sizeMd="12"
                className="ion-text-center ion-padding-bottom"
              >
                <IonText className="text-3xl">
                  Skills
                </IonText>
              </IonCol>
            </IonRow>
            {
              createGrid(2, 5, categories.map(
                (category) => (
                  <div key={category} className="tech-category">
                    <span className="category-label text-xl font-bold" key={category}>{category}</span>
                    <ul>
                      {technologies.filter(([_, tech]) => (tech.categoryLabel || 'Other') === category)
                        .map(([techKey, tech]) => (
                          <li className='tech-item' key={techKey}>{tech.name}</li>
                        ))}
                    </ul>
                  </div>
                )))
            }
          </IonGrid>
        </section>
        <section id="location-section" className="about-section">
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
        </section>
      </div>
    </>

  );
};

export default About;
