
import { useState } from 'react';
import { MessageCircle, X, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import AIForm from './AIForm';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  
  const handleAIFormSubmit = (idea: string) => {
    console.log("Idea submitted:", idea);
  };
  
  return (
    <>
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-anka-gold shadow-lg flex items-center justify-center hover:bg-anka-gold/90 transition-all duration-300 group"
        aria-label="Open AI Chat"
      >
        {isMinimized ? (
          <MessageCircle className="w-7 h-7 text-anka-navy" />
        ) : (
          <X className="w-7 h-7 text-anka-navy" />
        )}
        <span className="absolute -top-12 right-0 bg-anka-navy text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          AI Idea Evaluator
        </span>
      </button>
      
      {!isMinimized && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-anka-darkNavy rounded-xl shadow-xl overflow-hidden border border-anka-gold/20">
          <div className="bg-gradient-to-r from-anka-navy to-anka-darkNavy text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Zap size={20} className="text-anka-gold" />
              <h3 className="font-semibold">AI Idea Evaluator</h3>
            </div>
            <button 
              onClick={() => {
                setIsOpen(true);
                setIsMinimized(true);
              }}
              className="text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-1 rounded"
            >
              Expand
            </button>
          </div>
          <div className="p-4 bg-anka-sand/5">
            <p className="text-sm text-anka-sand/80 mb-4">
              Share your renewable energy idea, and I'll evaluate its feasibility.
            </p>
            <button 
              onClick={() => {
                setIsOpen(true);
                setIsMinimized(true);
              }}
              className="w-full bg-anka-navy hover:bg-anka-navy/90 text-white py-2 rounded-lg flex items-center justify-center space-x-2"
            >
              <span>Start AI Evaluation</span>
              <Zap size={16} />
            </button>
          </div>
        </div>
      )}
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-anka-darkNavy border border-anka-gold/20">
          <DialogHeader className="bg-gradient-to-r from-anka-navy to-anka-darkNavy text-white p-5">
            <DialogTitle className="flex items-center space-x-2">
              <Zap size={20} className="text-anka-gold" />
              <span>AI Idea Evaluator</span>
            </DialogTitle>
            <DialogDescription className="text-white/80 pt-2">
              Get your renewable energy ideas evaluated with AI assistance.
            </DialogDescription>
          </DialogHeader>
          <div className="p-5 max-h-[70vh] overflow-y-auto scrollbar-none">
            <AIForm onSubmit={handleAIFormSubmit} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBubble;
