'use client';

import Image from 'next/image';

export default function MilestoneTimeline() {
  const milestones = [
    {
      id: 1,
      title: 'Model assessment and strategy',
      description:
        'Our in-house solution architects and experts perform a curated evaluation and analysis.',
      icon: '/Nav-Dropdown-icons/Achievement.png',
    },
    {
      id: 2,
      title: 'Fully-managed large language model training',
      description:
        'Using our vetted technical professionals, we build your fully managed team of model trainers.',
      icon: '/Nav-Dropdown-icons/Achievement.png',
    },
    {
      id: 3,
      title: 'LLM data and training tasking',
      description:
        'You focus solely on task design while we handle coordination and operation.',
      icon: '/Nav-Dropdown-icons/Achievement.png',
    },
    {
      id: 4,
      title: 'Quality assurance and monitoring',
      description:
        'We ensure every model output is validated and refined through rigorous QA protocols.',
      icon: '/Nav-Dropdown-icons/Achievement.png',
    },
    {
      id: 5,
      title: 'Model deployment & integration',
      description:
        'Our team handles seamless integration of your models into production environments.',
      icon: '/Nav-Dropdown-icons/Achievement.png',
    },
    {
      id: 6,
      title: 'Performance optimization & scaling',
      description:
        'We continuously monitor and enhance your models to scale with growing data and usage.',
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
                  <div className="pl-20">
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
