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
                 <div className={`bg-white rounded-lg shadow-md p-6 ${className}`} data-testid="skeleton-card">
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

      case 'service-card':
        return (
          <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-lg animate-pulse" />
              <div className="flex-1">
                <div className="h-5 bg-gray-300 rounded animate-pulse w-3/4 mb-2" />
                <div className="h-3 bg-gray-300 rounded animate-pulse w-1/2" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-300 rounded animate-pulse" />
              <div className="h-3 bg-gray-300 rounded animate-pulse w-5/6" />
              <div className="h-3 bg-gray-300 rounded animate-pulse w-4/6" />
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="h-8 bg-gray-300 rounded-lg animate-pulse w-1/3" />
            </div>
          </div>
        );

      case 'blog-card':
        return (
          <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
            <div className="h-48 bg-gray-300 animate-pulse" />
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="h-3 bg-gray-300 rounded animate-pulse w-16" />
                <div className="h-3 bg-gray-300 rounded animate-pulse w-20" />
              </div>
              <div className="h-5 bg-gray-300 rounded animate-pulse w-3/4 mb-2" />
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded animate-pulse" />
                <div className="h-3 bg-gray-300 rounded animate-pulse w-5/6" />
                <div className="h-3 bg-gray-300 rounded animate-pulse w-4/6" />
              </div>
            </div>
          </div>
        );

      case 'testimonial':
        return (
          <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse" />
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded animate-pulse w-2/3 mb-1" />
                <div className="h-3 bg-gray-300 rounded animate-pulse w-1/2" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 rounded animate-pulse" />
              <div className="h-3 bg-gray-300 rounded animate-pulse w-5/6" />
              <div className="h-3 bg-gray-300 rounded animate-pulse w-4/6" />
            </div>
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
