"use client";
import React from 'react';

const TechStack = () => {
  const technologies = [
    // Mobile Technologies
    { 
      title: "Android", 
      iconSrc: "/android-techicon.png", 
      category: "mobile",
      link: "/tech/android-developer"
    },
    { 
      title: "iOS", 
      iconSrc: "/icon-techios.png", 
      category: "mobile",
      link: "/tech/ios-developer"
    },
    { 
      title: "Flutter", 
      iconSrc: "/icon-techflutter.png", 
      category: "mobile",
      link: "/tech/flutter-developer"
    },
    { 
      title: "React Native", 
      iconSrc: "/icon-techreact.png", 
      category: "mobile",
      link: "/tech/react-native-developer"
    },
    { 
      title: "Angular JS", 
      iconSrc: "/angular-icon.png", 
      category: "mobile",
      link: "/tech/angular-developer"
    },
    
    // Web Technologies
    { 
      title: "Java", 
      iconSrc: "/icon-techjava.png", 
      category: "web",
      link: "/tech/java"
    },
    { 
      title: ".NET Developer", 
      iconSrc: "/social.png", 
      category: "web",
      link: "/tech/dotnet-developer"
    },
    { 
      title: "Laravel Developer", 
      iconSrc: "/laravel.png", 
      category: "web",
      link: "/tech/laravel-developer"
    },
    { 
      title: "Shopify", 
      iconSrc: "/shopify.png", 
      category: "web",
      link: "/tech/shopify"
    },
    { 
      title: "Next Js Developer", 
      iconSrc: "/next-js-developer.png", 
      category: "web",
      link: "/tech/next-js-developer"
    },
    
    // Other Technologies
    { 
      title: "WordPress", 
      iconSrc: "/wordpress.png", 
      category: "other",
      link: "/tech/wordpress"
    },
    { 
      title: "Node.js", 
      iconSrc: "/nodejs.png", 
      category: "other",
      link: "/tech/node-js-developer"
    },
    { 
      title: "PHP Developer", 
      iconSrc: "/php.png", 
      category: "other",
      link: "/tech/php-developer"
    },
    { 
      title: "JavaScript", 
      iconSrc: "/icon-techjavascript.png", 
      category: "other",
      link: "/tech/js-developer"
    },
    { 
      title: "Python", 
      iconSrc: "/icon-techpython.png", 
      category: "other",
      link: "/tech/python-developer"
    }
  ];
  
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tech-Stacked & Battle-Tested: <span style={{ color: "#ff5010" }}>Meet Our Remote Dev Experts</span>
          </h2>
          {/* <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Brandsmashers Tech is a leading IT services company specializing in web & mobile app development, 
            IT staff augmentation, and remote hiring solutions. We connect global businesses with top-tier 
            tech talent to build, scale, and innovate faster.
          </p> */}
        </div>
        
        <div className="mb-12">
          <p className="text-center text-gray-700 mb-6">
            Boost your business with our team of experienced offshore developers. Our experts are skilled in both cutting-edge and classic
            technologies. Hire our dedicated remote developers, renowned for developing advanced web and mobile apps that are perfectly
            tailored to your start-up or established enterprise.
          </p>
        </div>
        
        {/* Technology Icons Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <a 
              href={tech.link} 
              key={index}
              className="flex flex-col items-center justify-center p-4 transition-all duration-300 hover:transform hover:scale-110 group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={`${tech.iconSrc}`}
                  alt={`${tech.title} icon`}
                  className="max-w-full max-h-full"
                />
              </div>
              <p className="text-center text-gray-800 font-medium group-hover:text-[#ff5010] transition-colors duration-300">{tech.title}</p>
            </a>
          ))}
        </div>
        
        {/* Divider Lines */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="h-px bg-gray-200"></div>
          <div className="h-px bg-gray-200"></div>
          <div className="h-px bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;