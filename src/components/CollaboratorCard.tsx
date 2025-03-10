
import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

interface CollaboratorCardProps {
  name: string;
  image: string;
  category: string;
  description: string;
  rating?: number;
  website?: string;
  featured?: boolean;
}

const CollaboratorCard: React.FC<CollaboratorCardProps> = ({
  name,
  image,
  category,
  description,
  rating = 0,
  website,
  featured = false
}) => {
  return (
    <div className={`animate-fade-in-up group glass rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-md ${
      featured ? 'border-anka-blue/30 ring-1 ring-anka-blue/20' : 'border-white/40'
    }`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-[3/2] object-cover"
        />
        
        {featured && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-anka-blue text-white text-xs font-medium rounded-full">
            Featured Partner
          </div>
        )}
        
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <span className="text-white/80 text-sm">{category}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          {rating > 0 && (
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-anka-gray/30'}`} 
                />
              ))}
              <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        <p className="text-anka-darkBlue/70 text-sm mb-4 line-clamp-3">{description}</p>
        
        {website && (
          <a 
            href={website}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-anka-blue font-medium text-sm hover:underline"
          >
            Visit Website
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CollaboratorCard;
