import React from 'react';
import Link from "next/link";

const DeveloperCard = () => {
  return (
    <div className="flex justify-center items-center min-h-[62vh] bg-[#343333] p-4">
      <div className="w-full lg:max-w-[80%] md:max-w-[100%] rounded-lg bg-[#2CC5D9] p-8 md:p-12 shadow-lg transition-transform duration-300 ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-7 italic text-center">
            Top Developers for top companies
          </h2>
          
          <p className="text-white italic font-[500] text-base md:text-lg leading-relaxed mb-8 text-left">
            We offer you access to well deserving talent for the technology industry that has 
            the capacity to deliver as desired by your business. Our team is composed of 
            skilled developers who&apos;re familiar with the new tendencies in Internet 
            connections. Whether you require remote developers in India or require us 
            to build a dedicated team for your business, we offer customized solutions 
            to meet your customized need and ensure that you can scale and innovate 
            at pace.
          </p>
          
          <Link href="/contactus">
            <button className="bg-gray-800 text-2xl text-white px-6 py-3 rounded-md 
              transition-all duration-300 
              hover:bg-gray-700 hover:shadow-lg 
              active:transform active:scale-95 hover:scale-105">
              Call us Today
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
