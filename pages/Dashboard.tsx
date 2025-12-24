
import React from 'react';
import { User, UserRole, Course } from '../types';
import { Book, Award, Clock, TrendingUp, Settings, FileText, Users, BarChart } from 'lucide-react';
import { COURSES, TRANSLATIONS } from '../constants';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  user: User;
  lang: 'en' | 'am' | 'om';
}

const Dashboard: React.FC<DashboardProps> = ({ user, lang }) => {
  const t = TRANSLATIONS[lang];
  const data = [
    { name: 'Mon', count: 400 }, { name: 'Tue', count: 300 }, { name: 'Wed', count: 200 },
    { name: 'Thu', count: 278 }, { name: 'Fri', count: 189 }, { name: 'Sat', count: 239 }, { name: 'Sun', count: 349 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{t.selam}, {user.name}</h1>
          <p className="text-slate-500">{t.welcomeWorkspace}</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white border rounded-lg hover:bg-slate-50"><Settings size={20} className="text-slate-500" /></button>
          <button className="px-4 py-2 bg-white border rounded-lg text-sm font-bold flex items-center shadow-sm">
            <Clock size={16} className="mr-2 text-slate-400" /> {lang === 'en' ? 'Activity Log' : 'የእንቅስቃሴ መዝገብ'}
          </button>
        </div>
      </div>

      {/* Trainee Dashboard */}
      {user.role === UserRole.TRAINEE && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#00885a] p-6 rounded-3xl text-white shadow-lg">
              <Book size={32} className="mb-4 opacity-50" />
              <p className="text-4xl font-bold mb-1">4</p>
              <p className="text-sm opacity-80 uppercase font-bold tracking-widest">{t.activeCourses}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <Award size={32} className="mb-4 text-[#fcd116]" />
              <p className="text-4xl font-bold mb-1 text-slate-900">12</p>
              <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">{t.certificates}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <TrendingUp size={32} className="mb-4 text-[#00885a]" />
              <p className="text-4xl font-bold mb-1 text-slate-900">85%</p>
              <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">{lang === 'en' ? 'Progress' : 'ሂደት'}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6">{t.continueLearning}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES.filter(c => c.progress < 100).map(course => (
                <div key={course.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 mb-3">{course.title}</h3>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                      <div className="bg-[#00885a] h-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400">{course.progress}%</span>
                      <button className="text-[#00885a] font-bold text-sm hover:underline">{lang === 'en' ? 'Resume' : 'ቀጥል'}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Admin Dashboard */}
      {user.role === UserRole.ADMIN && (
        <div className="space-y-8">
           <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                  <BarChart className="mr-2 text-[#00885a]" size={20} /> {lang === 'en' ? 'Engagement Overview' : 'የተሳትፎ አጠቃላይ እይታ'}
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#00885a" radius={[4, 4, 0, 0]} barSize={40} />
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                 <h3 className="font-bold mb-4">{lang === 'en' ? 'Recent Contributors' : 'የቅርብ ጊዜ ተሳታፊዎች'}</h3>
                 <div className="space-y-4">
                   {['Israel K.', 'Temesgen B.', 'Alem M.'].map(name => (
                     <div key={name} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                       <span className="text-sm font-medium">{name}</span>
                       <span className="text-[10px] bg-green-100 text-[#00885a] px-2 py-1 rounded font-bold">Approved</span>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
