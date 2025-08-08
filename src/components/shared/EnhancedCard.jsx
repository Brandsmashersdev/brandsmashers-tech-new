import React from 'react';

const EnhancedCard = ({ 
  children, 
  variant = 'default',
  hover = true,
  clickable = false,
  onClick,
  className = '',
  ...props 
}) => {
  const getVariantStyles = () => {
    const baseStyles = "bg-white rounded-lg shadow-md transition-all duration-300";
    
    const variants = {
      default: "border border-gray-200",
      elevated: "shadow-lg hover:shadow-xl",
      outlined: "border-2 border-gray-300",
      gradient: "bg-gradient-to-br from-white to-gray-50",
      glass: "bg-white/80 backdrop-blur-sm border border-white/20"
    };

    return `${baseStyles} ${variants[variant]}`;
  };

  const getHoverStyles = () => {
    if (!hover) return "";
    
    return "hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-1";
  };

  const getClickableStyles = () => {
    if (!clickable) return "";
    
    return "cursor-pointer active:scale-95";
  };

  return (
    <div
      className={`${getVariantStyles()} ${getHoverStyles()} ${getClickableStyles()} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default EnhancedCard;
