import React from "react";
import StatsComponent from "@/components/shared/StatsComponent";

const AimlSolutionMetrix = () => {
  return (
    <section className="py-16 bg-[#0b0b0b] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Reliable Partner for 
            <span className="text-[#ff5722]"> Scalable</span> and <span className="text-[#ff5722]">Intelligent AI/ML Development</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Looking to bring smart automation to your business? Brandsmashers Tech is here to turn your vision into reality with scalable, AI-powered solutions that grow with you. Let&apos;s build the future—together.
          </p>
        </div>
        <StatsComponent 
          className="text-white"
          stats={[
            { value: 8, label: "Years of Expertise" },
            { value: 95, label: "Timely Deliveries" },
            { value: 20, label: "Markets Worldwide" },
            { value: 50, label: "Global Brands" },
          ]}
        />
      </div>
    </section>
  );
};

export default AimlSolutionMetrix;
