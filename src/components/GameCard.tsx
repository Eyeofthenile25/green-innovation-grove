
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Trophy, Gamepad, Zap, Wind, Droplet, LightbulbIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pointsReward: number;
  estimatedTime: string;
  theme: 'solar' | 'wind' | 'water' | 'efficiency';
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  image,
  category,
  difficulty,
  pointsReward,
  estimatedTime,
  theme
}) => {
  // Theme-based styling
  const getThemeClasses = () => {
    switch (theme) {
      case 'solar':
        return {
          icon: <Zap className="text-amber-400" />,
          glassClass: 'glass-gold',
          accentClass: 'border-amber-400/30',
          buttonClass: 'bg-amber-500 hover:bg-amber-600 text-black'
        };
      case 'wind':
        return {
          icon: <Wind className="text-blue-400" />,
          glassClass: 'glass-dark',
          accentClass: 'border-blue-400/30',
          buttonClass: 'bg-blue-500 hover:bg-blue-600 text-white'
        };
      case 'water':
        return {
          icon: <Droplet className="text-cyan-400" />,
          glassClass: 'glass-turquoise',
          accentClass: 'border-cyan-400/30',
          buttonClass: 'bg-cyan-500 hover:bg-cyan-600 text-white'
        };
      case 'efficiency':
        return {
          icon: <LightbulbIcon className="text-green-400" />,
          glassClass: 'glass',
          accentClass: 'border-green-400/30',
          buttonClass: 'bg-green-500 hover:bg-green-600 text-white'
        };
      default:
        return {
          icon: <Gamepad className="text-anka-gold" />,
          glassClass: 'glass',
          accentClass: 'border-anka-gold/30',
          buttonClass: 'bg-anka-gold hover:bg-anka-gold/90 text-black'
        };
    }
  };

  const themeClasses = getThemeClasses();
  
  // Difficulty color
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-amber-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${themeClasses.glassClass} rounded-2xl overflow-hidden h-full flex flex-col ${themeClasses.accentClass}`}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anka-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="flex items-center bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            {themeClasses.icon}
            <span className="ml-1 text-xs text-white/90 font-medium">{category}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        
        <p className="text-sm text-white/70 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center">
            <Clock size={14} className="text-anka-gray mr-1" />
            <span className="text-anka-gray">{estimatedTime}</span>
          </div>
          
          <div className="flex items-center">
            <span className={`font-medium ${getDifficultyColor()}`}>{difficulty}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <Trophy size={16} className="text-anka-gold mr-1" />
            <span className="text-anka-gold font-medium">{pointsReward} pts</span>
          </div>
        </div>
        
        <Button 
          className={`w-full py-2 font-medium text-sm ${themeClasses.buttonClass}`}
          onClick={() => console.log(`Starting game: ${title}`)}
        >
          <Gamepad className="mr-1" size={16} />
          Play Game
        </Button>
      </div>
    </motion.div>
  );
};

export default GameCard;
