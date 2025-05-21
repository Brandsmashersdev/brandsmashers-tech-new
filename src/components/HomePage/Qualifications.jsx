import { useState } from 'react';

export default function CutThroughNoiseSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  // Custom color theme
  const primaryColor = "#ff5010";
  
  const steps = [
    {
      title: "Send Inquiry",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M16 8L12 12 8 8"></path>
        </svg>
      ),
      description: "Tell us your exact project requirements and our team will review and find the best developer for you."
    },
    {
      title: "Profile Vetting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      description: "Our technical team evaluates the requirements or job description and shares the top-qualified resumes with you for assessment."
    },
    {
      title: "Interview",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M8 21h8"></path>
          <path d="M12 17v4"></path>
          <circle cx="10" cy="10" r="3"></circle>
          <path d="M15 8a2 2 0 1 1 0 4"></path>
        </svg>
      ),
      description: "We set up meetings with shortlisted candidates so you can evaluate and decide with confidence."
    },
    {
      title: "NDA and Onboarding",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
          <path d="M22 12h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
          <path d="M16 12l-3.5 3.5-2-2L9 15"></path>
          <path d="M22 7v5"></path>
        </svg>
      ),
      description: "After finalizing candidates, provide us with the necessary company details to complete the NDA and onboarding process."
    },
    {
      title: "Start Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l6-6-6-6"></path>
          <path d="M8 6l-6 6 6 6"></path>
          <path d="M1.2 12h21.6"></path>
        </svg>
      ),
      description: "After all the formalities are completed, you can assign tasks to the developer and start the project development."
    },
  ];

  return (
    <div className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange-100 -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-100 translate-x-1/3 translate-y-1/3 opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Hire Pre-vetted Developers from <span className="text-orange-500">Best IT Staff Augmentation Company</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stop wasting time on endless interviews and underqualified profiles. With our expert IT Staff Augmentation services, we match you with pre-vetted, highly skilled professionals who are ready to make an impact from day one.
          </p>
        </div>
        
        {/* Mobile Step Display */}
        <div className="md:hidden mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  activeStep === index ? 'bg-orange-500 text-white' : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4">
                {steps[activeStep].icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold">{steps[activeStep].title}</h4>
                <span className="text-gray-500 text-sm">Step {activeStep + 1}</span>
              </div>
            </div>
            <p className="text-gray-600">{steps[activeStep].description}</p>
          </div>
        </div>
        
        {/* Desktop Step Display */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative group cursor-pointer`}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative z-10 flex flex-col bg-white p-6 rounded-2xl transition-all duration-300 h-full
                  ${activeStep === index ? 'shadow-xl border-t-4 border-orange-500 transform -translate-y-2' : 'shadow border-t-4 border-transparent hover:shadow-lg'}
                `}>
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white 
                      ${activeStep === index ? 'bg-orange-500' : 'bg-gray-200 text-gray-600 group-hover:bg-orange-400 group-hover:text-white'}
                    `}>
                      {step.icon}
                    </div>
                  </div>
                  <h4 className={`text-lg font-bold mb-1 transition-colors 
                    ${activeStep === index ? 'text-orange-500' : 'text-gray-800'}
                  `}>
                    {step.title}
                  </h4>
                  <div className="text-xs font-semibold text-gray-500 mb-4">Step {index + 1}</div>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0 hidden lg:block">
                    <div className={`w-8 h-1 ${activeStep === index || activeStep === index + 1 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
      
      </div>
    </div>
  );
}