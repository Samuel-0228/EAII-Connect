
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Support from './pages/Support';
import Education from './pages/Education';
import Contribute from './pages/Contribute';
import Innovation from './pages/Innovation';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { User, UserRole } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPath, setCurrentPath] = useState('#home');
  const [lang, setLang] = useState<'en' | 'am' | 'om'>('en');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    window.location.hash = path;
  };

  const handleLogin = (u: User) => {
    setUser(u);
    handleNavigate('#dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    handleNavigate('#home');
  };

  const renderPage = () => {
    switch (currentPath) {
      case '#home': return <Home onNavigate={handleNavigate} lang={lang} />;
      case '#support': return <Support lang={lang} />;
      case '#education': return <Education lang={lang} />;
      case '#contribute': return <Contribute lang={lang} />;
      case '#innovation': return <Innovation lang={lang} />;
      case '#login': return <Auth onLogin={handleLogin} lang={lang} />;
      case '#dashboard': return user ? <Dashboard user={user} lang={lang} /> : <Auth onLogin={handleLogin} lang={lang} />;
      default: return <Home onNavigate={handleNavigate} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        user={user} 
        onLogout={handleLogout} 
        onNavigate={handleNavigate} 
        lang={lang} 
        setLang={setLang} 
      />
      
      <main className="flex-1 animate-in fade-in duration-500">
        {renderPage()}
      </main>

      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#00885a] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <h1 className="text-xl font-bold text-slate-900">EAII Connect</h1>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Leading Ethiopia's technological advancement through ethical and inclusive artificial intelligence development.
              </p>
              <p className="text-xs text-slate-400">© 2024 Ethiopian Artificial Intelligence Institute. All Rights Reserved.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#support" className="hover:text-[#00885a]">Public Support</a></li>
                <li><a href="#education" className="hover:text-[#00885a]">AI Literacy</a></li>
                <li><a href="#innovation" className="hover:text-[#00885a]">Innovation Hub</a></li>
                <li><a href="#contribute" className="hover:text-[#00885a]">Contribution Board</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Addis Ababa, Ethiopia</li>
                <li>info@eaii.gov.et</li>
                <li>+251 11 XXX XXXX</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <ChatBot lang={lang} />
    </div>
  );
};

export default App;
