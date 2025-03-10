
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  color?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  color = 'blue',
  index = 0
}) => {
  // Determine color classes based on the color prop
  const colorClasses = {
    blue: {
      iconBg: 'bg-anka-blue/10',
      iconColor: 'text-anka-blue',
      hoverBorder: 'group-hover:border-anka-blue/30'
    },
    green: {
      iconBg: 'bg-anka-green/10',
      iconColor: 'text-anka-green',
      hoverBorder: 'group-hover:border-anka-green/30'
    },
    purple: {
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      hoverBorder: 'group-hover:border-purple-500/30'
    },
    orange: {
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
      hoverBorder: 'group-hover:border-orange-500/30'
    },
    red: {
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-500',
      hoverBorder: 'group-hover:border-red-500/30'
    }
  };
  
  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  
  const CardContent = () => (
    <div className={`relative h-full glass rounded-2xl border border-white/40 p-6 transition-all duration-300 ${selectedColor.hoverBorder} group-hover:shadow-md group-hover:translate-y-[-2px]`}>
      <div className={`w-12 h-12 rounded-xl ${selectedColor.iconBg} ${selectedColor.iconColor} flex items-center justify-center mb-4`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-anka-darkBlue/70">{description}</p>
      
      {link && (
        <div className="mt-4 text-anka-blue font-medium flex items-center">
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M6.5 12.5L11 8L6.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );

  const staggerClass = `animate-fade-in-up stagger-${index % 4}`;
  
  return link ? (
    <Link to={link} className={`block group ${staggerClass}`}>
      <CardContent />
    </Link>
  ) : (
    <div className={`${staggerClass} group`}>
      <CardContent />
    </div>
  );
};

export default FeatureCard;
