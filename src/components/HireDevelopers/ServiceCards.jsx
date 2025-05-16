import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ services }) => {
  // If no services are provided, use the example from the image
  const defaultServices = [
    {
      title: "Experienced AI/ML Professionals",
      description: "Our team consists of skilled developers and data scientists with hands-on experience in building and deploying intelligent solutions tailored to various industries.",
      iconBg: "#3d2b2b"
    },
    {
      title: "Custom AI Solution for Every Business",
      description: "We don't believe in one-size-fits-all. Our AI/ML services are fully customized to match your unique business goals, workflows, and data challenges.",
      iconBg: "#3d2b2b"
    },
    {
      title: "End-to-End Project Execution",
      description: "From idea validation and model development to deployment and post-launch support — we handle the entire AI/ML development lifecycle seamlessly.",
      iconBg: "#3d2b2b"
    },
    {
      title: "Scalable and Future-Ready Architecture",
      description: "We build AI systems that are designed to scale with your growing data and user base, ensuring long-term performance and adaptability.",
      iconBg: "#3d2b2b"
    }
  ];

  const displayServices = services || defaultServices;

  return (
    <div className="w-full bg-gray-900 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {displayServices.map((service, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
            {/* Orange accent border at top */}
            <div className="h-1 w-full bg-[#ff5010]"></div>
            
            <div className="p-6">
              {/* Icon placeholder */}
              <div 
                className="h-12 w-12 rounded-lg mb-4"
                style={{ backgroundColor: service.iconBg || "#3d2b2b" }}
              ></div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              
              {/* Learn more link */}
              <div className="flex items-center text-gray-400 hover:text-[#ff5010] cursor-pointer transition-colors group">
                <span className="mr-1">Learn more</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;