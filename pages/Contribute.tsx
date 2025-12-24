
import React, { useState } from 'react';
import { Camera, Tag, Award, Shield, Check, Mic, MicOff, AlertCircle, LogIn } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface ContributeProps {
  lang: 'en' | 'am' | 'om';
  user: any;
  onNavigate: (path: string) => void;
}

const Contribute: React.FC<ContributeProps> = ({ lang, user, onNavigate }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [activeTask, setActiveTask] = useState<'upload' | 'label'>('upload');
  const [isRecording, setIsRecording] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = TRANSLATIONS[lang];

  const leaderboard = [
    { rank: 1, name: 'Israel K.', points: 4500, contribs: 120 },
    { rank: 2, name: 'Saba T.', points: 3800, contribs: 98 },
    { rank: 3, name: 'Temesgen B.', points: 3100, contribs: 85 },
  ];

  const handleSubmit = () => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <div className="w-20 h-20 bg-green-100 text-[#00885a] rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{lang === 'en' ? 'Thank You!' : lang === 'am' ? 'እናመሰግናለን!' : 'Galatoomaa!'}</h2>
        <p className="text-slate-600 mb-8">{lang === 'en' ? 'Your contribution has been recorded and will be verified.' : lang === 'am' ? 'ተሳትፎዎ ተመዝግቧል፣ በቅርቡ ይረጋገጣል።' : 'Gumaacha keessan galmeeffameera.'}</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-[#00885a] text-white px-8 py-3 rounded-lg font-bold"
        >
          {lang === 'en' ? 'Contribute More' : lang === 'am' ? 'ተጨማሪ ይሳተፉ' : 'Dabalataan gumaachaa'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{t.contributeTitle}</h1>
        <p className="text-slate-500">{t.contributeSub}</p>
      </div>

      {!isAgreed ? (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
          <div className="w-16 h-16 bg-[#00885a]/10 text-[#00885a] rounded-2xl flex items-center justify-center mb-6">
            <Shield size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Ethics & Consent' : 'ሥነ-ምግባር እና ፈቃድ'}</h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>{lang === 'en' ? 'By participating, you agree that your contributions will be used for research.' : 'በመሳተፍዎ፣ ያበረከቱት አስተዋፅኦ ለምርምር ጥቅም እንዲውል ተስማምተዋል።'}</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>{lang === 'en' ? 'Data is anonymized.' : 'መረጃው ማንነትን በማይገልጽ መልኩ ይቀመጣል።'}</li>
              <li>{lang === 'en' ? 'You must own the rights to shared content.' : 'የሚያጋሩት ይዘት የራስዎ መሆን አለበት።'}</li>
            </ul>
          </div>
          <button 
            onClick={() => setIsAgreed(true)}
            className="w-full bg-[#00885a] text-white py-4 rounded-xl font-bold shadow-lg"
          >
            {lang === 'en' ? 'I Accept and Understand' : 'ተረድቻለሁ እና እስማማለሁ'}
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
                <Camera size={18} /> <span>{t.upload}</span>
              </button>
              <button 
                onClick={() => setActiveTask('label')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-bold transition-all ${activeTask === 'label' ? 'bg-white shadow-md text-[#00885a]' : 'text-slate-500'}`}
              >
                <Tag size={18} /> <span>{t.label}</span>
              </button>
            </div>

            {activeTask === 'upload' ? (
              <div className="bg-white p-10 rounded-3xl border border-slate-200 text-center animate-in zoom-in duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{lang === 'en' ? 'Upload Amharic Handwritten Text' : 'የአማርኛ የእጅ ጽሑፍ ይላኩ'}</h3>
                  <p className="text-sm text-slate-500">{lang === 'en' ? 'Take a photo of handwriting.' : 'የእጅ ጽሑፍ ፎቶ ያንሱ።'}</p>
                </div>
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-8 hover:border-[#00885a] transition-colors group cursor-pointer relative">
                  <Camera size={48} className="mx-auto text-slate-300 group-hover:text-[#00885a] mb-4" />
                  <p className="font-bold text-slate-700">{lang === 'en' ? 'Select File' : 'ፋይል ይምረጡ'}</p>
                </div>

                {/* Voice Option */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm flex items-center"><Mic className="mr-2 text-[#00885a]" size={16} /> {t.voiceDesc}</h4>
                    {isRecording && <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>}
                  </div>
                  <p className="text-xs text-slate-500 mb-4 text-left">{t.voiceDescHint}</p>
                  <div className="flex justify-center">
                    <button 
                      onClick={() => setIsRecording(!isRecording)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${isRecording ? 'bg-red-500 text-white shadow-lg' : 'bg-white border text-slate-700 hover:bg-slate-50'}`}
                    >
                      {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
                      <span>{isRecording ? (lang === 'en' ? 'Stop Recording' : 'መቅዳት ያቁሙ') : (lang === 'en' ? 'Record Description' : 'ድምጽ ይቅዱ')}</span>
                    </button>
                  </div>
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full bg-[#00885a] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#006b46] transition-colors"
                >
                  {t.submit}
                </button>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-3xl border border-slate-200 animate-in zoom-in duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-900">{lang === 'en' ? 'What is this object?' : 'ይህ ምንድን ነው?'}</h3>
                  <span className="bg-[#fcd116] text-slate-900 px-3 py-1 rounded-full text-xs font-bold">Task: Local Foods</span>
                </div>
                <div className="aspect-video bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                   <img src="https://thumbs.dreamstime.com/b/cultural-food-ethiopia-s-called-genfo-its-152731942.jpg?referrer=grok.com" alt="Genfo Label task" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                   {['Injera', 'Doro Wat', 'Kollo', 'Genfo'].map(label => (
                     <button key={label} className="bg-slate-50 border border-slate-200 py-3 rounded-xl font-bold hover:bg-[#00885a] hover:text-white hover:border-[#00885a] transition-all">
                       {label}
                     </button>
                   ))}
                </div>

                {/* Voice Option for Labeling */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                  <h4 className="font-bold text-sm flex items-center mb-2"><Mic className="mr-2 text-[#00885a]" size={16} /> {lang === 'en' ? 'Prefer Speaking?' : 'መናገር ይመርጣሉ?'}</h4>
                  <p className="text-xs text-slate-500 mb-4">{lang === 'en' ? 'Record the name of this food in your local dialect.' : 'የምግቡን ስም በአካባቢዎ ቋንቋ ይናገሩ።'}</p>
                  <button 
                    onClick={() => setIsRecording(!isRecording)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-sm transition-all ${isRecording ? 'bg-red-500 text-white' : 'bg-white border text-slate-700'}`}
                  >
                    <Mic size={16} />
                    <span>{isRecording ? (lang === 'en' ? 'Stop' : 'ቁም') : (lang === 'en' ? 'Voice Label' : 'በድምፅ ሰይም')}</span>
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t flex items-center justify-between">
                  <p className="text-sm text-slate-500"><button className="underline">Skip</button></p>
                  <button onClick={handleSubmit} className="bg-[#00885a] text-white px-10 py-3 rounded-xl font-bold shadow-md">
                    {lang === 'en' ? 'Submit Label' : 'ላክ'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
             <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative">
               <Award size={80} className="absolute -right-6 -bottom-6 opacity-20 text-[#fcd116]" />
               <h3 className="font-bold text-xl mb-4 flex items-center">
                 <Award className="mr-2 text-[#fcd116]" size={20} /> {t.leaderboard}
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
                     <span className="text-sm font-bold text-[#fcd116]">{u.points} {t.points}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      )}

      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl p-8 text-center animate-in zoom-in duration-300">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">{t.loginToTrack}</h3>
            <p className="text-slate-500 text-sm mb-8">{t.loginPrompt}</p>
            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('#login')}
                className="w-full bg-[#00885a] text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg"
              >
                <LogIn size={20} /> <span>{t.login}</span>
              </button>
              <button 
                onClick={() => setShowLoginPrompt(false)}
                className="w-full text-slate-400 font-bold py-2 hover:text-slate-600 transition-colors"
              >
                {lang === 'en' ? 'Cancel' : 'ተመለስ'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contribute;
