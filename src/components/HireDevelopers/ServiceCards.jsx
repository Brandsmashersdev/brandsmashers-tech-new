import React from 'react';
import { Brain, Target, Workflow, Zap, ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ services }) => {
  // Default services with appropriate icons
  const defaultServices = [
    {
      title: "Experienced AI/ML Professionals",
      description: "Our team consists of skilled developers and data scientists with hands-on experience in building and deploying intelligent solutions tailored to various industries.",
      icon: Brain
    },
    {
      title: "Custom AI Solution for Every Business", 
      description: "We don't believe in one-size-fits-all. Our AI/ML services are fully customized to match your unique business goals, workflows, and data challenges.",
      icon: Target
    },
    {
      title: "End-to-End Project Execution",
      description: "From idea validation and model development to deployment and post-launch support — we handle the entire AI/ML development lifecycle seamlessly.",
      icon: Workflow
    },
    {
      title: "Scalable and Future-Ready Architecture",
      description: "We build AI systems that are designed to scale with your growing data and user base, ensuring long-term performance and adaptability.",
      icon: Zap
    }
  ];

  const displayServices = services || defaultServices;

  return (
    <div className="w-full bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayServices.map((service, index) => {
            const IconComponent = service.icon || Brain;
            
            return (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-[#ff5010] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff5010]/10 hover:-translate-y-2"
              >
                {/* Glowing background effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5010]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with animated background */}
                

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff5010] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn more button */}
                
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff5010]/10 to-transparent rounded-2xl transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#ff5010]/5 to-transparent rounded-2xl transform -rotate-12 group-hover:-rotate-45 transition-transform duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;