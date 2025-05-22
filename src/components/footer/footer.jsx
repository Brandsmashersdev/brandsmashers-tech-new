'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'; // ✅ Imported Link for client-side routing
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-black text-white">
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900" 
            style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)"}}></div>
        <div className="absolute top-0 left-0 right-0 h-12 bg-[#ff5010]" 
            style={{clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 0)", opacity: 0.15}}></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
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

          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
              <span className="inline-block mr-2 w-2 h-6 bg-[#ff5010]"></span>
              Company
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "Who we are", link: "/whoweare" },
                { name: "Join our team", link: "/Career" },
                { name: "Blog", link: "/Blog" }
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

          <div>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
                <span className="inline-block mr-2 w-2 h-6 bg-[#ff5010]"></span>
                Industries
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="transition-all duration-300 hover:pl-2 hover:text-white group">
                  {/* ✅ Fixed /Blog link */}
                  <Link href="/Blog" legacyBehavior>
                    <a className="inline-flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5010] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="transition-all duration-300 hover:pl-2 hover:text-white group">
                  {/* ✅ Fixed /technologies link */}
                  <Link href="/technologies" legacyBehavior>
                    <a className="inline-flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5010] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      Technology
                    </a>
                  </Link>
                </li>
                <li className="transition-all duration-300 hover:pl-2 hover:text-white group">
                  {/* ✅ Fixed /contactus link */}
                  <Link href="/contactus" legacyBehavior>
                    <a className="inline-flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5010] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      Contact us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BrandsmashersTech. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6 justify-center mb-4 md:mb-0">
            {[
              { name: "Sitemap", link: "/sitemap" },
              { name: "Terms of Service", link: "/termsofservice" },
              { name: "Privacy Policy", link: "/PrivacyPolicyPage" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-400 text-sm hover:text-[#ff5010] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

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
