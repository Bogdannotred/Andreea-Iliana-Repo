
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimoniale" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Ce spun colaboratorii mei</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px] relative">
              <Quote className="absolute top-8 right-8 text-indigo-500/40" size={40} />
              <p className="text-lg text-slate-300 leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover object-top ring-2 ring-blue-600 ring-offset-2 ring-offset-white shadow-md"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xl ring-2 ring-blue-600 ring-offset-2 ring-offset-white shadow-md">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-indigo-400 uppercase tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
