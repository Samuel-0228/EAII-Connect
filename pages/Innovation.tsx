
import React from 'react';
import { Lightbulb, Rocket, Users, Briefcase, Plus, Filter, Search } from 'lucide-react';
import { STARTUPS, TRANSLATIONS } from '../constants';

interface InnovationProps {
  lang: 'en' | 'am' | 'om';
}

const Innovation: React.FC<InnovationProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t.innovationTitle}</h1>
          <p className="text-slate-500">{t.innovationSub}</p>
        </div>
        <button className="bg-[#00885a] text-white px-6 py-3 rounded-xl font-bold flex items-center shadow-lg hover:scale-105 transition-transform">
          <Plus size={20} className="mr-2" /> {lang === 'en' ? 'Post Idea' : lang === 'am' ? 'ሀሳብ ያቅርቡ' : 'Yaada dhiyeessi'}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar filters */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <h3 className="font-bold mb-4 flex items-center"><Filter size={16} className="mr-2" /> {lang === 'en' ? 'Filters' : lang === 'am' ? 'ማጣሪያዎች' : 'Gireessitoota'}</h3>
             <div className="space-y-4">
               <div>
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{lang === 'en' ? 'Sector' : lang === 'am' ? 'ዘርፍ' : 'Damee'}</label>
                 <div className="space-y-2">
                   {['Agriculture', 'Healthcare', 'NLP'].map(s => (
                     <label key={s} className="flex items-center text-sm text-slate-600">
                       <input type="checkbox" className="mr-2 rounded border-slate-300 text-[#00885a]" /> {s}
                     </label>
                   ))}
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
             <Rocket className="text-[#fcd116] mb-4" size={28} />
             <h3 className="font-bold text-lg mb-2">{lang === 'en' ? 'Grants Available' : 'ድጎማዎች ይገኛሉ'}</h3>
             <p className="text-xs text-white/60 mb-4">{lang === 'en' ? 'Apply for our AI micro-grants pool.' : 'ለAI ድጋፍ ፈንድ ያመልክቱ።'}</p>
             <button className="w-full bg-[#fcd116] text-slate-900 py-2 rounded-lg font-bold text-sm">Apply Now</button>
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
           <div className="relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
             <input 
               type="text" 
               placeholder={lang === 'en' ? "Search startups..." : lang === 'am' ? "ስታርትአፖችን ይፈልጉ..." : "Startuupii barbaadi..."}
               className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00885a]/20 outline-none shadow-sm"
             />
           </div>

           {/* Startup List */}
           <div className="grid md:grid-cols-2 gap-6">
             {STARTUPS.map(startup => (
               <div key={startup.id} className="bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-xl transition-all">
                 <h3 className="text-lg font-bold text-slate-900 mb-1">{startup.title}</h3>
                 <p className="text-xs text-[#00885a] font-bold mb-3">Founder: {startup.founder}</p>
                 <p className="text-sm text-slate-600 mb-4 line-clamp-2">{startup.description}</p>
                 <div className="flex gap-2">
                   <button className="flex-1 bg-slate-50 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">{lang === 'en' ? 'Details' : 'ዝርዝር'}</button>
                   <button className="flex-1 bg-[#00885a] text-white py-2 rounded-lg text-xs font-bold">{lang === 'en' ? 'Message' : 'መልዕክት'}</button>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
