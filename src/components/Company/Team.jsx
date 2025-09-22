// pages/team.js
import Image from "next/image";

const teamImages = [
  "/Nav-Dropdown-icons/team-1.jpg",
  "/Images/whoWeAre.jpg",
  "/Nav-Dropdown-icons/team-3.jpg",
  // "/Nav-Dropdown-icons/team-4.jpg",
  "/Images/birthdaypostwhoweare.jpg",
  "/Nav-Dropdown-icons/team-5.jpg",
  "/Nav-Dropdown-icons/team-6.jpg",
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-black py-10 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
        Our Exceptional Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* {teamImages.map((src, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-[0_4px_20px_0_rgba(255,80,16,0.3)] hover:shadow-[0_8px_30px_0_rgba(255,80,16,0.5)] transition duration-300"
          >
            <Image
              src={src}
              alt={`Team ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))} */}
        {teamImages.map((src, index) => (
  <div
    key={index}
    className="relative overflow-hidden rounded-2xl shadow-[0_4px_20px_0_rgba(255,80,16,0.3)] hover:shadow-[0_8px_30px_0_rgba(255,80,16,0.5)] transition duration-300"
    style={{ aspectRatio: '4 / 3' }} // maintain uniform box ratio
  >
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={`Team ${index + 1}`}
        fill
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
      />
    </div>
    {/* Optional circular mask effect */}
    <div className="absolute inset-0 rounded-full pointer-events-none ring-4 ring-[#ff5010]/20 mix-blend-overlay"></div>
  </div>
))}
      </div>
    </div>
  );
}
