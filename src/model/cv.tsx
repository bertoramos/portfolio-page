
// Interfaces para el CV
interface TechnologyType {
  name: string;
  icon: string;
}

interface ContactType {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

interface AboutType {
  name: string;
  title: string;
  short_description: string;
  about_description: string;
}

interface ExperienceType {
  position: string;
  company: string;
  period: string;
  location: string;
  url: string;
  description: string;
  technologies: (TechnologyType | string)[];
  urls?: Array<{
    name: string;
    link: string;
  }>;
}

interface EducationType {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string | null;
  location: string;
  url: string;
  description: string;
  grade: string | null;
  technologies: TechnologyType[];
}

interface ProjectType {
  name: string;
  short_description: string;
  description: string;
  technologies: TechnologyType[];
  url: string;
}

interface CVType {
  contact: ContactType;
  about: AboutType;
  experience: ExperienceType[];
  education: EducationType[];
  projects: ProjectType[];
}

export type { CVType, TechnologyType, ContactType, AboutType, ExperienceType, EducationType, ProjectType };
