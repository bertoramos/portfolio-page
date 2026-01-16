import './About.css';
import { CVType } from '../model/cv';
import { IonChip, IonCol, IonGrid, IonIcon, IonRow, IonText } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { logoGithub, logoLinkedin, mail } from 'ionicons/icons';

var offline_text = "Outside of coding and research, I enjoy a variety of activities that help me maintain balance and perspective. Sports play an important role in my routine, helping me stay active, focused, and energized. I also dedicate time to creative pursuits, which allow me to disconnect from technical work and explore my artistic side.";

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
          <IonGrid id="about-grid">
            <IonRow style={{ height: '100%' }}>
              <IonCol
                id="about-image-column"
                size="12"
                size-md="6"
                push-md="6"
              >
                <img
                  id="about-image"
                  src="/portfolio-page/assets/images/about/profile_about.jpg"
                  alt="about photo"
                />
              </IonCol>
              <IonCol
                id="about-text-column"
                size="12"
                size-md="6"
                pull-md="6"
              >
                <div id="about-text">
                  <p id="about-title">
                    I'm Alberto
                  </p>
                  <p id="about-subtitle">
                    {cv?.about.short_description}
                  </p>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>
        <section id="long-resume-section" className="about-section">
          <p>
            <p className='p-8 text-xl md:text-2xl text-center whitespace-pre-wrap'>{cv?.about.about_description}</p>
            <p className='pt-2 pb-4 text-xl md:text-2xl text-center whitespace-pre-wrap'>{cv?.about.about_appeal}</p>
            <p className='pt-10 pb-20 text-xl md:text-2xl text-center whitespace-pre-wrap'>{cv?.about.about_take_care}</p>
          </p>
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
          <IonGrid className="ion-no-padding">
            <IonRow className="flex flex-col md:flex-row gap-4 md:gap-2 p-4">
              <IonCol size="12" sizeMd="4" className="ion-text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-20">Offline</h3>
                <p className="text-base max-w-md mt-8">
                  {offline_text}
                </p>
              </IonCol>
              <IonCol size="12" sizeMd="4" className="ion-text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-10">Online</h3>
                <ul className="list-none space-y-2 mt-8">
                  <li className="flex items-center justify-center gap-2">
                    <IonIcon icon={logoGithub} className="text-xl" />
                    <a href={cv?.contact.github || '#'} target="_blank" rel="noopener noreferrer" className="hover:underline">{cv?.contact.github || 'N/A'}</a>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <IonIcon icon={logoLinkedin} className="text-xl" />
                    <a href={cv?.contact.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="hover:underline">{cv?.contact.linkedin || 'N/A'}</a>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <IonIcon icon={mail} className="text-xl" />
                    <a href={`${cv?.contact.email || ''}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{cv?.contact.email.slice(7) || 'N/A'}</a>
                  </li>
                </ul>
              </IonCol>
              <IonCol size="12" sizeMd="3" className="ion-text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-10">Based in</h3>
                <div className="google-map-code w-full max-w-md mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2264142.544824199!2d-15.26492770059671!3d28.393133433208302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1767631204684!5m2!1ses!2ses"
                    className="w-full h-64 md:h-80 rounded-lg shadow-md"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
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

