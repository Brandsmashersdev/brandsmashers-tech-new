'use client'; // only if using App Router

import Image from "next/image";

const teamLeads = [
  { name: "Alice", role: "Frontend", image: "/images/teamlead-1.webp" },
  { name: "Bob", role: "Backend", image: "/images/teamlead-2.webp" },
  { name: "Sophie", role: "UI/UX", image: "/images/teamlead-3.webp" },
  { name: "James", role: "DevOps", image: "/images/teamlead-4.webp" },
  { name: "Emma", role: "QA", image: "/images/teamlead-5.webp" },
  { name: "Liam", role: "Data", image: "/images/teamlead-6.webp" },
];

const TeamLeadSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-black mb-12">Meet Our Team Leads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {teamLeads.map((lead, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 shadow-[0_4px_20px_0_rgba(255,80,16,0.2)] p-6 rounded-2xl hover:shadow-[0_8px_30px_0_rgba(255,80,16,0.4)] transition duration-300"
          >
            <div className="w-40 h-40 relative">
              <Image
                src={lead.image}
                alt={lead.name}
                fill
                className="object-cover rounded-full border-4 border-[#ff5010]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{lead.name}</h3>
              <p className="text-gray-600">{lead.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamLeadSection;
