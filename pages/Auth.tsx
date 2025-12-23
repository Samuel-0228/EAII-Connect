
import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { LogIn, Info } from 'lucide-react';

interface AuthProps {
  onLogin: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@gmail.com') {
      onLogin({ email, role: UserRole.ADMIN, name: 'Admin User' });
    } else if (email === 'trainer@gmail.com') {
      onLogin({ email, role: UserRole.TRAINER, name: 'Prof. Kassahun' });
    } else {
      onLogin({ email, role: UserRole.TRAINEE, name: 'Trainee Abebe' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="bg-[#00885a] p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LogIn size={32} />
            </div>
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p className="text-white/60 text-sm">Login to EAII Connect Portal</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00885a]/20 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00885a]/20 outline-none transition-all"
                required
              />
            </div>
            <button className="w-full bg-[#00885a] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#006b46] transition-all transform active:scale-95">
              Sign In
            </button>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-6">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 flex items-center">
                <Info size={12} className="mr-1" /> Demo Credentials
              </p>
              <div className="space-y-1 text-xs text-slate-600">
                <p><span className="font-bold">Admin:</span> admin@gmail.com / 123</p>
                <p><span className="font-bold">Trainer:</span> trainer@gmail.com / 123</p>
                <p><span className="font-bold">Trainee:</span> trainee@gmail.com / 123</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
