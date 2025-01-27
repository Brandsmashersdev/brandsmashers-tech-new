"use client";

import React, { useState } from 'react';

const ToggleIcon = ({ isOpen, background }) => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <circle cx="12" cy="12" r="11" fill={background} stroke="#000" strokeWidth="1" />
    <line x1="7" y1="12" x2="17" y2="12" stroke="#000" strokeWidth="2" />
    {!isOpen && <line x1="12" y1="7" x2="12" y2="17" stroke="#000" strokeWidth="2" />}
  </svg>
);

const faqData = [
  {
    question: "What services does Brandsmashers Tech offer?",
    answer: "Brand Smashers Tech is an innovative software development company, that can offer a full range of IT services, such as custom software development, web and mobile application development, UI/UX design, e-commerce Website development, SEO and advertising. The services also include staff augmentation here we provide businesses with experienced remote developers for hire. No matter whether you require development of custom software solution or custom digital marketing solution for your business, you can be assured to get professional solutions from us with adequate technical competence for designing the perfect solution for your business.",
    background: "#FEE2E1"
  },
  {
    question: "How does Brandsmashers Tech ensure the quality of its developers?",
    answer: "When it comes to selecting developers at Brandsmashers Tech, we do not let loose anyone who does not conform to the highest standards set in this industry. The team assembled by our company comprises professional developers familiar with advanced technologies including React, Node.js and Java. Based in Bhopal, we are a software development company that strives to provide the best as a result of that, we make sure our developers are always up to date with new technologies through training and performance evaluations.. This guarantees that every project is handled by qualified experts who deliver quality solutions on time.",
    background: "#FEF9C3"
  },
  {
    question: "Can Brandsmashers Tech scale a team for a large project?",
    answer: "Absolutely. Brandsmashers Tech employs the capability of acquiring development teams for big-scale and complicated projects. We are one of the leading software development companies in India and our staff augmentation services enable clients to quickly scale their team with professional developers, regardless of the current trends, to meet project needs immediately.",
    background: "#F3E8FF"
  },
  {
    question: "What technologies do your developers specialize in?",
    answer: "Our developers at Brandsmashers Tech specialize in a wide array of technologies, including React, Vue.js, Node.js, Java, React Native, and AWS. This diverse skill set allows us to offer innovative solutions tailored to your business needs. Whether youre looking for a custom-built application or need to improve your existing systems, our expertise as a leading software development company ensures you get the best technical solutions.",
    background: "#FCDFA4"
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Of course, we provide post-launch assistance for all the projects which have been developed by our fleet of professionals. Being a reliable company, which provides software development in Bhopal, we realize that you might change your requirements after the project is completed. These are steps such as bug fixes, upgrades, and adding qualities to software applications which we undertake to assist in maintaining your software throughout its usage.",
    background: "#B4E9FF"
  },
  {
    question: "What is your typical project timeline?",
    answer: "The time it takes to complete projects can therefore not be generalized but it depends on the project at Brandsmashers Tech. The time required from the conceptual stage to project completion in SMM varies, and it normally ranges from 4 weeks in a small project to 12 weeks in an mid-sized project. We are a top software development company that employs the agile software development approach, making changes and reporting to the customer on progress constantly. The project deadlines are particularly well managed through teamwork with the clients to enhance quality.",
    background: "#DCFCE7"
  },
  {
    question: "What industries do you serve?",
    answer: "Our solutions at Brandsmashers Tech range across most sectors such as e-commerce and online businesses, healthcare, education, logistics, agriculture, among others. CIM has been an established software company in India and provides our solutions as per the specific requirements of each of these sectors to ensure the optimum utilization and development of our services. Regardless of whether your organization operates in the retail or the healthcare industry we provide the necessary knowledge to match your business environment and ensure success.",
    background: "#DBE9FE"
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" p-8">
      <div className=" mx-auto md:w-4/5 ">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-[4rem] gap-6 ">
          {/* Left Section */}
          <h1 className="text-xl md:text-3xl font-bold text-white">
            Frequently Asked
            <span style={{ color: '#2CC5D9' }}> Questions</span>
          </h1>
          
          {/* Right Section */}
          <div className="">
            <h2 className="text-white text-xl md:text-2xl ">Still Have Questions?</h2>
            <a href="#" style={{ color: '#2CC5D9' }} className="text-lg md:text-xl hover:underline">Lets Talk</a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 max-w-full  ">
          {faqData.map((faq, index) => (
            <div key={index} className="transition-all duration-300">
              {/* Question */}
              <div
                className=" cursor-pointer"
                style={{
                  backgroundColor: faq.background,
                  borderRadius: "6px",
                }}
              >
                <div
                  className="flex justify-between  items-center p-4 md:p-6"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="font-bold text-lg md:text-xl font-bold italic text-black">
                    {faq.question}
                  </h3>
                  <div className="transition-transform duration-300">
                    <ToggleIcon isOpen={activeIndex === index} background={faq.background} />
                  </div>
                </div>
              </div>

              {/* Answer */}
              <div
                style={{ backgroundColor: faq.background }}
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
              >
                <p className="p-4 md:p-6 text-sm md:text-xl italic text-black">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
