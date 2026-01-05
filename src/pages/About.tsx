import './About.css';
import { CVType } from '../model/cv';
import { IonChip, IonCol, IonGrid, IonIcon, IonRow, IonText } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';


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

  // Obtener todas las tecnologias
  const technologies = Object.entries(cv?.technologies || {});
  const categories = Array.from(new Set(technologies.map(([_, tech]) => tech.categoryLabel || 'Other')));
  
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setSkillsVisible(entry.isIntersecting)
      });
    });

    if (skillsContainerRef.current) {
      skillsObserver.observe(skillsContainerRef.current);
    }

    return () => {
      if (skillsContainerRef.current) {
        skillsObserver.unobserve(skillsContainerRef.current);
      }
    };
  }, []);

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
          <IonGrid className="about-skills-grid">

            <IonRow className="about-skills-title">
              <IonCol
                sizeMd="12"
                className="ion-text-center"
              >
                <IonText className="text-3xl">
                  Skills
                </IonText>
              </IonCol>
            </IonRow>
            <div className="skills-grid-container" ref={skillsContainerRef}>
              {categories.map((category) => (
                <div key={category} className="tech-category">
                  <span className="category-label text-xl font-bold text-center block w-full mb-4">{category}</span>
                  <div className="tech-items-container flex flex-col items-center gap-1">
                    {technologies
                      .filter(([_, tech]) => (tech.categoryLabel || 'Other') === category)
                      .map(([techKey, tech], idx) => (
                        <IonChip
                          className={`tech-item ${skillsVisible ? 'visible' : ''}`}
                          key={techKey}
                          style={{ transitionDelay: `${idx * 120}ms` }}  // escalonado por índice
                        >
                          <IonIcon src={tech.icon || ""} />
                          {tech.name}
                        </IonChip>
                      ))}
                  </div>
                </div>
              ))}
            </div>
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

