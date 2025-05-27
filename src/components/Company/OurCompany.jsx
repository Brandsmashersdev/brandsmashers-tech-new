'use client';

import Image from 'next/image';

export default function MilestoneTimeline() {
  const milestones = [
    {
      id: 1,
      title: 'Empowering Businessses with Tech Talent, Technology, and Transformation.',
      description:
        'At Brandsmashers Tech, we are driven by a clear purpose — to bridge the gap between global businesses and exceptional remote developers. As a leading Software Development company in India, our mission is to simplify tech hiring through our best-in-class IT Staff Augmentation services, while delivering scalable and impactful digital solutions across industries.     We envision a future where innovation knows no borders and world-class teams are built without limits. Through talent, technology, and trust, we’re shaping the next generation of digital success stories.',
        icon: '/Nav-Dropdown-icons/Achievement.png',
    },
    {
      id: 2,
      title: 'Meet the Minds Behind the Mission',
      description:
        'At the heart of Brandsmashers Tech is a team of passionate leaders with a bold vision and relentless drive. From steering strategic direction to nurturing a culture of excellence, our leadership team brings deep industry expertise and a shared commitment to delivering world-class IT solutions and staff augmentation services. Get to know the people powering our mission and inspiring our team of 80+ tech experts.',
      icon: '/Nav-Dropdown-icons/Achievement.png',
    },
  ];

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6">
        {/* Left side: Heading */}
        <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
            From <span className="text-[#ff5010]">Vision</span> to{' '}
            <span className="text-[#ff5010]">Victory</span>: <br />
            Our <span className="text-[#ff5010]">Milestones</span> &{' '}
            <span className="text-[#ff5010]">Team</span>
          </h2>
        </div>

        {/* Right side: Timeline */}
        <div className="lg:w-2/3">
          <div className="relative pl-6 lg:pl-12">
            <div className="absolute left-2 lg:left-3 top-0 bottom-0 w-0.5 bg-gray-600" />
            <div className="space-y-20">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="relative pb-6">
                  {/* Icon */}
                  <div className="absolute left-0 top-1">
                    <div className="relative w-16 h-16 rounded-full border-2 border-[#ff5010] overflow-hidden bg-gray-800">
                      <Image
                        src={milestone.icon}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="pl-20 text-justify">
                    <h3 className="text-2xl font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
