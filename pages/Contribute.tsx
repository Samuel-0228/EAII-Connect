
import React, { useState } from 'react';
import { Camera, Tag, Award, Shield, Check } from 'lucide-react';

const Contribute: React.FC = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [activeTask, setActiveTask] = useState<'upload' | 'label'>('upload');

  const leaderboard = [
    { rank: 1, name: 'Abebe Kebe', points: 4500, contribs: 120 },
    { rank: 2, name: 'Saba T.', points: 3800, contribs: 98 },
    { rank: 3, name: 'Yonas M.', points: 3100, contribs: 85 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Community AI Contribution</h1>
        <p className="text-slate-500">Help train Ethiopia's AI models by contributing local datasets and Amharic labels.</p>
      </div>

      {!isAgreed ? (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
          <div className="w-16 h-16 bg-[#00885a]/10 text-[#00885a] rounded-2xl flex items-center justify-center mb-6">
            <Shield size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Ethics & Consent</h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>By participating, you agree that your contributions will be used for research and development of national AI models for the benefit of Ethiopia.</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Data is anonymized and securely stored.</li>
              <li>You retain no commercial rights to the trained model.</li>
              <li>You must only upload images/text that you have the right to share.</li>
            </ul>
          </div>
          <button 
            onClick={() => setIsAgreed(true)}
            className="w-full bg-[#00885a] text-white py-4 rounded-xl font-bold shadow-lg"
          >
            I Accept and Understand
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Workspace */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setActiveTask('upload')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-bold transition-all ${activeTask === 'upload' ? 'bg-white shadow-md text-[#00885a]' : 'text-slate-500'}`}
              >
                <Camera size={18} /> <span>Upload Images</span>
              </button>
              <button 
                onClick={() => setActiveTask('label')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-bold transition-all ${activeTask === 'label' ? 'bg-white shadow-md text-[#00885a]' : 'text-slate-500'}`}
              >
                <Tag size={18} /> <span>Label Objects</span>
              </button>
            </div>

            {activeTask === 'upload' ? (
              <div className="bg-white p-10 rounded-3xl border border-slate-200 text-center animate-in zoom-in duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Upload Amharic Handwritten Text</h3>
                  <p className="text-sm text-slate-500">Take a photo of clear Amharic handwriting to help us improve OCR.</p>
                </div>
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-8 hover:border-[#00885a] transition-colors group cursor-pointer">
                  <Camera size={48} className="mx-auto text-slate-300 group-hover:text-[#00885a] mb-4" />
                  <p className="font-bold text-slate-700">Open Camera or Select File</p>
                </div>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">25</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">XP Per Upload</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200 self-center"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">4,210</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Today's Total</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-3xl border border-slate-200 animate-in zoom-in duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-900">What is this object?</h3>
                  <span className="bg-[#fcd116] text-slate-900 px-3 py-1 rounded-full text-xs font-bold">Task: Local Foods</span>
                </div>
                <div className="aspect-video bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                   <img src="https://picsum.photos/seed/teff/800/450" alt="Label task" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                   {['Injera', 'Doro Wat', 'Kollo', 'Genfo'].map(label => (
                     <button key={label} className="bg-slate-50 border border-slate-200 py-3 rounded-xl font-bold hover:bg-[#00885a] hover:text-white hover:border-[#00885a] transition-all">
                       {label}
                     </button>
                   ))}
                </div>
                <div className="mt-8 pt-8 border-t flex items-center justify-between">
                  <p className="text-sm text-slate-500">Can't see clearly? <button className="underline">Skip</button></p>
                  <button className="bg-[#00885a] text-white px-8 py-3 rounded-xl font-bold">Next Image</button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
             <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative">
               <Award size={80} className="absolute -right-6 -bottom-6 opacity-20 text-[#fcd116]" />
               <h3 className="font-bold text-xl mb-4 flex items-center">
                 <Award className="mr-2 text-[#fcd116]" size={20} /> Leaderboard
               </h3>
               <div className="space-y-4">
                 {leaderboard.map(u => (
                   <div key={u.rank} className="flex items-center justify-between">
                     <div className="flex items-center">
                       <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mr-3 ${u.rank === 1 ? 'bg-[#fcd116] text-slate-900' : 'bg-white/10'}`}>
                         {u.rank}
                       </span>
                       <span className="text-sm font-medium">{u.name}</span>
                     </div>
                     <span className="text-sm font-bold text-[#fcd116]">{u.points} pts</span>
                   </div>
                 ))}
               </div>
               <button className="w-full mt-6 bg-white/10 border border-white/20 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors">
                 View All Rankings
               </button>
             </div>

             <div className="bg-[#fcd116]/10 border border-[#fcd116]/30 p-6 rounded-3xl">
               <h4 className="font-bold text-slate-900 mb-2">Rewards Program</h4>
               <p className="text-sm text-slate-700 mb-4">Top contributors monthly receive early access to premium AI models and official EAII certification.</p>
               <div className="flex items-center space-x-2 text-[#00885a]">
                 <Check size={16} /> <span className="text-xs font-bold uppercase">Certificate Eligibility</span>
               </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contribute;
