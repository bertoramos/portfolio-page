import './About.css';
import { CVType } from '../model/cv';
import { IonChip, IonCol, IonGrid, IonIcon, IonRow, IonText } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { logoGithub, logoLinkedin, mail } from 'ionicons/icons';


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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </IonCol>
              <IonCol sizeMd="4" className="ion-text-center">
                Online
                <ul>
                  <li><IonIcon icon={logoGithub} /> <a href={cv?.contact.github || '#'} target="_blank" rel="noopener noreferrer">{cv?.contact.github || 'N/A'}</a></li>
                  <li><IonIcon icon={logoLinkedin} /> <a href={cv?.contact.linkedin || '#'} target="_blank" rel="noopener noreferrer">{cv?.contact.linkedin || 'N/A'}</a></li>
                  <li><IonIcon icon={mail} /> <a href={`${cv?.contact.email || ''}`} target="_blank" rel="noopener noreferrer">{cv?.contact.email.slice(7) || 'N/A'}</a></li>
                </ul>
              </IonCol>
              <IonCol sizeMd="4" className="ion-text-center">
                Based in
                <div className="google-map-code">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2264142.544824199!2d-15.26492770059671!3d28.393133433208302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1767631204684!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>
      </div>
    </>

  );
};

export default About;

