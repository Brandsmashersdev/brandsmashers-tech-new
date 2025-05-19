// pages/index.js
import { useEffect, useState } from 'react';
import { 
  FaArrowUp, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaCloud,
  FaLongArrowAltRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-black text-white">
      {/* Diagonal border top */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900" 
            style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)"}}></div>
        <div className="absolute top-0 left-0 right-0 h-12 bg-[#ff5010]" 
            style={{clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 0)", opacity: 0.15}}></div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-white relative inline-block">
              Brandsmashers<span className="text-[#ff5010]">Tech</span>
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#ff5010]"></span>
            </h1>
            
            <p className="text-gray-400 pr-4 mt-6 leading-relaxed">
              We are a leading Software Development Company delivering excellence and innovation since 2010. Our expertise spans across various technologies and industries.
            </p>
            
            <div className="flex flex-col space-y-3 text-gray-300 pt-2">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-[#ff5010]">
                  <FaMapMarkerAlt size={14} />
                </div>
                <span>Bhopal, India</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-[#ff5010]">
                  <FaEnvelope size={14} />
                </div>
                <span>info@brandsmashers.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-[#ff5010]">
                  <FaPhone size={14} />
                </div>
                <span>7000863918</span>
              </div>
            </div>
          </div>
          
          <div>
  <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
    <span className="inline-block mr-2 w-2 h-6 bg-[#ff5010]"></span>
    Services
  </h3>
  <ul className="space-y-3 text-gray-400">
    {[
      { name: "Mobile app development", link: "/services/mobileAppDevelopment" },
      { name: "Digital Marketing services", link: "/services/digitalMarketingServices" },
      { name: "AIML services", link: "/services/aimlservice" },
      { name: "Ui/UX Development", link: "/services/uiuxdevelopment" },
      { name: "Product Development", link: "/services/productDevelopment" },
      // { name: "Graphic Design", link: "/services/graphic-design" },
      // { name: "Content Marketing", link: "/services/content-marketing" },
      { name: "Custom software development", link: "/services/customService" },
      { name: "Web development", link: "/services/webdevelopment" }
    ].map((item) => (
      <li key={item.name} className="transition-all duration-300 hover:pl-2 hover:text-white">
        <a href={item.link} className="inline-flex items-center group">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5010] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>
          {/* Quick Links */}
          <div>
  <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
    <span className="inline-block mr-2 w-2 h-6 bg-[#ff5010]"></span>
    Company
  </h3>
  <ul className="space-y-3 text-gray-400">
    {[
      { name: "Who we are", link: "/whoweare" },
      { name: "Join our team", link: "/career" },
      { name: "Blog", link: "/Blog" }
    ].map((item) => (
      <li key={item.name} className="transition-all duration-300 hover:pl-2 hover:text-white">
        <a href={item.link} className="inline-flex items-center group">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5010] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          {item.name}
        </a>
      </li>
    ))}
    {/* <li className="transition-all duration-300 flex items-center hover:pl-2 group">
      <a href="/services" className="inline-flex items-center text-[#ff5010] font-medium">
        All Solutions
        <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </li> */}
  </ul>
</div>
          
          {/* For Talent */}
       
          
          {/* Resources and Company (Combined) */}
          <div>
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
          <span className="inline-block mr-2 w-2 h-6 bg-[#ff5010]"></span>
          Industries
        </h3>
        <ul className="space-y-3 text-gray-400">
          <li className="transition-all duration-300 hover:pl-2 hover:text-white group">
            <a href="/Blog" className="inline-flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5010] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Blog
            </a>
          </li>
          <li className="transition-all duration-300 hover:pl-2 hover:text-white group">
            <a href="/technologies" className="inline-flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5010] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            Technology
            </a>
          </li>
          <li className="transition-all duration-300 hover:pl-2 hover:text-white group">
            <a href="/contactus" className="inline-flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5010] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Contact us
            </a>
          </li>
          {/* <li className="transition-all duration-300 flex items-center hover:pl-2 group">
            <a href="/resources" className="inline-flex items-center text-[#ff5010] font-medium">
              More Resources
              <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
        </div>
        
        {/* Newsletter Section */}
        {/* <div className="py-8 border-t border-b border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400">Stay updated with our latest news and offers</p>
            </div>
            <div className="relative w-full md:w-96">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-4 pr-16 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5010] focus:border-transparent"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-[#ff5010] text-white px-4 rounded-r-lg hover:bg-orange-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
        
        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BrandsmashersTech. All rights reserved.
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center mb-4 md:mb-0">
            {["Sitemap", "Terms of Service", "Privacy Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 text-sm hover:text-[#ff5010] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-3">
            {[
              { icon: <FaFacebookF size={16} />, link: "https://www.facebook.com/brandsamsherstechnologies" },
              { icon: <FaInstagram size={16} />, link: "https://www.instagram.com/brandsmashers_technologies/?hl=en" },
              { icon: <FaLinkedinIn size={16} />, link: "https://in.linkedin.com/company/brandsmashers-tech-pvt-ltd" },
              { icon: <FaYoutube size={16} />, link: "https://www.youtube.com/@Brandsmashers" },
            
            ].map(({ icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#ff5010] hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Back to Top Button - with animation and transition */}
  
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
}