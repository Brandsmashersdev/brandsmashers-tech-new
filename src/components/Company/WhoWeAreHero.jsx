'use client';

export default function WhoWeAreHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6"
      style={{ backgroundImage: `url('/Nav-Dropdown-icons/who.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Left Title Section */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight">
            Who We <span className="text-[#ff5010]">Are</span>
          </h1>
        </div>

        {/* Right Vision Text Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-[#ff5010]">
            Driving Innovation with Passion and Purpose
          </h2>
          <p className="text-gray-300">
            We are a team of thinkers, doers, and visionaries who thrive on crafting digital solutions that make an impact.
            Our culture is rooted in collaboration, creativity, and a relentless drive to empower clients with scalable, smart, and future-ready tech.
          </p>
          <h2 className="text-2xl font-bold text-[#ff5010] mt-4">
            Building the Future, Together
          </h2>
          <p className="text-gray-300">
            Whether it's a startup or a global brand, we bring the same level of commitment, agility, and technical excellence.
            Let’s shape tomorrow’s digital landscape together.
          </p>
        </div>

      </div>
    </section>
  );
}
