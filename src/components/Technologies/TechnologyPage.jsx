import React from 'react';

const TechnologyPage = () => {
  const technologies = [
    {
      title: "Backend",
      description: "Building robust, scalable backend systems that handle the business logic manage databases and integrate APIs for smooth application performance"
    },
    {
      title: "Frontend",
      description: "Creating engaging and intuitive user interfaces with modern web technologies like Reactjs Angular and Vuejs ensuring a seamless user experience"
    },
    {
      title: "Database",
      description: "Managing and optimizing data storage solutions from SQL to NoSQL databases ensuring secure efficient and scalable data handling"
    },
    {
      title: "Mobile",
      description: "Developing high-performance mobile applications for iOS and Android delivering seamless user experiences with cross-platform compatibility."
    },
    {
      title: "Testing",
      description: "Ensuring software reliability and performance through automated and manual testing strategies detecting bugs early to improve quality and user experience."
    },
    {
      title: "Cloud & DevOps",
      description: "Leveraging cloud computing to provide scalable solutions and integrating DevOps for faster development cycles continuous integration and seamless deployments."
    }
  ];

  // Triple the content to ensure smooth infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <div className="bg-white">
      {/* Title Section with adjusted width */}
      <div className="max-w-7xl mx-auto py-8 px-8">
        <h1 className="text-4xl font-semibold mb-6 italic font-inter" 
            style={{ 
              fontSize: '32px', 
              lineHeight: '38.73px', 
              fontWeight: 600, 
              textAlign: 'center', 
              color: 'black' 
            }}>
          Technologies
        </h1>
        <p className="font-inter italic" 
           style={{ 
             fontSize: '20px', 
             lineHeight: '23px', 
             fontWeight: 400,
             textAlign: 'left',
             textUnderlinePosition: 'from-font',
             textDecorationSkipInk: 'none',
             color: 'black'
           }}>
          At Brandsmashers, we leverage cutting-edge technologies to deliver innovative, scalable, and secure solutions that 
          meet the evolving needs of businesses across industries. Our expertise spans across a wide array of tools, platforms, 
          and languages, ensuring that we can handle any project, regardless of its complexity or scope. Below is a list of 
          technologies that power our custom software, mobile apps, digital marketing, and more.
        </p>
      </div>

      {/* Scrolling Cards Section */}
      <div className="relative overflow-hidden w-full py-8">
        <div className="slider-track">
          {duplicatedTechnologies.map((tech, index) => (
            <div 
              key={index} 
              className="slide mx-4"
            >
              <div className="tech-card bg-cyan-400 rounded-lg p-6 w-56 h-64 relative group hover:-translate-y-2 transition-transform duration-300">
                <h3 className="card-title text-[#343333] text-xl font-semibold mb-7 font-inter italic"
                    style={{ 
                      fontSize: '16px',
                      lineHeight: '19.36px',
                      fontWeight: 400,
                      textAlign: 'center',
                      textUnderlinePosition: 'from-font',
                      textDecorationSkipInk: 'none'
                    }}>
                  {tech.title}
                </h3>
                <p className="text-white text-sm font-inter italic"
                   style={{ 
                     fontSize: '16px',
                     lineHeight: '19.36px',
                     fontWeight: 400,
                     textAlign: 'left',
                     textUnderlinePosition: 'from-font',
                     textDecorationSkipInk: 'none'
                   }}>
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        .slider-track {
          display: flex;
          width: fit-content;
          animation: scroll 60s linear infinite;
          will-change: transform;
        }

        .slide {
          flex: 0 0 auto;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 32px)); /* Adjust for the margin */
          }
        }
        
        .slider-track:hover {
          animation-play-state: paused;
        }

        /* Default card size */
        .tech-card {
          width: 224px;  /* w-56 equivalent */
          height: 256px; /* h-64 equivalent */
          backface-visibility: hidden; /* Reduce flickering */
          transform: translateZ(0); /* Enable hardware acceleration */
          perspective: 1000px;
        }

        /* Mobile card size and styles */
        @media (max-width: 650px) {
          .tech-card {
            width: 336px;
            height: 194.83px;
          }

          .card-title {
            font-size: 20px !important;
            line-height: 19.36px !important;
            font-weight: 400 !important;
            text-align: center !important;
            text-underline-position: from-font !important;
            text-decoration-skip-ink: none !important;
            margin-bottom: 1.75rem !important;
          }

          .slider-track {
            animation-duration: 50s;
          }
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Smooth animation optimizations */
        .slider-track {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default TechnologyPage;