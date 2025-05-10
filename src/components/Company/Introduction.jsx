// components/WhoWeAre.tsx

// components/WhoWeAre.tsx

// WhoWeAre.jsx

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold text-[#ff5010] mb-4">WHO WE ARE</h2>

          <p className="text-gray-600 mb-4">
            Everybody believes their company is a great place to work, but we
            actually have several awards to back our claims. Pipedrive was recently
            named the Best Employer in Estonia in 2016, and Best Enterprise SaaS
            B2B Startup by The Europas in 2015.
          </p>
          <p className="text-gray-600">
            Pipedrive prides itself in employing the brightest talent from across
            the globe, with over 20 nationalities represented amongst the staff,
            covering a range of career types and job fields.
          </p>
        </div>

        {/* Right Column */}
        <div className="relative bg-white p-6 rounded-lg shadow-[0_4px_20px_0_rgba(255,80,16,0.3)] border">
          <div className="text-[#ff5010] text-3xl mb-4">❝</div>
          <blockquote className="text-xl font-medium text-gray-800 mb-2 relative">
            “We believe that it takes great people to deliver a great product.”
            <span className="text-[#ff5010] text-3xl absolute -bottom-6 right-0">❞</span>
          </blockquote>
          <footer className="text-gray-600 mt-8">– Brandsmashers Team</footer>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
