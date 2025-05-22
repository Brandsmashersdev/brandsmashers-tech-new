import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';  // Add this import statement at the top of your file
import Image from "next/image";


const BlogCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);

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

  // Calculate visible posts based on screen size
  const getVisiblePosts = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3; // xl screens
      if (window.innerWidth >= 768) return 2; // md screens
      return 1; // small screens
    }
    return 3; // Default for server-side rendering
  };
  
  const [visiblePosts, setVisiblePosts] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      setVisiblePosts(getVisiblePosts());
    };
    
    handleResize(); // Set initial value
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle next and previous navigation
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (blogPosts.length - visiblePosts + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + (blogPosts.length - visiblePosts + 1)) % (blogPosts.length - visiblePosts + 1));
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

  // Auto-scroll every 5 seconds, pause on hover
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % (blogPosts.length - visiblePosts + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [blogPosts.length, visiblePosts, isHovering]);
    
  return (
    <div className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-full h-full bg-gradient-to-br from-orange-50 to-transparent transform rotate-12 opacity-70"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-orange-200 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-orange-100 rounded-full opacity-30 blur-2xl"></div>
        
        {/* Diagonal lines */}
        <div className="hidden lg:block absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-orange-300 to-transparent" 
              style={{ 
                top: `${i * 10}%`, 
                transform: 'rotate(45deg) scale(2) translateX(-25%)',
                opacity: i % 2 === 0 ? '0.3' : '0.15'
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 rounded-full bg-orange-100 opacity-60 blur-sm"></div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-10 w-16 h-16 rounded-full bg-orange-200 opacity-60 blur-sm"></div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-8 w-8 h-8 rounded-full bg-orange-300 opacity-60"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 relative tracking-tight">
            Our Latest <span className="text-[#ff5010] relative">
              Insights
              <svg className="absolute top-full left-0 w-full h-2 text-[#ff5010] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,0 Q50,10 100,0" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-300 via-[#ff5010] to-orange-300 mx-auto mt-6 mb-8 rounded-full shadow-sm"></div>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            Stay ahead of the curve with expert perspectives on emerging technologies and industry trends
          </p>
        </div>

        {/* Blog carousel */}
        <div
          ref={carouselRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden px-2 md:px-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visiblePosts)}%)` }}
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3 md:p-4 lg:p-5"
                >
                  <div className="bg-white rounded-3xl overflow-hidden h-full shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 group">
                    {/* Blog image with gradient overlay */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                        height={200}
                        width={200}
                      />
                      
                      {/* Category badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#ff5010] text-sm font-bold py-1.5 px-4 rounded-lg shadow-lg z-20">
                        {post.category}
                      </div>

                      {/* Date pill */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium py-1.5 px-4 rounded-full z-20 flex items-center shadow-md">
                        <svg className="w-4 h-4 mr-1.5 text-[#ff5010]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z" />
                        </svg>
                        {post.date}
                      </div>
                      
                      {/* Author info - shown on hover */}
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <div className="text-center text-white p-6">
                          <div className="w-16 h-16 rounded-full bg-orange-100 mx-auto mb-3 flex items-center justify-center">
                            <span className="text-xl font-bold text-[#ff5010]">
                              {post.author.split(' ').map(name => name[0]).join('')}
                            </span>
                          </div>
                          <p className="text-lg font-medium">{post.author}</p>
                          <p className="text-sm text-gray-300">{post.authorRole}</p>
                        </div>
                      </div>
                    </div>

                    {/* Blog content with angled divider */}
                    <div className="relative">
                      <div className="absolute top-0 left-0 w-full h-4 bg-white transform -skew-y-1"></div>
                      <div className="p-6 pt-8 md:p-8 md:pt-10">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <span className="flex items-center bg-orange-50 px-3 py-1 rounded-full">
                            <svg className="w-4 h-4 mr-1.5 text-[#ff5010]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z" />
                            </svg>
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-[#ff5010] transition-colors duration-300">{post.title}</h3>
                        
                        <p className="text-base text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>

                        <a href={`/blog/${post.id}`} className="inline-flex items-center justify-center px-6 py-3 bg-[#ff5010] text-base font-bold rounded-full text-white hover:bg-[#e84600] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-200/50 group-hover:scale-105 w-full sm:w-auto">
                          Read Article
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2 md:mt-10">
            {[...Array(blogPosts.length - visiblePosts + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-[#ff5010] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel navigation buttons */}
          <button 
            className="absolute top-1/2 -left-4 sm:left-0 transform -translate-y-1/2 cursor-pointer z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 bg-white/90 backdrop-blur-sm text-[#ff5010] w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center border border-gray-100"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute top-1/2 -right-4 sm:right-0 transform -translate-y-1/2 cursor-pointer z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 bg-white/90 backdrop-blur-sm text-[#ff5010] w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center border border-gray-100"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* View all button */}
        <div className="mt-12 md:mt-16 text-center">
          <Link href="/Blog" className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#ff5010] to-orange-500 text-lg font-bold rounded-full text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-200/50 group">
            <span>Explore All Articles</span>
            <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;