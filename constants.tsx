
import React from 'react';
import { ExperienceItem, TestimonialItem, SkillItem } from './types';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Mail, 
  Phone, 
  MessageCircle
} from 'lucide-react';

export const SIGNATURE_QUOTE = "Când comunici cu intenție, chiar și pauzele devin strategice.";

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Lorand Soares Szasz",
    location: "București",
    role: "Social Media Specialist / Strategist / Content & Campaign Manager",
    period: "05/2024 - Prezent",
    description: [
      "Gestionarea integrală a paginilor Upriserz, Lorand Soares Szasz și „Afaceri pe Bune”.",
      "Rol-cheie în lansarea și dezvoltarea podcastului „Afaceri pe Bune” (zeci de mii de vizualizări).",
      "Coordonarea strategiilor multi-platformă: Facebook, Instagram, LinkedIn, TikTok și YouTube.",
      "Crearea de conținut: hooks, copy, campanii tematice, subtitrări și scripturi pentru Reel-uri.",
      "Colaborare strânsă cu CEO-ul pentru definirea tonului de comunicare și personal branding."
    ]
  },
  {
    company: "FAN Courier România",
    location: "București",
    role: "Social Media Specialist",
    period: "05/2022 - 12/2023",
    description: [
      "Branding și strategii de comunicare în spațiul online pentru produse și servicii punctuale.",
      "Management de conținut pentru site-urile FAN Courier (România, Moldova, Internațional).",
      "Realizarea planului de conținut social media și coordonarea brief-urilor către agenții.",
      "Community management și monitorizarea trendurilor relevante."
    ]
  },
  {
    company: "Eurowestlein",
    location: "București",
    role: "Social Media Manager",
    period: "04/2020 - 03/2021",
    description: [
      "Creștere organică a brandului fără buget de promovare stabilit.",
      "Cercetarea pieței și stabilirea publicului țintă.",
      "Crearea calendarului de activități și monitorizarea traficului.",
      "Analiza impactului conținutului și optimizarea postărilor."
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Lorand Soares Szasz",
    role: "Fondator și CEO Upriserz",
    text: "Andreea este genul de profesionist care nu doar gestionează social media, ci construiește proiecte și comunități. A avut un rol-cheie în lansarea podcastului „Afaceri pe bune” de la zero. O recomand cu încredere pentru orice rol ce implică structurare și comunicare."
  },
  {
    name: "Petruta Canician",
    role: "Human Resources Specialist",
    text: "O persoană calmă, empatică și extrem de responsabilă. Are o capacitate foarte bună de a înțelege vocea brandului și avatarul de client. Este un profesionist deschis, colaborativ și un real sprijin pentru echipă."
  }
];

export const SKILLS: SkillItem[] = [
  {
    category: "Strategie & Management",
    skills: ["Content Planning", "Brand Strategy", "Community Management", "Market Research", "Campaign Analysis"]
  },
  {
    category: "Creare Conținut",
    skills: ["Copywriting (Hooks & Scripts)", "Video Editing (CapCut)", "Graphic Design (Canva)", "Social Media Ads"]
  },
  {
    category: "Platforme",
    skills: ["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube", "Creator Studio"]
  }
];

export const CONTACT_INFO = {
  email: "andreeaf.ilina@gmail.com",
  phone: "(+40) 769164886",
  whatsapp: "0769164886",
  location: "București, România",
  socials: [
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://www.instagram.com/andreeailiana/" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/andreea-iliana/" },
    { name: "Facebook", icon: <Facebook size={20} />, url: "#" }
  ]
};
