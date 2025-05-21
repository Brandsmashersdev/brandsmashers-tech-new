import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';  // Import Image from next/image

const HeroSection = ({
  imageSrc,
  imageAlt = "Hero Image",
  title,
  highlightedText,
  titlee,
  description,
  features = [],
  backgroundColor = "#343333",
  accentColor = "#2CC5D9"
}) => {
  return (
    <div className="w-full" style={{ backgroundColor }}>
      <div className="w-4/5 mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <Image 
                src={imageSrc} 
                alt={imageAlt}
                className="object-cover relative rounded-[12px_55px_12px_55px]"
                style={{ 
                  borderLeft: `7px solid ${accentColor}`,
                  transition: 'opacity 500ms',
                  flexShrink: 0
                }}
                width={800}   // You can adjust these width and height values
                height={600}  // to match the aspect ratio of your image
                layout="responsive"  // Ensures the image scales correctly for different screen sizes
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-2xl md:text-4xl italic mb-8">
              {title} <span style={{ color: accentColor }}>{highlightedText}</span> {titlee}
            </h1>
            
            <p className="italic md:text-2xl mb-8">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center italic gap-2">
                  <div 
                    className="flex items-center justify-center w-5 h-5 rounded"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Check className="text-white" size={18} />
                  </div>
                  <span className="text-white font-bold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
