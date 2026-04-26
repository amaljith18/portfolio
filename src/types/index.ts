export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: 'full-time' | 'freelance' | 'contract';
  description: string[];
  tech: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
