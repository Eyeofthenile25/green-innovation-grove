
import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, User } from 'lucide-react';

interface VolunteerCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  duration: string;
  image: string;
  type: 'adult' | 'kids';
  spots?: number;
  onApply?: () => void;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({
  title,
  description,
  date,
  location,
  duration,
  image,
  type,
  spots,
  onApply
}) => {
  // Simplified color logic
  const typeColor = type === 'adult' ? 'bg-anka-blue text-white' : 'bg-purple-500 text-white';
  const typeText = type === 'adult' ? 'Adults' : 'Kids';
  
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/40 hover:shadow-lg transition-all group">
      {/* Image section */}
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Event type badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColor}`}>
            {typeText}
          </span>
        </div>
        
        {/* Spots left indicator */}
        {spots !== undefined && (
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 text-white text-sm rounded-full flex items-center">
            <User size={14} className="mr-1" />
            {spots} spot{spots !== 1 ? 's' : ''} left
          </div>
        )}
      </div>
      
      {/* Content section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-anka-darkBlue/70 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Event details */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center text-sm text-anka-darkBlue/80">
            <Calendar size={16} className="mr-2 text-anka-blue" />
            {date}
          </div>
          <div className="flex items-center text-sm text-anka-darkBlue/80">
            <MapPin size={16} className="mr-2 text-anka-blue" />
            {location}
          </div>
          <div className="flex items-center text-sm text-anka-darkBlue/80">
            <Clock size={16} className="mr-2 text-anka-blue" />
            {duration}
          </div>
        </div>
        
        {/* Apply button */}
        <button
          onClick={onApply}
          className="w-full py-2.5 px-4 bg-anka-blue hover:bg-anka-blue/90 text-white rounded-xl font-medium transition-colors flex items-center justify-center group"
        >
          Apply Now
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default VolunteerCard;
