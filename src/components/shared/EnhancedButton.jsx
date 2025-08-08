import React from 'react';

const EnhancedButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  disabled = false,
  onClick,
  className = '',
  ...props 
}) => {
  const getVariantStyles = () => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-[#ff5010] text-white hover:bg-[#e0450e] focus:ring-[#ff5010] shadow-lg hover:shadow-xl",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg",
      outline: "border-2 border-[#ff5010] text-[#ff5010] hover:bg-[#ff5010] hover:text-white focus:ring-[#ff5010]",
      ghost: "text-[#ff5010] hover:bg-[#ff5010] hover:text-white focus:ring-[#ff5010]",
      danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-lg hover:shadow-xl",
      success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 shadow-lg hover:shadow-xl"
    };

    return `${baseStyles} ${variants[variant]}`;
  };

  const getSizeStyles = () => {
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl"
    };

    return sizes[size];
  };

  const getLoadingStyles = () => {
    if (loading) {
      return "opacity-75 cursor-not-allowed";
    }
    return "";
  };

  const getDisabledStyles = () => {
    if (disabled) {
      return "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100";
    }
    return "";
  };

  return (
    <button
      className={`${getVariantStyles()} ${getSizeStyles()} ${getLoadingStyles()} ${getDisabledStyles()} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
};

export default EnhancedButton;
