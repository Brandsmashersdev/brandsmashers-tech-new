"use client";

import React, { useState } from 'react';

const ToggleIcon = ({ isOpen }) => (
  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19" stroke="#ff5010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12H19" stroke="#ff5010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const faqData = [
  {
    question: "What services does Brandsmashers Tech offer?",
    answer: "Brand Smashers Tech is an innovative software development company, that can offer a full range of IT services, such as custom software development, web and mobile application development, UI/UX design, e-commerce Website development, SEO and advertising. The services also include staff augmentation here we provide businesses with experienced remote developers for hire. No matter whether you require development of custom software solution or custom digital marketing solution for your business, you can be assured to get professional solutions from us with adequate technical competence for designing the perfect solution for your business."
  },
  {
    question: "How does Brandsmashers Tech ensure the quality of its developers?",
    answer: "When it comes to selecting developers at Brandsmashers Tech, we do not let loose anyone who does not conform to the highest standards set in this industry. The team assembled by our company comprises professional developers familiar with advanced technologies including React, Node.js and Java. Based in Bhopal, we are a software development company that strives to provide the best as a result of that, we make sure our developers are always up to date with new technologies through training and performance evaluations.. This guarantees that every project is handled by qualified experts who deliver quality solutions on time."
  },
  {
    question: "Can Brandsmashers Tech scale a team for a large project?",
    answer: "Absolutely. Brandsmashers Tech employs the capability of acquiring development teams for big-scale and complicated projects. We are one of the leading software development companies in India and our staff augmentation services enable clients to quickly scale their team with professional developers, regardless of the current trends, to meet project needs immediately."
  },
  {
    question: "What technologies do your developers specialize in?",
    answer: "Our developers at Brandsmashers Tech specialize in a wide array of technologies, including React, Vue.js, Node.js, Java, React Native, and AWS. This diverse skill set allows us to offer innovative solutions tailored to your business needs. Whether youre looking for a custom-built application or need to improve your existing systems, our expertise as a leading software development company ensures you get the best technical solutions."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Of course, we provide post-launch assistance for all the projects which have been developed by our fleet of professionals. Being a reliable company, which provides software development in Bhopal, we realize that you might change your requirements after the project is completed. These are steps such as bug fixes, upgrades, and adding qualities to software applications which we undertake to assist in maintaining your software throughout its usage."
  },
  {
    question: "What is your typical project timeline?",
    answer: "The time it takes to complete projects can therefore not be generalized but it depends on the project at Brandsmashers Tech. The time required from the conceptual stage to project completion in SMM varies, and it normally ranges from 4 weeks in a small project to 12 weeks in an mid-sized project. We are a top software development company that employs the agile software development approach, making changes and reporting to the customer on progress constantly. The project deadlines are particularly well managed through teamwork with the clients to enhance quality."
  },
  {
    question: "What industries do you serve?",
    answer: "Our solutions at Brandsmashers Tech range across most sectors such as e-commerce and online businesses, healthcare, education, logistics, agriculture, among others. CIM has been an established software company in India and provides our solutions as per the specific requirements of each of these sectors to ensure the optimum utilization and development of our services. Regardless of whether your organization operates in the retail or the healthcare industry we provide the necessary knowledge to match your business environment and ensure success."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-8 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header Section with minimalist design */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          {/* Left Section with title */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 relative inline-block">
              Frequently Asked
              <span className="text-[#ff5010]"> Questions</span>
              <div className="absolute -bottom-3 left-0 h-1 w-16 bg-[#ff5010]"></div>
            </h1>
          </div>
          
          {/* Right Section - Simple Call to action */}
          <div className="text-right">
            <h2 className="text-gray-700 text-xl font-medium mb-2">Still Have Questions?</h2>
            <a
              href="/contactus" 
              className="text-[#ff5010] text-xl font-semibold hover:underline inline-flex items-center group" >
              Let's Talk
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* FAQ Section with clean minimal styling */}
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
            <div 
              key={index} 
              className="transition-all duration-300 border-b border-gray-100 pb-2"
            >
              {/* Question */}
              <div
                onClick={() => toggleQuestion(index)}
                className="cursor-pointer"
              >
                <div className="flex justify-between items-center py-5">
                  <h3 className={`text-xl font-medium ${isActive ? 'text-[#ff5010]' : 'text-gray-800'} transition-colors duration-300`}>
                    {faq.question}
                  </h3>
                  <ToggleIcon isOpen={isActive} />
                </div>
              </div>

              {/* Answer with smooth transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-[#ff5010]">
                  {faq.answer}
                </p>
              </div>
            </div>
          )})}
        </div>
        
        {/* Stylish bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-24 bg-[#ff5010]"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;