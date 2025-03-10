
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc
}) => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background gradient - dark version */}
      <div className="absolute inset-0 bg-gradient-to-br from-anka-nightBlue via-anka-pharaohBlue to-anka-darkNavy -z-10"></div>
      
      {/* Optional decorative elements - dark version */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-anka-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-anka-turquoise/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-anka-gold/10 text-anka-gold border border-anka-gold/20">
            <Sparkles size={16} className="mr-2" />
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          
          <h1 className="heading-1 mb-6 text-balance">{title}</h1>
          
          <p className="body-large mb-8 text-foreground/80 max-w-xl">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to={ctaLink}
              className="inline-flex items-center px-6 py-3 rounded-full bg-anka-gold hover:bg-anka-gold/90 text-anka-pharaohBlue font-medium transition-colors shadow-sm hover:shadow group"
            >
              {ctaText}
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                to={secondaryCtaLink}
                className="inline-flex items-center px-6 py-3 rounded-full bg-anka-navy/50 hover:bg-anka-navy text-foreground font-medium border border-anka-gold/20 transition-colors"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
        
        {/* Image */}
        {imageSrc && (
          <div className="relative animate-fade-in-up stagger-1">
            <img 
              src={imageSrc} 
              alt="Renewable Energy Innovation" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-anka-gold/20 to-transparent rounded-2xl -z-10 blur-xl opacity-50"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
