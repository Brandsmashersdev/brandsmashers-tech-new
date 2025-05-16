import { useState } from 'react';

export default function CutThroughNoiseSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  // Custom color theme
  const primaryColor = "#ff5010";
  
  const steps = [
    {
      title: "Send Inquiry",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M16 8L12 12 8 8"></path>
        </svg>
      ),
      description: "Tell us your exact project requirements and our team will review and find the best developer for you."
    },
    {
      title: "Profile Vetting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l6-6-6-6"></path>
          <path d="M8 6l-6 6 6 6"></path>
          <path d="M1.2 12h21.6"></path>
        </svg>
      ),
      description: "After all the formalities are completed, you can assign tasks to the developer and start the project development."
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Hire Pre-vetted Developers from Best Remote Team
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Stop wasting time on endless interviews and underqualified profiles. With our expert IT Staff Augmentation services, we match you with pre-vetted, highly skilled professionals who are ready to make an impact from day one.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}  
              className="flex flex-col items-center text-center mb-12 lg:mb-0 group"
              onMouseEnter={() => setActiveStep(index)}
            >
              <div 
                className={`relative rounded-full w-40 h-40 flex items-center justify-center border-4 transition-all duration-300 ${
                  activeStep === index 
                    ? `border-[${primaryColor}] text-[${primaryColor}] shadow-lg` 
                    : 'border-gray-200 text-black hover:border-gray-300'
                }`}
                style={{
                  borderColor: activeStep === index ? primaryColor : '',
                  color: activeStep === index ? primaryColor : 'black',
                  boxShadow: activeStep === index ? '0 10px 25px -5px rgba(255, 80, 16, 0.3)' : ''
                }}
              >
                <div className="w-50 h-50">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute -right-8 lg:-right-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300`}
                      style={{
                        backgroundColor: activeStep === index || activeStep === index + 1 ? primaryColor : '#E5E7EB',
                        color: activeStep === index || activeStep === index + 1 ? 'white' : 'black'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <h3 
                className="text-xl font-bold mt-4 mb-2"
                style={{ color: activeStep === index ? primaryColor : 'black' }}
              >
                {`Step ${index + 1}`}
              </h3>
              <h4 className="text-xl font-semibold mb-2 text-black">{step.title}</h4>
              <p className="text-black text-sm max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}