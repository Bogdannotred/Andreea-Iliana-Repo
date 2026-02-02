
import React from 'react';
import { ArrowRight, Sparkles, Quote } from 'lucide-react';
import { SIGNATURE_QUOTE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements matched to the photo's blue/purple lighting */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles size={14} className="animate-pulse" />
              Social Media Specialist
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] text-slate-900">
              Mai puțin zgomot. <span className="text-blue-600 italic">Mai mult sens.</span>
            </h1>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-white border border-slate-100 rounded-2xl shadow-xl italic text-slate-700 text-xl font-medium leading-relaxed">
                Ajut antreprenori și branduri să folosească social media ca instrument de decizie și creștere.
              </div>
            </div>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Sunt Andreea Ilina. Experiența mea ajută brandurile să-și transforme social media din zgomot în claritate și creștere.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href="#experienta"
                className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Vezi proiectele mele
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-10 py-5 rounded-full font-bold text-slate-700 hover:bg-slate-100 transition-all border-2 border-slate-200"
              >
                Contactează-mă
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(30,58,138,0.25)] border-[12px] border-white transform rotate-2 hover:rotate-0 transition-all duration-700">
              <img
                src="./andreea_iliana.jpg"
                alt="Andreea Ilina - Specialist Social Media"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Disponibilă pentru colaborări</span>
                </div>

                <p className="text-sm opacity-80 uppercase tracking-tighter">Andreea Ilina</p>
              </div>
            </div>

            {/* Geometric accents */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
