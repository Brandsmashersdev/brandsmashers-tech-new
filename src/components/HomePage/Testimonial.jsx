import React, { useState, useEffect } from "react";

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      company: "TechVision Inc.",
      image: "/api/placeholder/80/80",
      content: "Brandsmashers Tech transformed our outdated systems into a sleek, efficient platform that increased our productivity by 40%. Their team was responsive, professional, and delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Rajiv Mehta",
      position: "CTO, GlobalConnect",
      company: "GlobalConnect",
      image: "/api/placeholder/80/80",
      content: "Working with Brandsmashers has been an absolute game-changer for our business. Their development team created a custom solution that perfectly addressed our unique challenges and has dramatically improved our customer engagement.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      position: "Marketing Director, InnovateLab",
      company: "InnovateLab",
      image: "/api/placeholder/80/80",
      content: "From concept to execution, Brandsmashers delivered excellence at every step. Their strategic approach to our e-commerce platform development resulted in a 65% increase in conversion rates within just three months.",
      rating: 5
    },
    {
      name: "Michael Chang",
      position: "Founder, StartUp Ventures",
      company: "StartUp Ventures",
      image: "/api/placeholder/80/80",
      content: "As a startup, we needed a reliable tech partner who could understand our vision and budget constraints. Brandsmashers not only met our expectations but provided valuable insights that helped shape our product roadmap.",
      rating: 5
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    let interval;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsPaused(true); // Pause auto-advance when manually navigating
    
    // Resume auto-advance after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true); // Pause auto-advance when manually navigating
    
    // Resume auto-advance after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    setIsPaused(true); // Pause auto-advance when manually navigating
    
    // Resume auto-advance after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Generate star rating component
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? "text-[#ff5010]" : "text-gray-300"}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="relative py-20 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#ff5010] opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#ff5010] opacity-5 transform translate-x-1/3 translate-y-1/3"></div>
      
      {/* Orange accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff5010] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5010] via-transparent to-[#ff5010] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            What Our Clients Are 
            <span className="text-[#ff5010]"> Saying </span>
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#ff5010] mx-auto mt-6 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            We take pride in delivering exceptional results, but don't just take our word for it. 
            Hear directly from our clients as they share their experiences, success stories, 
            and the impact Brandsmashers Tech has made on their businesses.
          </p>
        </div>

        {/* Testimonial Cards with auto-carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <div className="flex overflow-hidden">
            <div  
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            > 
            
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
               >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative">
                    {/* Orange accent corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff5010] opacity-10 rounded-bl-3xl"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-8 right-8 text-[#ff5010] opacity-20">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c0 0 .1 0 .1 0c-.7 2.1-2.1 3.5-4.1 4.4c-.1 0-.2 .1-.3 .2C5.5 24.7 5.4 24.9 5.4 25.1c0 .2 .1 .4 .2 .6c.1 .1 .3 .2 .5 .2c.1 0 .1 0 .2 0c4.1-1.3 6.9-5.1 6.9-9.3C13.1 14 13 11.7 10 8z" />
                        <path d="M26 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c0 0 .1 0 .1 0c-.7 2.1-2.1 3.5-4.1 4.4c-.1 0-.2 .1-.3 .2c-.2 .1-.3 .3-.3 .5c0 .2 .1 .4 .2 .6c.1 .1 .3 .2 .5 .2c.1 0 .1 0 .2 0c4.1-1.3 6.9-5.1 6.9-9.3C29.1 14 29 11.7 26 8z" />
                      </svg>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Testimonial content */}
                    <p className="text-gray-800 text-lg italic leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Client info */}
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ff5010] p-0.5">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full rounded-full object-cover" 
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-xl">{testimonial.name}</h4>
                        <p className="text-[#ff5010] font-medium">{testimonial.position}</p>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 bg-white text-[#ff5010] p-3 rounded-full shadow-lg hover:bg-[#ff5010] hover:text-white transition-all duration-300 focus:outline-none z-20"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white text-[#ff5010] p-3 rounded-full shadow-lg hover:bg-[#ff5010] hover:text-white transition-all duration-300 focus:outline-none z-20"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Testimonial indicators with progress animation */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === index ? "bg-[#ff5010] w-8" : "bg-gray-300 hover:bg-gray-400 w-3"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {activeIndex === index && !isPaused && (
                <span 
                  className="block h-full bg-white bg-opacity-30 rounded-full" 
                  style={{
                    animation: "progressAnimation 3s linear 1",
                    width: "0%"
                  }}
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Add animation keyframes */}
        <style jsx>{`
          @keyframes progressAnimation {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ClientTestimonials;