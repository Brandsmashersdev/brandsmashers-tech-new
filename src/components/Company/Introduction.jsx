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
             We leverage trend-leading technology to provide the most impactful digital solutions for your business.
          </p>
          <p className="text-gray-600">
          </p>
        </div>

        {/* Right Column */}
        <div className="relative bg-white p-6 rounded-lg shadow-[0_4px_20px_0_rgba(255,80,16,0.3)] border">
          <div className="text-[#ff5010] text-3xl mb-4">❝</div>
          <blockquote className="text-xl font-medium text-gray-800 mb-2 relative">
            “It’s not about us, it’s about your business and how we can help you grow it.”
            <span className="text-[#ff5010] text-3xl absolute -bottom-6 right-0">❞</span>
          </blockquote>
          <footer className="text-gray-600 mt-8">– Brandsmashers Team</footer>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
