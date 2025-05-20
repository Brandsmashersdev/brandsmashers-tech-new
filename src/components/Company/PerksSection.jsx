'use client';

import Image from 'next/image';

export default function PerksSection() {
  const perks = [
    {
      title: 'Comprehensive Health Plan',
      image: '/Nav-Dropdown-icons/health.png',
    },
    {
      title: 'On Demand Learning & Development',
      image: '/Nav-Dropdown-icons/learning.png',
    },
    {
      title: 'Work Life Balance',
      image: '/Nav-Dropdown-icons/life.jpg',
    },
    {
      title: 'Supportive Organizational Structure',
      image: '/Nav-Dropdown-icons/organization.jpg',
    },
    {
      title: 'Recognition & Reward System',
      image: '/Nav-Dropdown-icons/Achieve.png',
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-14 leading-snug">
        <span className="text-black">Enjoy Great</span>{' '}
        <span className="text-[#ff5010]">Benefits and Perks</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {perks.map((perk, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 bg-gray-50"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 sm:mb-6 relative">
              <Image
                src={perk.image}
                alt={perk.title}
                width={112} // 28 * 4
                height={112} // 28 * 4
                className="object-contain rounded"
                sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 12vw"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold">
              {perk.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
