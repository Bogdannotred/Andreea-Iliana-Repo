
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { SIGNATURE_QUOTE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        {/* Intro section */}
        <Hero />

        {/* About section - Redesigned to fit the event photo style */}
        <section id="despre" className="py-24 bg-gradient-to-b from-white to-blue-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white p-12 lg:p-20 rounded-[3rem] shadow-2xl shadow-blue-100/50 border border-slate-100 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-2/5 relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10 opacity-10"></div>
                <img
                  src="./andreea_iliana_poza2.jpeg"
                  alt="Andreea Iliana - Despre"
                  className="rounded-3xl shadow-lg shadow-blue-200/50 grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop";
                  }}
                />
                <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter shadow-lg">
                  Expertiză 360°
                </div>
              </div>

              <div className="lg:w-3/5 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Despre Mine</h3>
                  <h2 className="text-4xl font-serif text-slate-900 leading-tight">Specialistul care înțelege <br /><span className="text-blue-600">vocea brandului tău.</span></h2>
                </div>

                <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                  <p>Mă implic în fiecare brand cu care lucrez ca și cum ar fi al meu.</p>
                  <p>Îmi pun întrebări, caut soluții, testez, optimizez. Nu las lucrurile „să meargă și așa”. Pentru mine, fiecare cont are potențial de creștere.</p>
                  <p className="font-medium text-slate-800">Nu sunt doar omul care postează. Sunt omul care gândește, structurează și are grijă ca lucrurile să funcționeze.</p>
                </div>

                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 my-6">
                  <p className="text-blue-800 font-medium text-sm">
                    <span className="font-bold">Educație:</span> Masterat în Brand Management și Comunicare Corporativă (SNSPA)
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-8 pt-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Strategie Integrală</h4>
                      <p className="text-sm text-slate-500 leading-snug">De la research și planificare până la execuție și monitorizare.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Optimizare Performanță</h4>
                      <p className="text-sm text-slate-500 leading-snug">Analiză constantă pentru a maximiza impactul fiecărei postări.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl items-center">
                  <div className="text-3xl font-serif text-blue-600 pr-4 border-r border-slate-200">6+</div>
                  <p className="text-sm font-medium text-slate-700">Ani de experiență în branding și comunicare corporativă.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Andreea Ilina. Toate drepturile rezervate.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#despre" className="hover:text-blue-600 transition-colors">Despre</a>
            <a href="#abilitati" className="hover:text-blue-600 transition-colors">Abilități</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
