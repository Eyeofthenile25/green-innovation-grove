
import { useState } from 'react';
import { MessageCircle, X, Zap } from 'lucide-react';
import AIForm from './AIForm';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleAIFormSubmit = (idea: string) => {
    console.log("Idea submitted:", idea);
  };
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-anka-gold shadow-lg flex items-center justify-center hover:bg-anka-gold/90 transition-all duration-300 group"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-anka-navy" />
        ) : (
          <MessageCircle className="w-7 h-7 text-anka-navy" />
        )}
        <span className="absolute -top-12 right-0 bg-anka-navy text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          AI Idea Evaluator
        </span>
      </button>
      
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-anka-sand rounded-xl shadow-xl overflow-hidden border border-anka-gold/20 animate-fade-in">
          <div className="bg-gradient-to-r from-anka-navy to-anka-darkNavy text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Zap size={20} className="text-anka-gold" />
              <h3 className="font-semibold">AI Idea Evaluator</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          <div className="max-h-[70vh] overflow-y-auto scrollbar-none bg-white/10">
            <AIForm onSubmit={handleAIFormSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
