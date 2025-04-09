
import React, { useState, useRef } from 'react';
import { Send, Lightbulb, Zap, ListChecks, Users } from 'lucide-react';

interface AIFormProps {
  onSubmit: (idea: string) => void;
}

// Separate result component to reduce complexity
const AIResult = ({ idea, probability, resources, steps, collaborators, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="p-8 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-anka-blue/30 border-t-anka-blue rounded-full animate-spin mb-6"></div>
        <p className="text-lg font-medium">Analyzing your idea...</p>
      </div>
    );
  }

  return (
    <div className="p-6 grid gap-6">
      <div>
        <h3 className="text-2xl font-semibold flex items-center">
          <Lightbulb size={24} className="text-anka-blue mr-2" />
          Idea Analysis
        </h3>
        <p className="text-anka-darkBlue/80 italic">{idea}</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/50">
          <h4 className="font-medium mb-2 flex items-center">
            <Zap size={18} className="text-amber-500 mr-2" />
            Success: {probability}%
          </h4>
          <div className="w-full bg-anka-gray/20 h-2.5 rounded-full">
            <div 
              className={`h-2.5 rounded-full ${probability >= 80 ? 'bg-green-500' : probability >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
              style={{width: `${probability}%`}}
            ></div>
          </div>
        </div>
        
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/50">
          <h4 className="font-medium mb-2 flex items-center">
            <Users size={18} className="text-purple-500 mr-2" />
            Collaborators
          </h4>
          <ul className="space-y-1">
            {collaborators.map((collaborator, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                {collaborator}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/50">
        <h4 className="font-medium mb-3 flex items-center">
          <ListChecks size={18} className="text-anka-green mr-2" />
          Steps
        </h4>
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-anka-green flex items-center justify-center text-white text-xs font-medium mr-3 mt-0.5">
                {index + 1}
              </div>
              <div>{step}</div>
            </li>
          ))}
        </ol>
      </div>
      
      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/50">
        <h4 className="font-medium mb-3">Required Resources</h4>
        <div className="flex flex-wrap gap-2">
          {resources.map((resource, index) => (
            <span key={index} className="px-3 py-1 rounded-full text-sm bg-anka-blue/10 text-anka-blue border border-anka-blue/20">
              {resource}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AIForm = ({ onSubmit }) => {
  const [idea, setIdea] = useState('');
  const [aiResult, setAiResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    
    setIsLoading(true);
    
    // Mock response after delay
    setTimeout(() => {
      setAiResult({
        idea,
        probability: Math.floor(Math.random() * 40) + 60,
        resources: [
          'Solar panels (250W)',
          'Rechargeable batteries',
          'Charge controller',
          'Inverter',
          'Mounting equipment',
          'Cables'
        ],
        steps: [
          'Assess your energy needs',
          'Determine the optimal location',
          'Purchase necessary components',
          'Mount the solar panels',
          'Connect the panels to controller',
          'Connect controller to batteries',
          'Test the system'
        ],
        collaborators: [
          'Solar technician',
          'Electrical engineer',
          'Sustainability consultant',
          'DIY community'
        ]
      });
      
      setIsLoading(false);
    }, 2000);
    
    onSubmit(idea);
  };
  
  const handleTextareaChange = (e) => {
    setIdea(e.target.value);
    
    // Auto-resize
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  
  return (
    <div className="glass rounded-2xl border border-white/40 overflow-hidden">
      <div className="p-6 border-b border-anka-gray/10">
        <h3 className="text-2xl font-semibold">AI Idea Evaluator</h3>
        <p className="text-anka-darkBlue/70 mt-1">
          Share your renewable energy idea
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-6">
          <label htmlFor="idea" className="block text-sm font-medium mb-2">
            Describe your renewable energy idea
          </label>
          <textarea
            ref={textareaRef}
            id="idea"
            value={idea}
            onChange={handleTextareaChange}
            placeholder="e.g., Small solar panel system for my apartment..."
            className="w-full rounded-xl border-anka-gray/30 focus:border-anka-blue focus:ring focus:ring-anka-blue/20 bg-white/80 min-h-[120px] resize-none p-4"
            rows={4}
            required
          />
        </div>
        
        <button
          type="submit"
          className={`w-full flex items-center justify-center py-3 px-4 rounded-xl font-medium ${
            idea.trim() ? 'bg-anka-blue hover:bg-anka-blue/90 text-white' : 'bg-anka-gray/30 text-anka-gray cursor-not-allowed'
          }`}
          disabled={!idea.trim() || isLoading}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Analyzing...
            </>
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Evaluate Idea
            </>
          )}
        </button>
      </form>
      
      {(aiResult || isLoading) && (
        <div className="border-t border-anka-gray/10">
          <AIResult 
            idea={idea} 
            probability={aiResult?.probability || 0} 
            resources={aiResult?.resources || []}
            steps={aiResult?.steps || []}
            collaborators={aiResult?.collaborators || []}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default AIForm;
