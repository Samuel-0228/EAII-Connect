
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Mic, Loader2 } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setIsTyping(true);
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));
    
    const response = await getAIResponse(userMsg, history);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#00885a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center relative group"
        >
          <div className="absolute -top-12 right-0 bg-white text-slate-900 px-3 py-1 rounded shadow text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask EAII AI
          </div>
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in zoom-in duration-200 origin-bottom-right">
          {/* Header */}
          <div className="bg-[#00885a] p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="font-bold">A</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">EAII Assistant</h3>
                <p className="text-[10px] opacity-80">Online | Amharic/English</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 ethiopian-pattern">
            {messages.length === 0 && (
              <div className="text-center py-10 opacity-60">
                <p className="text-sm">👋 Selam! How can I help you with EAII services today?</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-[#00885a] text-white rounded-tr-none' 
                    : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none border border-slate-200">
                  <Loader2 size={16} className="animate-spin text-slate-400" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-slate-50">
            <div className="flex items-center space-x-2 bg-white rounded-full border border-slate-300 px-3 py-1 shadow-inner focus-within:ring-2 focus-within:ring-[#00885a]/20">
              <button className="text-slate-400 hover:text-[#00885a]"><Mic size={18} /></button>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 bg-transparent outline-none text-sm py-2"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="text-[#00885a] disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
