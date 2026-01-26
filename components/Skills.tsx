
import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="abilitati" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-serif text-slate-900 leading-tight">
              Abilități & <br /><span className="text-indigo-600">Competențe</span>
            </h2>
            <p className="text-slate-600">
              Utilizez o gamă largă de instrumente profesionale pentru a asigura vizibilitate maximă și eficiență fiecărui proiect. De la editare video la analiză complexă de date.
            </p>
            <div className="pt-4">
              <div className="p-6 bg-indigo-600 rounded-2xl text-white shadow-xl shadow-indigo-200">
                <h4 className="text-lg font-bold mb-2">Educație</h4>
                <p className="text-indigo-100 text-sm mb-4">Masterat: Brand Management și Comunicare Corporativă (SNSPA)</p>
                <div className="w-full h-px bg-white/20 mb-4"></div>
                <p className="text-indigo-100 text-sm italic">"Am capacitatea de a înțelege vocea brandului și publicul-țintă."</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 text-slate-700 text-sm rounded-full border border-slate-100 hover:bg-indigo-50 hover:text-indigo-700 transition-all cursor-default"
                    >
                      <CheckCircle2 size={14} className="text-indigo-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Langs card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 md:col-span-2">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Competențe Lingvistice</h3>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                 <div className="space-y-1">
                   <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Română</p>
                   <p className="text-slate-900 font-medium italic">Maternă</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Engleză</p>
                   <p className="text-slate-900 font-medium italic italic">B1/B2 (Independent)</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Spaniolă</p>
                   <p className="text-slate-900 font-medium italic italic">A2 (Elementar)</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
