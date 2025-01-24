import React from 'react';

const BrandsmashersGrid = () => {
  return (
    <div className="w-full min-h-screen bg-[#343333] p-10">
      <div className="w-4/5 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-white italic mb-4">
            Why Brandsmashers?
          </h1>
          <p className="text-gray-300 text-lg italic">
            What sets us apart is our expertise and dedication to your success.
          </p>
        </div>

        {/* Freestyle Grid Layout */}
        <div className="relative w-full">
          {/* Top Row - 3 cards */}
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            {/* Tailored Solutions */}
            <div className="md:w-1/3 w-full rounded-xl overflow-hidden" style={{ background: '#FEE2E1' }}>
              <div className="p-8">
                <div className="flex gap-4 mb-3">
                  <img src="homeicon.png" alt="Home icon" className="w-10 h-10" />
                  <h3 className="font-semibold text-md text-black">Tailored Solutions</h3>
                </div>
                <p className="text-sm text-black">
                  We offer customized services to match your specific business goals, whether for small-scale or large projects.
                </p>
              </div>
            </div>

            {/* Comprehensive IT Services */}
            <div className="md:w-1/3 w-full rounded-xl overflow-hidden" style={{ background: '#DCFCE7' }}>
              <div className="p-8">
                <div className="flex gap-4 mb-3">
                  <img src="Servicesicon.png" alt="Services icon" className="w-10 h-10" />
                  <h3 className="font-semibold text-md text-black">Comprehensive IT Services</h3>
                </div>
                <p className="text-sm text-black">
                  From web development to mobile apps and digital marketing, we cover all your IT needs with precision.
                </p>
              </div>
            </div>

            {/* Client-Centric Focus */}
            <div className="md:w-1/3 w-full rounded-xl overflow-hidden" style={{ background: '#DBE9FE' }}>
              <div className="p-8">
                <div className="flex gap-4 mb-3">
                  <img src="Clienticon.png" alt="Client icon" className="w-10 h-10" />
                  <h3 className="font-semibold text-md text-black">Client-Centric Focus</h3>
                </div>
                <p className="text-sm text-black">
                  Our priority is your satisfaction, with flexible engagement models and dedicated support at every step.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Row - 2 cards */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Innovative Approach */}
            <div className="md:w-5/12 w-full rounded-xl overflow-hidden" style={{ background: '#FEF9C3' }}>
              <div className="p-8">
                <div className="flex gap-4 mb-3">
                  <img src="Innovationicon.png" alt="Innovation icon" className="w-10 h-10" />
                  <h3 className="font-semibold text-md text-black">Innovative Approach</h3>
                </div>
                <p className="text-sm text-black">
                  We stay updated on the latest trends, providing future-proof solutions that drive growth.
                </p>
              </div>
            </div>

            {/* Skilled Team */}
            <div className="md:w-5/12 w-full rounded-xl overflow-hidden" style={{ background: '#B4E9FF' }}>
              <div className="p-8">
                <div className="flex gap-4 mb-3">
                  <img src="Teamicon.png" alt="Team icon" className="w-10 h-10" />
                  <h3 className="font-semibold text-md text-black">Skilled Team</h3>
                </div>
                <p className="text-sm text-black">
                  Our expert developers specialize in technologies like React.js, Next.js, and AWS, ensuring top-notch results.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - 1 card */}
          <div className="flex flex-col md:flex-row">
            {/* Proven Experience */}
            <div className="md:w-6/12 w-full rounded-xl overflow-hidden" style={{ background: '#F3E8FF' }}>
              <div className="p-8">
                <div className="flex gap-4 mb-3">
                  <img src="Experienceicon.png" alt="Experience icon" className="w-10 h-10" />
                  <h3 className="font-semibold text-md text-black">Proven Experience</h3>
                </div>
                <p className="text-sm text-black">
                  With a track record of delivering projects on time and beyond expectations, we guarantee success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsmashersGrid;
