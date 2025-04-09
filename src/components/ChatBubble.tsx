
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
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg flex items-center justify-center hover:opacity-90 transition-all duration-300 group"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
        <span className="absolute -top-12 right-0 bg-black/80 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          AI Idea Evaluator
        </span>
      </button>
      
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-gray-100 rounded-2xl shadow-xl overflow-hidden border border-gray-300 animate-fade-in">
          {/* iMessage-style header */}
          <div className="bg-gray-200 text-black p-3 flex justify-between items-center border-b border-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="font-semibold ml-2 text-sm">AI Idea Evaluator</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Chat content area with iMessage styling */}
          <div className="max-h-[70vh] overflow-y-auto scrollbar-none bg-gray-100 p-4" style={{
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}>
            {/* Welcome message in iMessage style */}
            <div className="flex justify-start mb-4">
              <div className="bg-gray-300 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[75%]">
                <p className="text-sm text-gray-800">
                  Hi there! I'm your AI assistant. Share your renewable energy idea and I'll evaluate it for you.
                </p>
              </div>
            </div>
            
            {/* AI Form wrapped in iMessage-style container */}
            <div className="bg-white rounded-2xl p-3 shadow-sm">
              <AIForm onSubmit={handleAIFormSubmit} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
