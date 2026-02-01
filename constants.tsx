
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
    text: "Comunicarea a fost mereu deschisă și ușoară, iar abordarea ei prietenoasă a contribuit la o colaborare naturală și eficientă. Continui cu încredere colaborarea cu Andreea și o recomand mai departe tuturor celor care își doresc un Social Media Manager atent, implicat și profesionist.",
    image: "/Lorand.jpeg"
  },
  {
    name: "Damaris Galai",
    role: "Canvas Dreams",
    text: "Colaborarea mea cu Andreea, în calitate de Social Media Manager, a fost una foarte eficientă și plăcută. Din punct de vedere profesional, este o persoană responsabilă, bine organizată și punctuală, respectând constant termenele stabilite. Un aspect pe care l-am apreciat în mod deosebit a fost faptul că a înțeles foarte bine dorințele și obiectivele mele încă de la început, le-a implementat exact așa cum au fost discutate și nu a fost nevoie de explicații repetate sau corecturi majore."
  }
];

export const SKILLS: SkillItem[] = [
  {
    category: "Brand-uri cu care am lucrat",
    skills: ["Lorand Soares Szasz", "Upriserz", "Afaceri pe bune", "FAN Courier", "Canvas Dreams", "BUG52", "Spionescu"]
  }
];

export const CONTACT_INFO = {
  email: "ilisparkmedia@gmail.com",
  phone: "(+40) 769164886",
  whatsapp: "0769164886",
  location: "București, România",
  socials: [
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://www.instagram.com/andreeailiana/" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/andreea-iliana/" },
    { name: "Facebook", icon: <Facebook size={20} />, url: "#" }
  ]
};
