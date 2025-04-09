
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Welcome to Anka's AI Assistant! I'm here to help you explore renewable energy ideas and provide insights. What innovative concept would you like to discuss today?", 
      type: "received" 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to the bottom when new messages appear
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = { text: newMessage, type: "sent" };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
      // Generate a simple response
      const ideaResponse = {
        text: `Thanks for sharing your idea about ${newMessage.substring(0, 30)}${newMessage.length > 30 ? '...' : ''}! I'm excited to help you explore its potential.`,
        type: "received"
      };
      
      setMessages(prevMessages => [...prevMessages, ideaResponse]);
    }, 1500);
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
          AI Idea Assistant
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
              <h3 className="font-semibold ml-2 text-sm">AI Idea Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Messages container */}
          <div className="max-h-[350px] overflow-y-auto bg-gray-100 p-4" style={{
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}>
            {/* Message bubbles */}
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"} mb-3`}>
                <div className={`max-w-[75%] px-4 py-2 bubble-in ${message.type === "sent" ? "imessage-sent" : "imessage-received"}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-300 rounded-2xl rounded-tl-sm px-4 py-2 bubble-in">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Invisible element for scrolling to bottom */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* iMessage-style input area */}
          <div className="bg-gray-200 p-3 flex items-center space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Message"
              className="flex-grow bg-white rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className={`w-9 h-9 rounded-full flex items-center justify-center ${newMessage.trim() ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
