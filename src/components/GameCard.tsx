
import React from 'react';
import { Trophy, Star, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  pointsValue: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  players?: string;
  onPlay?: () => void;
  category: string;
  icon?: React.ReactNode;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  image,
  pointsValue,
  difficulty,
  duration,
  players,
  onPlay,
  category,
  icon
}) => {
  // Set difficulty color
  const difficultyColor = 
    difficulty === 'Easy' 
      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
      : difficulty === 'Medium' 
        ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
        : 'bg-red-500/20 text-red-400 border-red-500/30';
        
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-dark rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anka-black to-transparent"></div>
        
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-anka-navy/80 text-white border border-anka-turquoise/30">
            {category}
          </span>
        </div>
        
        <div className="absolute top-3 right-3">
          <div className="flex items-center bg-anka-gold/90 rounded-full px-2 py-1 text-anka-black">
            <Trophy size={14} className="mr-1" />
            <span className="text-xs font-bold">{pointsValue} pts</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h3>
        
        <p className="text-anka-sand/70 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <div className={`px-2 py-1 rounded-md text-xs font-medium border ${difficultyColor} flex items-center`}>
            <Star size={12} className="mr-1" />
            {difficulty}
          </div>
          
          <div className="px-2 py-1 rounded-md text-xs font-medium bg-anka-navy/30 text-anka-cream/90 border border-anka-cream/20 flex items-center">
            <Clock size={12} className="mr-1" />
            {duration}
          </div>
          
          {players && (
            <div className="px-2 py-1 rounded-md text-xs font-medium bg-anka-navy/30 text-anka-cream/90 border border-anka-cream/20 flex items-center">
              <Users size={12} className="mr-1" />
              {players}
            </div>
          )}
        </div>
        
        <button
          onClick={onPlay}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-anka-turquoise to-anka-blue text-white rounded-xl font-medium transition-colors hover:from-anka-turquoise/90 hover:to-anka-blue/90 flex justify-center items-center"
        >
          Play Now
        </button>
      </div>
    </motion.div>
  );
};

export default GameCard;
