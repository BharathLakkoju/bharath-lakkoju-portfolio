export interface Meta {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  availability: string;
  bio: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  stack: string[];
  highlights: string[];
  category: string;
  featured: boolean;
  liveUrl: string;
  githubUrl: string;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  aiml: string[];
  devops: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  gpa: string;
  year: string;
}

export interface PortfolioData {
  meta: Meta;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  achievements: string[];
}
