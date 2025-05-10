'use client';

import Image from 'next/image';

const TeamIntro = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-800 p-8 rounded-xl shadow-lg">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Make your story part of <span className="text-[#ff5010]">Our story</span>
          </h2>
          <p className="text-gray-300 mb-6">
            As a diverse team of innovators, we are driven by our passion and customer obsession. 
            We’re constantly evolving, supporting flexible work and inclusion. 
            Join our team and be part of a tech-forward community.
          </p>
          <button className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
            Join Our Team
          </button>
        </div>

        {/* Right Image Block */}
        <div className="flex justify-center">
          <Image
            src="/certifications.png" // Make sure this image exists in your public folder
            alt="Company Certifications"
            width={400}
            height={300}
            className="rounded-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;
