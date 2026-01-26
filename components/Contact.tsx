
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-indigo-600 rounded-[50px] p-12 lg:p-20 shadow-2xl shadow-indigo-200 relative overflow-hidden">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-serif">Să transformăm împreună prezența brandului tău.</h2>
              <p className="text-indigo-100 text-lg">
                Ești gata să îți crești comunitatea? Trimite-mi un mesaj sau sună-mă direct pentru o consultanță.
              </p>
              
              <div className="space-y-6 pt-4">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all">
                    <Mail size={24} />
                  </div>
                  <span className="text-xl font-medium">{CONTACT_INFO.email}</span>
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all">
                    <Phone size={24} />
                  </div>
                  <span className="text-xl font-medium">{CONTACT_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <span className="text-xl font-medium">{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
               <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Trimite un semnal rapid</h3>
               <div className="flex flex-col gap-4">
                 <a 
                   href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-all shadow-md shadow-green-100"
                 >
                   <MessageCircle size={20} />
                   Contact pe Whatsapp
                 </a>
                 <p className="text-center text-slate-400 text-sm italic">
                   Răspund de obicei în maximum 2 ore.
                 </p>
                 <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                   <p className="text-slate-500 mb-4 font-medium uppercase tracking-widest text-xs">Urmărește-mă pe</p>
                   <div className="flex justify-center gap-6">
                     {CONTACT_INFO.socials.map((social, idx) => (
                       <a 
                         key={idx} 
                         href={social.url} 
                         className="text-slate-400 hover:text-indigo-600 transition-colors"
                         aria-label={social.name}
                       >
                         {social.icon}
                       </a>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
