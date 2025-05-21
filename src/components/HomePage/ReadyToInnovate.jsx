import React from "react";
import Link from "next/link";

const ReadyToInnovate = () => {
  return (
    <section className="bg-black py-16 w-full overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Content Area */}
        <div className="text-white z-10 lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to <span style={{ color: "#ff5010" }}>Innovate</span>? Kickstart Your Project with Us Now!
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Connect with Our Tech Specialists and Get Started Today!
          </p>
          <div className="flex">
            <Link href="/" legacyBehavior>
              <a
                className="text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#ff5010' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e64800'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff5010'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let&apos;s Talk
              </a>
            </Link>
          </div>
        </div>

        {/* Visual Elements */}
        <div className="relative lg:w-1/2 h-64 flex items-center justify-center">
          {/* Circle */}
          <div className="absolute w-32 h-32 rounded-full border-4 opacity-70 animate-pulse" style={{ borderColor: '#ff5010' }}></div>
          
          {/* Square */}
          <div className="absolute w-24 h-24 border-4 opacity-60 rotate-45 transform -translate-x-20 translate-y-10" style={{ borderColor: '#ff5010' }}></div>
          
          {/* Triangle */}
          <div
            className="absolute w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-r-[30px] border-r-transparent opacity-80 translate-x-20 -translate-y-10"
            style={{ borderBottomColor: '#ff5010' }}
          ></div>
          
          {/* Dots */}
          <div className="absolute top-0 right-0">
            <div className="w-2 h-2 rounded-full m-1" style={{ backgroundColor: '#ff5010' }}></div>
            <div className="w-2 h-2 rounded-full m-1" style={{ backgroundColor: '#ff5010' }}></div>
            <div className="w-2 h-2 rounded-full m-1" style={{ backgroundColor: '#ff5010' }}></div>
          </div>

          {/* Lines */}
          <div className="absolute bottom-10 left-10">
            <div className="w-20 h-1 mb-2 opacity-70" style={{ backgroundColor: '#ff5010' }}></div>
            <div className="w-16 h-1 mb-2 opacity-60" style={{ backgroundColor: '#ff5010' }}></div>
            <div className="w-12 h-1 opacity-50" style={{ backgroundColor: '#ff5010' }}></div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full" style={{ backgroundColor: '#ff5010' }}></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full" style={{ backgroundColor: '#ff5010' }}></div>
      </div>
    </section>
  );
};

export default ReadyToInnovate;
