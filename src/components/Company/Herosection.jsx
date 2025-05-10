'use client';

import Image from 'next/image';

const Career = () => {
  return (
    <div className="relative w-full h-[80vh] text-white">
      <Image
        src="/career.jpg"
        alt="Career Background"
        fill
        priority
        className="object-cover brightness-75"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Careers at Brandsmashers
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-white/90">
          Be part of a fast-growing team shaping the future of technology.
        </p>
        <a
          href="#apply"
          className="mt-8 inline-block bg-[#ff5010] hover:bg-[#e04810] text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Career; // ✅ Make sure you're exporting the component
