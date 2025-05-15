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
    answer:
      "Brand Smashers Tech is an innovative software development company, offering a full range of IT services, including custom software development, web and mobile app development, UI/UX design, e-commerce solutions, SEO, advertising, and staff augmentation with remote developers.",
    background: "#FEE2E1",
  },
  {
    question: "How does Brandsmashers Tech ensure the quality of its developers?",
    answer:
      "We hire only developers who meet high industry standards. Our team is proficient in React, Node.js, and Java. Regular training and evaluations keep them up-to-date, ensuring top-quality project execution.",
    background: "#FEF9C3",
  },
  {
    question: "Can Brandsmashers Tech scale a team for a large project?",
    answer:
      "Absolutely. We specialize in assembling skilled teams quickly for large-scale and complex projects. Our staff augmentation services help scale efficiently to meet immediate demands.",
    background: "#F3E8FF",
  },
  {
    question: "What technologies do your developers specialize in?",
    answer:
      "Our team works with React, Vue.js, Node.js, Java, React Native, and AWS. This diverse expertise ensures tailored and innovative tech solutions for any business need.",
    background: "#FCDFA4",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide post-launch support including bug fixes, updates, and feature enhancements to ensure your software stays current and functional.",
    background: "#B4E9FF",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by project. Small projects take around 4 weeks, while mid-sized ones can take up to 12 weeks. We use agile practices for transparent and efficient delivery.",
    background: "#DCFCE7",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries such as e-commerce, healthcare, education, logistics, and agriculture, tailoring our solutions to meet each sector's unique requirements.",
    background: "#DBE9FE",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="mx-auto md:w-4/5">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12 gap-6 flex-col md:flex-row">
          {/* Left Section */}
          <h1 className="text-3xl md:text-5xl font-bold">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <h2 className="text-xl md:text-2xl">Still Have Questions?</h2>
            <a
              href="/contactus"
              className="text-lg md:text-xl text-orange-400 hover:underline"
            >
              Let’s Talk
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div key={index} className="transition-all duration-300">
              {/* Question Card */}
              <div
                onClick={() => toggleQuestion(index)}
                className="cursor-pointer border-t-4 shadow-md"
                style={{
                  backgroundColor: "#111827",
                  borderTopColor: "#F97316",
                  borderRadius: "0.5rem",
                }}
              >
                <div className="flex justify-between items-center p-4 md:p-6">
                  <h3 className="text-white text-lg md:text-xl font-semibold italic">
                    {faq.question}
                  </h3>
                  <ToggleIcon isOpen={activeIndex === index} background="#F97316" />
                </div>
              </div>

              {/* Answer Section */}
              <div
                style={{
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                }}
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <p className="p-4 md:p-6 text-sm md:text-lg text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
