import React from 'react';

const SkeletonLoader = ({ 
  type = 'text', 
  lines = 3, 
  className = '',
  height = 'h-4',
  width = 'w-full'
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return (
          <div className={`space-y-2 ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className={`${height} bg-gray-300 rounded animate-pulse ${
                  index === lines - 1 ? 'w-3/4' : width
                }`}
              />
            ))}
          </div>
        );
      
      case 'card':
        return (
          <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-gray-300 rounded animate-pulse w-1/2" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 bg-gray-300 rounded animate-pulse" />
              <div className="h-3 bg-gray-300 rounded animate-pulse w-5/6" />
              <div className="h-3 bg-gray-300 rounded animate-pulse w-4/6" />
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className={`bg-gray-300 rounded-lg animate-pulse ${className}`}>
            <div className={`${height} ${width} bg-gray-300 rounded-lg`} />
          </div>
        );
      
      case 'stats':
        return (
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center">
                <div className="h-8 bg-gray-300 rounded animate-pulse mb-2" />
                <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4 mx-auto" />
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className={`${height} ${width} bg-gray-300 rounded animate-pulse ${className}`} />
        );
    }
  };

  return renderSkeleton();
};

export default SkeletonLoader;
