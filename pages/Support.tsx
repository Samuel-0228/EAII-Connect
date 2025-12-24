
import React, { useState } from 'react';
import { Calendar, FileText, MessageSquare, Info, Upload, CheckCircle } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface SupportProps {
  lang: 'en' | 'am' | 'om';
}

const Support: React.FC<SupportProps> = ({ lang }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <div className="w-20 h-20 bg-green-100 text-[#00885a] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{lang === 'en' ? 'Request Submitted!' : lang === 'am' ? 'ጥያቄው ተልኳል!' : 'Gaaffiin Ergameera!'}</h2>
        <p className="text-slate-600 mb-8">{lang === 'en' ? 'Your appointment request has been received. You will receive a confirmation shortly.' : lang === 'am' ? 'የቀጠሮ ጥያቄዎ ደርሶናል። በቅርቡ ማረጋገጫ ይላክልዎታል።' : 'Gaaffiin beellama keessanii nu ga'eera. Gabaabumatti mirkaneessaa ni argattu.'}</p>
        <button 
          onClick={() => {setSubmitted(false); setStep(1);}}
          className="bg-[#00885a] text-white px-8 py-3 rounded-lg font-bold"
        >
          {lang === 'en' ? 'Book Another' : lang === 'am' ? 'ሌላ ይያዙ' : 'Kan biraa qabadhu'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{t.supportTitle}</h1>
        <p className="text-slate-500">{t.supportSub}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center">
              <Info className="mr-2 text-[#00885a]" size={20} /> {lang === 'en' ? 'Guide' : 'መመሪያ'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                <p className="text-sm text-slate-600">{lang === 'en' ? 'Choose your service type.' : 'የአገልግሎት አይነት ይምረጡ።'}</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                <p className="text-sm text-slate-600">{lang === 'en' ? 'Select a date and time.' : 'ቀን እና ሰዓት ይምረጡ።'}</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                <p className="text-sm text-slate-600">{lang === 'en' ? 'Upload documents.' : 'ሰነዶችን ይላኩ።'}</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#00885a] p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
            <MessageSquare size={100} className="absolute -bottom-10 -right-10 opacity-10" />
            <h3 className="font-bold text-xl mb-2">{lang === 'en' ? 'Need Help Now?' : 'እርዳታ ይፈልጋሉ?'}</h3>
            <p className="text-white/80 text-sm mb-4">Our AI-powered assistant can help you with common questions.</p>
            <p className="text-sm font-bold bg-white/20 inline-block px-3 py-1 rounded-full">Use the floating chat icon →</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex border-b">
            <button className={`flex-1 py-4 font-bold text-sm flex items-center justify-center space-x-2 ${step === 1 ? 'text-[#00885a] border-b-2 border-[#00885a]' : 'text-slate-400'}`}>
              <FileText size={18} /> <span>1. Info</span>
            </button>
            <button className={`flex-1 py-4 font-bold text-sm flex items-center justify-center space-x-2 ${step === 2 ? 'text-[#00885a] border-b-2 border-[#00885a]' : 'text-slate-400'}`}>
              <Calendar size={18} /> <span>2. Schedule</span>
            </button>
            <button className={`flex-1 py-4 font-bold text-sm flex items-center justify-center space-x-2 ${step === 3 ? 'text-[#00885a] border-b-2 border-[#00885a]' : 'text-slate-400'}`}>
              <Upload size={18} /> <span>3. Docs</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00885a]/20 outline-none" placeholder="Enter your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00885a]/20 outline-none">
                    <option>Technical Support</option>
                    <option>Institution Visit</option>
                    <option>Grant Inquiry</option>
                    <option>Research Permission</option>
                  </select>
                </div>
                <button type="button" onClick={() => setStep(2)} className="w-full bg-[#00885a] text-white py-4 rounded-xl font-bold shadow-lg">Next Step</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00885a]/20 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Time</label>
                    <input type="time" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00885a]/20 outline-none" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border border-slate-300 py-4 rounded-xl font-bold">Back</button>
                  <button type="button" onClick={() => setStep(3)} className="flex-1 bg-[#00885a] text-white py-4 rounded-xl font-bold shadow-lg">Next Step</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center hover:border-[#00885a] transition-colors cursor-pointer group">
                  <Upload className="mx-auto text-slate-400 group-hover:text-[#00885a] mb-4" size={40} />
                  <p className="text-slate-600 font-medium">Click to upload documents</p>
                  <input type="file" className="hidden" />
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 border border-slate-300 py-4 rounded-xl font-bold">Back</button>
                  <button type="submit" className="flex-1 bg-[#00885a] text-white py-4 rounded-xl font-bold shadow-lg">Confirm Booking</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
