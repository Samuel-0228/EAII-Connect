
import React from 'react';
import { Lightbulb, Rocket, Users, Briefcase, Plus, Filter, Search } from 'lucide-react';
import { STARTUPS } from '../constants';

const Innovation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">AI Collaboration Hub</h1>
          <p className="text-slate-500">The central ecosystem for Ethiopia's startups, talent, and investors.</p>
        </div>
        <button className="bg-[#00885a] text-white px-6 py-3 rounded-xl font-bold flex items-center shadow-lg hover:scale-105 transition-transform">
          <Plus size={20} className="mr-2" /> Post Idea or Startup
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar filters */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-white p-6 rounded-2xl border border-slate-200">
             <h3 className="font-bold mb-4 flex items-center"><Filter size={16} className="mr-2" /> Filters</h3>
             <div className="space-y-4">
               <div>
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Sector</label>
                 <div className="space-y-2">
                   {['Agriculture', 'Healthcare', 'FinTech', 'NLP'].map(s => (
                     <label key={s} className="flex items-center text-sm text-slate-600">
                       <input type="checkbox" className="mr-2 rounded border-slate-300 text-[#00885a] focus:ring-[#00885a]" /> {s}
                     </label>
                   ))}
                 </div>
               </div>
               <div className="pt-4">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Support Needed</label>
                 <div className="space-y-2">
                   {['Grants', 'Mentorship', 'Dev Talent'].map(s => (
                     <label key={s} className="flex items-center text-sm text-slate-600">
                       <input type="checkbox" className="mr-2 rounded border-slate-300 text-[#00885a] focus:ring-[#00885a]" /> {s}
                     </label>
                   ))}
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-slate-900 p-6 rounded-2xl text-white">
             <Rocket className="text-[#fcd116] mb-4" size={28} />
             <h3 className="font-bold text-lg mb-2">Micro-Grant Pool</h3>
             <p className="text-xs text-white/60 mb-4">Current Active Fund: 1,500,000 ETB</p>
             <button className="w-full bg-[#fcd116] text-slate-900 py-2 rounded-lg font-bold text-sm">Apply for Funding</button>
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
           {/* Search */}
           <div className="relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
             <input 
               type="text" 
               placeholder="Search startups, innovators, or skill sharing requests..." 
               className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#00885a]/20 outline-none shadow-sm"
             />
           </div>

           {/* Stats */}
           <div className="grid grid-cols-3 gap-4">
             <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
               <p className="text-2xl font-extrabold text-[#00885a]">45</p>
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Startups Registered</p>
             </div>
             <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
               <p className="text-2xl font-extrabold text-[#00885a]">120</p>
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Mentors</p>
             </div>
             <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
               <p className="text-2xl font-extrabold text-[#00885a]">2.4M</p>
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ETB Granted</p>
             </div>
           </div>

           {/* Startup List */}
           <div className="grid md:grid-cols-2 gap-6">
             {STARTUPS.map(startup => (
               <div key={startup.id} className="bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-lg transition-shadow">
                 <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800 font-bold uppercase">
                      {startup.title[0]}
                    </div>
                    <span className="bg-green-100 text-[#00885a] px-2 py-1 rounded text-[10px] font-bold uppercase">Actively Hiring</span>
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-1">{startup.title}</h3>
                 <p className="text-xs text-[#00885a] font-bold mb-3">Founder: {startup.founder}</p>
                 <p className="text-sm text-slate-600 mb-4 line-clamp-2">{startup.description}</p>
                 <div className="flex flex-wrap gap-2 mb-6">
                   {startup.tags.map(t => (
                     <span key={t} className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded">#{t}</span>
                   ))}
                 </div>
                 <div className="flex gap-2">
                   <button className="flex-1 bg-slate-50 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">Details</button>
                   <button className="flex-1 bg-[#00885a] text-white py-2 rounded-lg text-xs font-bold">Message</button>
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
