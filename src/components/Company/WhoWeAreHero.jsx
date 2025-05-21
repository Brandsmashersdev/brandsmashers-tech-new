'use client';

export default function WhoWeAreHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12"
      style={{ backgroundImage: "url('/Nav-Dropdown-icons/whowe_page.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Left Title Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Who We <span className="text-[#ff5010]">Are</span>
          </h1>
        </div>

        {/* Right Vision Text Section */}
        <div className="md:w-1/2 space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#ff5010] mb-2">
              Driving Innovation with Passion and Purpose
            </h2>
            <p>
              We are a team of thinkers, doers, and visionaries who thrive on crafting digital solutions that make an impact.
              Our culture is rooted in collaboration, creativity, and a relentless drive to empower clients with scalable, smart, and future-ready tech.
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#ff5010] mt-4 mb-2">
              Building the Future, Together
            </h2>
            <p>
              Whether it&lsquos a startup or a global brand, we bring the same level of commitment, agility, and technical excellence.
              Lets shape tomorrow digital landscape together.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}