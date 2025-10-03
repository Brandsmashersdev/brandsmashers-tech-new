import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const ActionCard = ({ 
  name, 
  icon: Icon, 
  url, 
  color, 
  hoverColor, 
  followers, 
  isCalendly, 
  onClick,
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (isCalendly && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={isCalendly ? '#' : url}
      target={url.startsWith('tel:') || url.startsWith('mailto:') ? '_self' : '_blank'}
      rel={url.startsWith('tel:') || url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
      className="group relative block"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`
        relative overflow-hidden rounded-2xl transition-all duration-500 
        hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
        ${hoverColor} bg-white/5 backdrop-blur-sm border border-white/10
        hover:border-white/30 hover:bg-white/10
        h-32 sm:h-36
      `}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/50 transition-all duration-500" />
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        
        {/* Floating Particles on Hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" />
            <div className="absolute top-4 right-3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-3 left-4 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
          </div>
        )}
        
        {/* Content Container */}
        <div className="relative p-4 sm:p-6 flex flex-col items-center justify-center h-full">
          {/* Icon Container */}
          <div className="mb-3 relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full group-hover:from-white/30 group-hover:to-white/10 transition-all duration-500" />
            
            {/* Icon */}
            <div className="relative bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-full border-2 border-white/40 group-hover:border-white/60 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:drop-shadow-lg" />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center">
            <h3 className="text-sm sm:text-base font-bold mb-1 text-white group-hover:text-white/90 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
              {followers}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:scale-110 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full transform -translate-x-6 translate-y-6 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500" />
        
        {/* External Link Indicator */}
        {!isCalendly && !url.startsWith('tel:') && !url.startsWith('mailto:') && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-3 h-3 text-white/60" />
          </div>
        )}
      </div>
    </a>
  );
};

export default ActionCard;
