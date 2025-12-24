
import React from 'react';
import { ArrowRight, BookOpen, Users, Lightbulb, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://i.imgur.com/gYvH0ij.jpeg" 
            alt="Ethiopian Youth and AI" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 bg-[#00885a] text-xs font-bold uppercase tracking-widest rounded-full mb-6 animate-bounce">
              Official Portal
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Powering Ethiopia's <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00885a] to-[#fcd116]">AI Revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Advancing national prosperity through artificial intelligence. Reimagining an inclusive digital future for every Ethiopian citizen.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('#education')}
                className="px-8 py-4 bg-[#00885a] rounded-xl font-bold flex items-center hover:bg-[#006b46] transition-all transform hover:translate-x-1"
              >
                Start Learning AI <ArrowRight size={20} className="ml-2" />
              </button>
              <button 
                onClick={() => onNavigate('#support')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Get Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & History */}
      <section id="mission" className="py-24 bg-white ethiopian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#fcd116]/20 rounded-full blur-3xl"></div>
              <img 
                src="https://www.ena.et/documents/42142/0/493728865_1022436889990920_744494240735112150_n.jpg/4be166ee-a9ca-b3dd-9049-1df80418faa9?version=1.0&t=1747722651506&download=true" 
                alt="EAII Mission in Action" 
                className="rounded-3xl shadow-2xl relative z-10 object-cover aspect-video" 
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#da121a] rounded-full flex items-center justify-center text-white font-bold">100+</div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Research Projects</p>
                    <p className="font-bold text-slate-800">Across Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-10 h-1 bg-[#00885a] mr-4"></span>
                Our Mission
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                The Ethiopian Artificial Intelligence Institute (EAII) was established to spearhead the nation's journey into the 4th Industrial Revolution. Our mandate is to cultivate local talent, foster innovation, and deploy AI solutions that solve unique Ethiopian challenges in agriculture, healthcare, and governance.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We bridge the gap between complex technology and citizen needs, ensuring that AI is a tool for equity and progress for all Ethiopians, regardless of language or location.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-1">Education</h4>
                  <p className="text-sm text-slate-500">Upskilling the next generation of digital leaders.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-1">Impact</h4>
                  <p className="text-sm text-slate-500">Deploying real-world AI for national development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Entry Points */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How citizens engage with EAII</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Explore our four key pillars designed to support your growth and the nation's progress.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Support */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 cursor-pointer" onClick={() => onNavigate('#support')}>
              <div className="w-14 h-14 bg-[#00885a]/10 rounded-2xl flex items-center justify-center text-[#00885a] mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Public Portal</h3>
              <p className="text-slate-500 text-sm mb-6">Book appointments, submit requests, and get official institutional support.</p>
              <div className="flex items-center text-[#00885a] font-bold text-sm uppercase tracking-wider">
                Access Now <ChevronRight size={16} className="ml-1" />
              </div>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 cursor-pointer" onClick={() => onNavigate('#education')}>
              <div className="w-14 h-14 bg-[#fcd116]/10 rounded-2xl flex items-center justify-center text-[#9c8200] mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Literacy</h3>
              <p className="text-slate-500 text-sm mb-6">Gamified learning for kids and vocational AI training for youth.</p>
              <div className="flex items-center text-[#9c8200] font-bold text-sm uppercase tracking-wider">
                Start Learning <ChevronRight size={16} className="ml-1" />
              </div>
            </div>

            {/* Contribute */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 cursor-pointer" onClick={() => onNavigate('#contribute')}>
              <div className="w-14 h-14 bg-[#da121a]/10 rounded-2xl flex items-center justify-center text-[#da121a] mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Contribution</h3>
              <p className="text-slate-500 text-sm mb-6">Help us train Amharic AI models by labeling images and local texts.</p>
              <div className="flex items-center text-[#da121a] font-bold text-sm uppercase tracking-wider">
                Contribute <ChevronRight size={16} className="ml-1" />
              </div>
            </div>

            {/* Innovation */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 cursor-pointer" onClick={() => onNavigate('#innovation')}>
              <div className="w-14 h-14 bg-slate-900/10 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
                <ArrowRight size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation Hub</h3>
              <p className="text-slate-500 text-sm mb-6">Startup support, micro-grants, and skill-sharing for innovators.</p>
              <div className="flex items-center text-slate-900 font-bold text-sm uppercase tracking-wider">
                Join Hub <ChevronRight size={16} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#00885a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to be part of Ethiopia's future?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => onNavigate('#login')} className="bg-white text-[#00885a] px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-slate-50 transition-colors">
              Join as a Trainee
            </button>
            <button onClick={() => onNavigate('#support')} className="bg-[#fcd116] text-slate-900 px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#e6bf12] transition-colors">
              Visit Portal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
