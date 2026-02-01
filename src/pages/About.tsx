import './About.css';
import { CVType } from '../model/cv';
import { IonChip, IonCol, IonGrid, IonIcon, IonRow, IonText } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { logoGithub, logoLinkedin, mail } from 'ionicons/icons';
import TechChip from '../components/TechChip';

const mapDarkVersion = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1755473.231203864!2d-15.771856166834326!3d28.471129475164613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2ses!4v1769590999372!5m2!1ses!2ses";

/* FIXME: arreglar zoom del mapa en version LIGHT */
const mapLightVersion = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1795727.0820230588!2d-15.771856166834326!3d28.471129475164613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1769591032260!5m2!1ses!2ses";

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
          <div>
            <p className='p-8 text-xl md:text-2xl text-center whitespace-pre-wrap'>{cv?.about.about_description}</p>
            <p className='pt-2 pb-4 text-xl md:text-2xl text-center whitespace-pre-wrap'>{cv?.about.about_appeal}</p>
            <p className='pt-10 pb-20 text-xl md:text-2xl text-center whitespace-pre-wrap'>{cv?.about.about_take_care}</p>
          </div>
        </section>
        <section id="skills-section" className="about-section">
          <IonGrid className="about-skills-grid">

            <IonRow className="about-skills-title">
              <IonCol
                sizeMd="12"
                className="ion-text-center"
              >
                <IonText className="text-3xl about-bold-title">
                  Skills
                </IonText>
              </IonCol>
            </IonRow>
            <div className="skills-grid-container" ref={skillsContainerRef}>
              {categories.map((category) => (
                <div key={category} className="tech-category">
                  <span className="category-label text-xl about-bold-title text-center block w-full mb-4">{category}</span>
                  <div className="tech-items-container flex flex-col items-center gap-1">
                    {technologies
                      .filter(([_, tech]) => (tech.categoryLabel || 'Other') === category)
                      .map(([techKey, tech], idx) => (
                        <TechChip
                          className={`tech-item ${skillsVisible ? 'visible' : ''}`}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                          tech={tech}
                          key={idx}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </IonGrid>
        </section>
        <section id="why-work-with-me-section" className="about-section">
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd='6' className="text-justify md:text-left flex flex-col">
                <p className="about-bold-title text-2xl mb-4 text-center">Why work with me?</p>
                <p className="mb-4 ml-4 mr-4 md:ml-8">
                  With a background in computer science, I'm trained to think in terms of problems and solutions. I like looking at strange and interesting ideas, and working out how to make them real.
                </p>
                <p className="mb-4 ml-4 mr-4 md:ml-8">
                  I'm curious, honest, and I don't like doing things on autopilot. If something can be done better, I'll question it.
                </p>
                <p className="mb-4 ml-4 mr-4 md:ml-8">
                  I care about what I build, and the people I build it with. I value clear communication, responsibility, appreciation, and doing things right without overcomplicating them. I take care of my work, and I treat projects as if they were my own.
                </p>
              </IonCol>

              <IonCol size="12" sizeMd='6' className="ion-text-center">
                <img
                  src="/portfolio-page/assets/images/about/why-work-with-me.png"
                  alt="Why work with me illustration"
                  className="why-work-with-me-image mt-8"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>
        <section id="location-section" className="about-section">
          <IonGrid className="ion-no-padding">
            <IonRow className="flex flex-col md:flex-row gap-4 md:gap-2 p-4">
              <IonCol size="12" sizeMd="4" className="offline-col ion-text-center flex flex-col items-center">
                <h3 className="about-bold-title text-2xl mb-20">Offline</h3>
                <p className="text-base max-w-md mt-8 text-justify">
                  {cv?.about.about_offline}
                </p>
              </IonCol>
              <IonCol size="12" sizeMd="4" className="online-col ion-text-center flex flex-col items-center">
                <h3 className="about-bold-title text-2xl mb-10">Online</h3>
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
              <IonCol size="12" sizeMd="3" className="based-in-col ion-text-center flex flex-col items-center">
                <h3 className="about-bold-title text-2xl mb-10">Based in</h3>
                <div className="google-map-code w-full max-w-md mt-8">

                  <iframe
                    src={document.documentElement.getAttribute("data-theme") === "dark" ? mapDarkVersion : mapLightVersion}
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

