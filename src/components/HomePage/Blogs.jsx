import React, { useState, useEffect } from "react";

const BlogCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential DevOps Practices Every Tech Team Should Adopt",
      excerpt: "Discover the key DevOps strategies that can transform your development workflow and boost productivity across your entire organization.",
      category: "Development",
      date: "May 2, 2025",
      author: "Priya Sharma",
      authorRole: "Lead DevOps Engineer",
      image: "/api/placeholder/600/400",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "The Future of AI in Custom Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the software development landscape and creating new opportunities for businesses.",
      category: "Artificial Intelligence",
      date: "April 28, 2025",
      author: "Rahul Kapoor",
      authorRole: "AI Solutions Architect",
      image: "/api/placeholder/600/400",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Why Cloud-Native Applications Are the New Standard",
      excerpt: "Learn how cloud-native architecture is becoming the industry standard and how it can provide unparalleled scalability for your business.",
      category: "Cloud Computing",
      date: "April 15, 2025",
      author: "Alex Chen",
      authorRole: "Cloud Solutions Expert",
      image: "/api/placeholder/600/400",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Securing Your Enterprise Applications: A Comprehensive Guide",
      excerpt: "Cybersecurity threats are evolving. Discover the latest approaches to protecting your enterprise applications from sophisticated attacks.",
      category: "Cybersecurity",
      date: "April 10, 2025",
      author: "Maya Patel",
      authorRole: "Security Specialist",
      image: "/api/placeholder/600/400",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "The Rise of Progressive Web Apps in 2025",
      excerpt: "Progressive Web Apps continue to gain momentum. Find out why businesses are increasingly turning to PWAs for enhanced user experiences.",
      category: "Web Development",
      date: "April 5, 2025",
      author: "David Wilson",
      authorRole: "Frontend Lead",
      image: "/api/placeholder/600/400",
      readTime: "4 min read"
    }
  ];

  const visiblePosts = 3; // Number of posts visible at once

  // Handle next and previous navigation
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (blogPosts.length - visiblePosts + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + (blogPosts.length - visiblePosts + 1)) % (blogPosts.length - visiblePosts + 1));
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      // Swipe left
      nextSlide();
    } else if (touchEndX - touchStartX > 75) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Diagonal background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-full h-full bg-gradient-to-br from-orange-50 to-transparent transform rotate-12 opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-12 opacity-50"></div>
      </div>
      
      {/* Orange accent line */}
      {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with geometric accent */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 rounded-full bg-orange-100 opacity-60"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 w-16 h-16 rounded-full bg-orange-200 opacity-60"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-8 h-8 rounded-full bg-orange-300 opacity-60"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative">
            Our Latest <span className="text-[#ff5010]">Insights</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-300 via-[#ff5010] to-orange-300 mx-auto mt-6 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Stay ahead of the curve with expert perspectives on emerging technologies and industry trends
          </p>
        </div>

        {/* Blog carousel with larger cards */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visiblePosts)}%)` }}
            >
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl overflow-hidden h-full shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 group">
                    {/* Blog image with gradient overlay */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white text-[#ff5010] text-sm font-bold py-1 px-4 rounded-lg shadow-md z-20">
                        {post.category}
                      </div>
                      
                      {/* Date pill at bottom of image */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium py-1 px-3 rounded-full z-20 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-[#ff5010]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z"/>
                        </svg>
                        {post.date}
                      </div>
                    </div>
                    
                    {/* Blog content with angled divider */}
                    <div className="relative">
                      <div className="absolute top-0 left-0 w-full h-4 bg-white transform -skew-y-1"></div>
                      <div className="p-6 pt-8">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-[#ff5010]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z"/>
                            </svg>
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-[#ff5010] transition-colors duration-300">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                       
                        {/* Author info with vertical divider */}
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full border-2 border-[#ff5010] p-0.5 overflow-hidden">
                            <img 
                              src={`/api/placeholder/44/44`} 
                              alt={post.author} 
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div className="ml-3 border-l-2 border-orange-100 pl-3">
                            <p className="font-bold text-gray-900">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.authorRole}</p>
                          </div>
                        </div>
                        
                        {/* Read more button */}
                        <div className="mt-6">
                          <a 
                            href="#" 
                            className="block w-full bg-orange-50 text-[#ff5010] font-bold py-3 px-4 rounded-xl text-center hover:bg-[#ff5010] hover:text-white transition-colors duration-300 group-hover:shadow-md"
                          >
                            Read Article
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows with updated design */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-2 md:left-6 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-[#ff5010] p-4 rounded-full shadow-xl hover:bg-[#ff5010] hover:text-white transition-all duration-300 focus:outline-none z-20"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-[#ff5010] p-4 rounded-full shadow-xl hover:bg-[#ff5010] hover:text-white transition-all duration-300 focus:outline-none z-20"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Slide indicators with pill design */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: blogPosts.length - visiblePosts + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === index ? "bg-[#ff5010] w-10" : "bg-gray-300 w-3 hover:bg-orange-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* View all posts button with updated design */}
        <div className="text-center mt-14">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 bg-[#ff5010] text-base font-bold rounded-full text-white hover:bg-[#e84600] transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-200/50"
          >
            Explore All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;