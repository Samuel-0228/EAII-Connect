
import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { THEME, NAV_LINKS } from '../constants';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('#home')}>
            <div className="w-10 h-10 bg-[#00885a] rounded-lg flex items-center justify-center mr-3 shadow-md">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">EAII Connect</h1>
              <p className="text-[10px] text-slate-500 uppercase font-semibold leading-none">Ethio AI Institute</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <button 
                key={link.path} 
                onClick={() => onNavigate(link.path)}
                className="text-slate-600 hover:text-[#00885a] font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4 ml-4">
                <button 
                  onClick={() => onNavigate('#dashboard')}
                  className="flex items-center space-x-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <UserIcon size={16} />
                  <span className="text-sm font-medium">{user.name}</span>
                </button>
                <button onClick={onLogout} className="text-slate-400 hover:text-red-500 transition-colors">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => onNavigate('#login')}
                className="bg-[#00885a] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#006b46] transition-all transform active:scale-95"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {NAV_LINKS.map(link => (
            <button 
              key={link.path} 
              onClick={() => { onNavigate(link.path); setIsOpen(false); }}
              className="block w-full text-left text-slate-600 hover:text-[#00885a] font-medium py-2"
            >
              {link.name}
            </button>
          ))}
          {!user && (
            <button 
              onClick={() => { onNavigate('#login'); setIsOpen(false); }}
              className="w-full bg-[#00885a] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Login
            </button>
          )}
          {user && (
            <div className="border-t pt-4">
              <button onClick={() => onNavigate('#dashboard')} className="block py-2 font-medium">Dashboard</button>
              <button onClick={onLogout} className="block py-2 text-red-500 font-medium">Logout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
