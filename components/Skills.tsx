
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
              Portofoliu <br /><span className="text-indigo-600">Brand-uri</span>
            </h2>
            <p className="text-slate-600">
              Colaborez cu branduri care își doresc să construiască comunități reale și să comunice autentic.
            </p>
          </div>

          <div className="lg:col-span-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
