import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Import Link from next/link

const HeroSectionTech = ({ title, description, buttonText, imageSrc }) => {
  return (
    <div className="bg-black w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block">
              {/* <span className="text-lg font-semibold px-4 py-2 rounded-full text-[#ff5010]">
                {title}
              </span> */}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white-900 leading-tight">
              Innovative solutions <span className="text-[#ff5010]">for your business</span>
            </h2>
            
            <p className="text-lg text-white-600 max-w-xl">
              {description}
            </p>
            
            <div className="pt-4">
   
              <Link href="/contactus">
                <button 
                  className="flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-white bg-[#ff5010] hover:bg-[#e04509] transition-colors duration-300 shadow-lg"
                >
                  {buttonText}
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              {/* Add image here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTech;
