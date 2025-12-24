
import React from 'react';
import { User, UserRole, Course } from '../types';
import { Book, Award, Clock, TrendingUp, Settings, FileText, Users, BarChart } from 'lucide-react';
import { COURSES } from '../constants';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const data = [
    { name: 'Mon', count: 400 },
    { name: 'Tue', count: 300 },
    { name: 'Wed', count: 200 },
    { name: 'Thu', count: 278 },
    { name: 'Fri', count: 189 },
    { name: 'Sat', count: 239 },
    { name: 'Sun', count: 349 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Selam, {user.name}</h1>
          <p className="text-slate-500">Welcome to your {user.role} workspace.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white border rounded-lg hover:bg-slate-50"><Settings size={20} className="text-slate-500" /></button>
          <button className="px-4 py-2 bg-white border rounded-lg text-sm font-bold flex items-center">
            <Clock size={16} className="mr-2 text-slate-400" /> Activity Log
          </button>
        </div>
      </div>

      {/* Trainee Dashboard */}
      {user.role === UserRole.TRAINEE && (
        <div className="space-y-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#00885a] p-6 rounded-3xl text-white">
              <Book size={32} className="mb-4 opacity-50" />
              <p className="text-4xl font-bold mb-1">4</p>
              <p className="text-sm opacity-80 uppercase font-bold tracking-widest">Active Courses</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <Award size={32} className="mb-4 text-[#fcd116]" />
              <p className="text-4xl font-bold mb-1 text-slate-900">12</p>
              <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">Certificates</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <TrendingUp size={32} className="mb-4 text-slate-300" />
              <p className="text-4xl font-bold mb-1 text-slate-900">85%</p>
              <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">Completion Rate</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES.filter(c => c.progress < 100).map(course => (
                <div key={course.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-all">
                  <div className="h-40 overflow-hidden relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase">{course.category}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 mb-3">{course.title}</h3>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                      <div className="bg-[#00885a] h-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400">{course.progress}% Complete</span>
                      <button className="text-[#00885a] font-bold text-sm">Resume</button>
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
           <div className="grid sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Users</p>
                  <p className="text-xl font-bold">12.5k</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mr-4">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Proposals</p>
                  <p className="text-xl font-bold">482</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center">
                <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Revenue</p>
                  <p className="text-xl font-bold">2.4M</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center">
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Pending</p>
                  <p className="text-xl font-bold">24</p>
                </div>
              </div>
           </div>

           <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                  <BarChart className="mr-2 text-[#00885a]" size={20} /> Engagement Overview
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#00885a" radius={[4, 4, 0, 0]} barSize={40} />
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-6">Recent Approvals</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#00885a] text-white flex items-center justify-center text-xs font-bold mr-3">JD</div>
                        <div>
                          <p className="text-xs font-bold">John Doe</p>
                          <p className="text-[10px] text-slate-500">Startup License</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-1 rounded">Approved</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 text-sm font-bold text-[#00885a] hover:underline">View All Requests</button>
              </div>
           </div>
        </div>
      )}

      {/* Trainer Dashboard - Simple placeholder */}
      {user.role === UserRole.TRAINER && (
        <div className="p-20 bg-white rounded-3xl border-2 border-dashed text-center">
           <Users size={48} className="mx-auto text-slate-300 mb-4" />
           <h3 className="font-bold text-xl mb-2">Trainer Dashboard Loaded</h3>
           <p className="text-slate-500">Manage your students, grading, and course curriculum from here.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
