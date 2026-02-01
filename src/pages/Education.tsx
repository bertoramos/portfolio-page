import { IonIcon } from '@ionic/react';
import './Education.css';
import { CVType, EducationType } from '../model/cv';
import { globe, locationOutline, school } from 'ionicons/icons';
import TechChip from '../components/TechChip';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education: React.FC<{ cv: CVType | null }> = ({ cv }) => {

  const baseURL = import.meta.env.BASE_URL || '';
  const education = cv?.education || [];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const descriptionRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const [expandedHeights, setExpandedHeights] = useState<Record<number, number>>({});

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

  useLayoutEffect(() => {
    if (expandedIndex === null) return;
    const el = descriptionRefs.current[expandedIndex];
    if (!el) return;
    const height = el.scrollHeight;
    setExpandedHeights((prev) => (prev[expandedIndex] === height ? prev : { ...prev, [expandedIndex]: height }));
  }, [expandedIndex, education.length]);

  return (
    <>
      <section className="education-page w-full py-8 md:py-12" ref={containerRef}>

        <span className="experience-title block text-2xl sm:text-3xl md:text-5xl font-semibold pb-4 mb-8 md:mb-12 text-center w-full">
          Education
        </span>
        
        <VerticalTimeline>
          {education.map((edu: EducationType, index: number) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'var(--app_medium_background_color)', color: 'var(--app_main_text_color)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--app_medium_background_color)' }}
              date={edu.startDate + (edu.endDate ? ' - ' + edu.endDate : ' - Present')}
              iconStyle={{ background: 'var(--app_dark_background_color)', color: 'white' }}
              icon={<IonIcon icon={school} />}
              iconClassName="flex items-center justify-center"
            >
              <div
                className=""
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
                <p
                  className={
                    `education-description mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed ` +
                    (expandedIndex === index ? 'is-expanded' : 'is-collapsed')
                  }
                  ref={(el) => {
                    descriptionRefs.current[index] = el;
                  }}
                  style={
                    expandedIndex === index
                      ? { maxHeight: expandedHeights[index] ? `${expandedHeights[index]}px` : '1000px' }
                      : undefined
                  }
                >
                  {edu.description}
                </p>

                {/* Indicator */}
                {edu.description.length > 100 && (
                  <button
                    type="button"
                    className="see-more-button text-xs mt-1 inline-block"
                    onClick={(e) => handleClick(index, e)}
                    aria-expanded={expandedIndex === index}
                  >
                    {expandedIndex === index ? 'Ver menos' : 'Ver más...'}
                  </button>
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
