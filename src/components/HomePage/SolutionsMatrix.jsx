import React, { useState, useEffect } from "react";
import { Star, Trophy, Users, Clock, ArrowRight } from "lucide-react";

export default function StatsCounter() {
  const [counts, setCounts] = useState({
    experts: 0,
    projects: 0,
    customers: 0,
    years: 0
  });

  const targetCounts = {
    experts: 1000,
    projects: 2000,
    customers: 300,
    years: 11
  };

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / steps, 1);
      
      setCounts({
        experts: Math.floor(targetCounts.experts * progress),
        projects: Math.floor(targetCounts.projects * progress),
        customers: Math.floor(targetCounts.customers * progress),
        years: Math.floor(targetCounts.years * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const technologies = [
    "AS/400", "Power BI", "ReactJS", "Node.js", "Python", 
    "React Native", "Java", "EDI", "JavaScript", "Vue.js", "PHP"
  ];

  // The main color
  const mainColor = "#ff5010";

  return (
    <div className="bg-white py-16 px-4 md:px-8 font-sans">
      {/* Main section with text and counters side by side */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mb-16 gap-12 items-center">
        {/* Header Text Section */}
        <div className="md:w-1/2 space-y-6">
          <div className="relative">
            <h2 
              className="text-4xl font-bold mb-2 relative z-10" 
              style={{color: mainColor}}
            >
              Solutions Matrix
            </h2>
            <div 
              className="absolute bottom-0 left-0 w-24 h-3 rounded-full opacity-40" 
              style={{backgroundColor: mainColor}}
            />
          </div>
          
          <h3 className="text-3xl font-bold text-gray-800">
            Proof is in the <span style={{color: mainColor}} className="italic">Numbers</span>
          </h3>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            With over 6+ years of experience, Brandsmashers Tech is a trusted software 
            development company in India, delivering innovative, custom solutions to 
            drive your growth and prepare you for the future.
          </p>
          
          <div className="flex space-x-4 mt-8">
            <button 
              className="px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style={{backgroundColor: mainColor, color: "white"}}
            >
              Learn More <ArrowRight size={18} />
            </button>
            <button 
              className="px-6 py-3 border-2 rounded-lg transition-all duration-300 flex items-center"
              style={{borderColor: mainColor, color: mainColor}}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = mainColor;
                e.currentTarget.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = mainColor;
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Stats Section in 2x2 Grid */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Users, count: counts.experts, label: "Qualified Experts" },
              { icon: Trophy, count: counts.projects, label: "Projects Delivered" },
              { icon: Star, count: counts.customers, label: "Satisfied Customers" },
              { icon: Clock, count: counts.years, label: "Years In Business" }
            ].map(({ icon: Icon, count, label }, index) => (
              <div 
                key={index} 
                className="text-center bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <Icon 
                    size={48} 
                    style={{ color: mainColor }}
                    className="opacity-90"
                  />
                </div>
                <h2 
                  className="text-4xl md:text-5xl font-bold mb-2" 
                  style={{color: mainColor}}
                >
                  {count}
                  <span className="text-3xl">+</span>
                </h2>
                <p className="text-gray-700 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2" style={{color: mainColor}}>Technologies We Work With</h3>
          <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: mainColor}}></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="px-6 py-3 rounded-lg bg-gray-50 shadow-sm hover:shadow transition-all duration-300"
            >
              <span className="font-medium" style={{color: mainColor}}>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}