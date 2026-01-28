import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Education.css';
import { CVType, EducationType } from '../model/cv';
import { globe, locationOutline, school } from 'ionicons/icons';
import TechChip from '../components/TechChip';
import { useState, useEffect, useRef } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  const baseURL = import.meta.env.BASE_URL || '';
  const education = cv?.education || [];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpandedIndex(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <section className="education-page w-full py-8 md:py-12">

        <h2 className="education-title text-2xl sm:text-3xl md:text-4xl font-semibold pb-2 mb-8 md:mb-12 text-center">Education</h2>

        <VerticalTimeline>
          {education.map((edu: EducationType, index: number) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'var(--app_medium_background_color)', color: 'var(--app_main_text_color)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--app_medium_background_color)' }}
              date={edu.startDate + (edu.endDate ? ' - ' + edu.endDate : ' - Present')}
              iconStyle={{ background: 'var(--app_dark_background_color)', color: 'var(--app_light_background_color)' }}
              icon={<IonIcon icon={school} />}
              iconClassName="flex items-center justify-center"
            >
              <div
                className=""
                onClick={(e) => handleClick(index, e)}
                ref={index === 0 ? containerRef : null}
              >
                
                {/* Degree / Institution */}
                <h3 className="education-company-role text-base sm:text-lg font-medium leading-tight">
                  {edu.degree}
                  <span>
                    {" "}
                    · {edu.institution}
                  </span>
                </h3>

                {/* Location and URL */}
                <div className="education-meta mt-1 sm:mt-2 text-xs sm:text-sm flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <IonIcon icon={locationOutline} className="text-xs" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <IonIcon icon={globe} className="text-xs" />
                    <a className='hover:underline' href={edu.url} target="_blank" rel="noreferrer">{edu.url}</a>
                  </div>
                </div>

                {/* Summary - Truncated with click to expand */}
                <p className="education-description mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed transition-all duration-300">
                  {expandedIndex === index
                    ? edu.description
                    : edu.description.split(' ').slice(0, 4).join(' ') + '...'}
                </p>

                {/* Indicator */}
                {edu.description.length > 100 && (
                  <span className="see-more-button text-xs text-blue-500 mt-1 inline-block">
                    {expandedIndex === index ? 'Ver menos' : 'Ver más...'}
                  </span>
                )}

                {/* Stack */}
                <ul className="education-technologies mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 text-xs">
                  {edu.technologies.map((tech) => (
                    <TechChip key={tech.name} tech={tech} />
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<IonIcon icon={school} />}
            iconClassName="flex items-center justify-center"
          />
        </VerticalTimeline>

      </section>
    </>
  );
};

export default Education;
