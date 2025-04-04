
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface QAItem {
  question: string;
  answer: string;
}

interface QAAccordionProps {
  items: QAItem[];
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
      {/* Header section */}
      {title && (
        <div className="mb-6 text-center">
          <h2 className="heading-3 mb-2">{title}</h2>
          {subtitle && <p className="text-anka-darkBlue/70">{subtitle}</p>}
        </div>
      )}
      
      {/* Questions and answers */}
      <div>
        {items.map((item, index) => (
          <div 
            key={index}
            className={`border-b border-anka-gray/20 last:border-none ${openIndex === index ? 'pb-4' : ''} animate-fade-in-up`} 
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Question button */}
            <button
              className="w-full flex items-center justify-between py-4 text-left font-medium text-lg focus:outline-none"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <span className="pr-8">{item.question}</span>
              <ChevronDown 
                className={`transition-transform duration-200 min-w-5 ${openIndex === index ? 'rotate-180 text-anka-blue' : ''}`} 
                size={20} 
              />
            </button>
            
            {/* Answer content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-anka-darkBlue/70 pb-2 pt-1">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QAAccordion;
