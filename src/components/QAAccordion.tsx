
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface QAItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  toggleOpen: () => void;
  index: number;
}

const QAItem: React.FC<QAItemProps> = ({ question, answer, isOpen = false, toggleOpen, index }) => {
  return (
    <div 
      className={`border-b border-anka-gray/20 last:border-none ${isOpen ? 'pb-4' : ''} animate-fade-in-up`} 
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <button
        className="w-full flex items-center justify-between py-4 text-left font-medium text-lg focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="pr-8">{question}</span>
        <ChevronDown 
          className={`transition-transform duration-200 min-w-5 ${isOpen ? 'rotate-180 text-anka-blue' : ''}`} 
          size={20} 
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-anka-darkBlue/70 pb-2 pt-1">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

interface QAAccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
  title?: string;
  subtitle?: string;
}

const QAAccordion: React.FC<QAAccordionProps> = ({ 
  items,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to the most common questions about renewable energy"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50">
      {title && (
        <div className="mb-6 text-center">
          <h2 className="heading-3 mb-2">{title}</h2>
          {subtitle && <p className="text-anka-darkBlue/70">{subtitle}</p>}
        </div>
      )}
      
      <div>
        {items.map((item, index) => (
          <QAItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleItem(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default QAAccordion;
