
import React, { useState, useRef } from 'react';
import { Send, Lightbulb, Zap, ListChecks, Users, Save, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
      
      <div className="flex flex-wrap gap-3 justify-end">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Save size={16} />
          Save Analysis
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Share size={16} />
          Share
        </Button>
      </div>
    </div>
  );
};

const AIForm: React.FC<AIFormProps> = ({ onSubmit }) => {
  const [idea, setIdea] = useState('');
  const [aiResult, setAiResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("new");
  const textareaRef = useRef(null);
  
  // Mock saved ideas for demonstration
  const savedIdeas = [
    {
      id: 1,
      title: "Solar-powered water purification",
      date: "April 1, 2025"
    },
    {
      id: 2,
      title: "Community wind turbine project",
      date: "March 28, 2025"
    }
  ];
  
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
      setActiveTab("result");
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
  
  const loadSavedIdea = (id) => {
    // In a real app, we would fetch the saved idea data
    console.log(`Loading saved idea ${id}`);
    setIdea(`This is the content of saved idea #${id}`);
    setActiveTab("new");
  };
  
  return (
    <div className="glass rounded-2xl border border-white/40 overflow-hidden">
      <div className="p-6 border-b border-anka-gray/10">
        <h3 className="text-2xl font-semibold">AI Idea Evaluator</h3>
        <p className="text-anka-darkBlue/70 mt-1">
          Share your renewable energy idea for instant feedback and implementation guidance
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="p-4 border-b border-anka-gray/10">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="new" className="flex gap-2 items-center">
              <Lightbulb size={16} />
              New Idea
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex gap-2 items-center">
              <Save size={16} />
              Saved Ideas
            </TabsTrigger>
            <TabsTrigger value="result" className="flex gap-2 items-center" disabled={!aiResult && !isLoading}>
              <Zap size={16} />
              Results
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="new" className="p-6 focus-visible:outline-none focus-visible:ring-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="idea" className="block text-sm font-medium mb-2">
                Describe your renewable energy idea in detail
              </label>
              <textarea
                ref={textareaRef}
                id="idea"
                value={idea}
                onChange={handleTextareaChange}
                placeholder="e.g., I want to create a small solar panel system for my apartment balcony that can power my laptop and charge phones..."
                className="w-full rounded-xl border-anka-gray/30 focus:border-anka-blue focus:ring focus:ring-anka-blue/20 bg-white/80 min-h-[120px] resize-none p-4"
                rows={4}
                required
              />
              <div className="flex justify-between text-xs text-anka-gray mt-1">
                <span>Be specific about your goals and constraints</span>
                <span>{idea.length} characters</span>
              </div>
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
        </TabsContent>
        
        <TabsContent value="saved" className="p-6 focus-visible:outline-none focus-visible:ring-0">
          {savedIdeas.length > 0 ? (
            <div className="space-y-3">
              {savedIdeas.map(savedIdea => (
                <div 
                  key={savedIdea.id}
                  className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50 cursor-pointer hover:bg-white/70 transition-colors"
                  onClick={() => loadSavedIdea(savedIdea.id)}
                >
                  <h4 className="font-medium">{savedIdea.title}</h4>
                  <div className="flex justify-between text-sm text-anka-gray mt-1">
                    <span>Last edited: {savedIdea.date}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Lightbulb size={48} className="text-anka-gray/40 mx-auto mb-3" />
              <h4 className="text-lg font-medium mb-1">No saved ideas yet</h4>
              <p className="text-anka-gray">Your evaluated ideas will appear here</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setActiveTab("new")}
              >
                Create New Idea
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="result" className="focus-visible:outline-none focus-visible:ring-0">
          {(aiResult || isLoading) && (
            <AIResult 
              idea={idea} 
              probability={aiResult?.probability || 0} 
              resources={aiResult?.resources || []}
              steps={aiResult?.steps || []}
              collaborators={aiResult?.collaborators || []}
              isLoading={isLoading}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIForm;
