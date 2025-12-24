
import React, { useState } from 'react';
import { BookOpen, Video, Headphones, Download, Award, Shield, User as UserIcon } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface EducationProps {
  lang: 'en' | 'am' | 'om';
}

const Education: React.FC<EducationProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'kids' | 'youth' | 'general'>('youth');
  const t = TRANSLATIONS[lang];

  const categories = {
    kids: {
      title: lang === 'en' ? "AI for Kids (10-18)" : lang === 'am' ? "AI ለህፃናት (10-18)" : "AI Ijoolleef (10-18)",
      desc: lang === 'en' ? "Gamified, visual lessons to introduce the wonder of AI." : lang === 'am' ? "በጨዋታ መልክ የተዘጋጁ የAI ትምህርቶች።" : "Barnoota taphaan qophaa'e kan AI barsiisu.",
      courses: [
        { title: 'Robot Adventures', lessons: 12, type: 'Game' },
        { title: 'AI Ethics for Teens', lessons: 8, type: 'Visual' }
      ]
    },
    youth: {
      title: lang === 'en' ? "Youth Skills (18-30)" : lang === 'am' ? "የወጣቶች ክህሎት (18-30)" : "Dandeettii Dargaggootaa (18-30)",
      desc: lang === 'en' ? "Practical AI and coding skills to kickstart tech careers." : lang === 'am' ? "ተግባራዊ የAI እና የኮዲንግ ክህሎቶች ለቴክኖሎጂ ስራዎች።" : "Dandeettii koodiingii fi AI fayyadamuun hojii argachuuf.",
      courses: [
        { title: 'Python Foundations', lessons: 24, type: 'Coding' },
        { title: 'Applied Machine Learning', lessons: 32, type: 'Hands-on' }
      ]
    },
    general: {
      title: lang === 'en' ? "Digital Literacy" : lang === 'am' ? "ዲጂታል ማንበብና መጻፍ" : "Literacy Digital",
      desc: lang === 'en' ? "Essential skills for everyone in the digital age." : lang === 'am' ? "ለእያንዳንዱ ሰው አስፈላጊ የዲጂታል ክህሎቶች።" : "Dandeettii hundumaf barbaachisu.",
      courses: [
        { title: 'Safe Internet Usage', lessons: 5, type: 'Video' },
        { title: 'How AI works', lessons: 10, type: 'Voice' }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{t.educationTitle}</h1>
        <p className="text-slate-500">{t.educationSub}</p>
      </div>

      {/* Category Selection */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {(['kids', 'youth', 'general'] as const).map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`p-6 rounded-3xl border-2 transition-all text-center ${selectedCategory === cat ? 'bg-white border-[#00885a] shadow-xl scale-105' : 'bg-slate-50 border-transparent text-slate-400'}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${selectedCategory === cat ? 'bg-[#00885a] text-white' : 'bg-slate-200 text-slate-400'}`}>
              {cat === 'kids' && <Shield size={24} />}
              {cat === 'youth' && <UserIcon size={24} />}
              {cat === 'general' && <BookOpen size={24} />}
            </div>
            <h3 className={`font-bold capitalize ${selectedCategory === cat ? 'text-[#00885a]' : ''}`}>
              {cat === 'kids' ? (lang === 'en' ? 'Kids' : lang === 'am' ? 'ህፃናት' : 'Ijoollee') : 
               cat === 'youth' ? (lang === 'en' ? 'Youth' : lang === 'am' ? 'ወጣቶች' : 'Dargaggoo') : 
               (lang === 'en' ? 'General' : lang === 'am' ? 'አጠቃላይ' : 'Hunda')}
            </h3>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
             <h2 className="text-2xl font-bold text-slate-900 mb-2">{categories[selectedCategory].title}</h2>
             <p className="text-slate-500 mb-8">{categories[selectedCategory].desc}</p>
             
             <div className="space-y-4">
               {categories[selectedCategory].courses.map((course, idx) => (
                 <div key={idx} className="group flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#00885a] transition-all cursor-pointer">
                   <div className="flex items-center">
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#00885a] font-bold shadow-sm mr-4">
                       {course.type === 'Voice' ? <Headphones size={20} /> : <Video size={20} />}
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900">{course.title}</h4>
                       <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{course.lessons} {lang === 'en' ? 'Lessons' : 'ትምህርቶች'}</p>
                     </div>
                   </div>
                   <button className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center group-hover:bg-[#00885a] group-hover:text-white transition-all">
                     <Download size={16} />
                   </button>
                 </div>
               ))}
             </div>
           </div>

           <div className="bg-[#00885a] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
             <Award size={150} className="absolute -right-10 -bottom-10 opacity-10" />
             <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Offline Learning Support' : 'ያለ በይነመረብ ይማሩ'}</h3>
             <p className="text-white/80 mb-6 max-w-lg">{lang === 'en' ? 'Low on data? Download lesson modules to study anytime.' : 'ኢንተርኔት የለዎትም? ትምህርቶችን አውርደው በማንኛውም ጊዜ ያጥኑ።'}</p>
             <button className="bg-white text-[#00885a] px-8 py-3 rounded-xl font-bold shadow-lg">{lang === 'en' ? 'Download Modules' : 'ሞጁሎችን አውርድ'}</button>
           </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center"><Award className="mr-2 text-[#fcd116]" size={20} /> {t.cert}</h3>
            <p className="text-sm text-slate-500 mb-6">{t.certDesc}</p>
            <div className="relative aspect-[4/3] bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/seed/cert/400/300" alt="Cert" className="opacity-40 w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Shield size={40} className="text-[#fcd116] mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Official EAII Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
