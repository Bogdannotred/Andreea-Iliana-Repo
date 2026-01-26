
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  location: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  image?: string;
}

export interface SkillItem {
  category: string;
  skills: string[];
}
