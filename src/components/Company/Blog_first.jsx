import { useState } from 'react';
import Image from 'next/image';


export default function BrandSmasherBlog() {
  const [activeTab, setActiveTab] = useState('All Categories');
  const categories = ['All Categories', 'Solution by Industry', 'Company', 'Technology', 'Marketing & Branding'];

  const blogPosts = [
    {
      title: 'Healthy Documentation : An Unsung Hero of a Scalable Team.',
      desc: 'What is the most effective method for preserving the vital facts, insightful research, diverse opinions',
      img: '/Nav-Dropdown-icons/image_blog.jpg',
      link: '/blogsection1',
    },
    {
      title: 'Scalable Tech & Green IT',
      desc: 'As we move through the Industrial Revolution and the Information Revolution',
      img: '/Nav-Dropdown-icons/image_blog2.jpg',
      link: '/blogsection2',
    },
    {
      title: 'Scoop of Digital Marketing',
      desc: 'In a world overflowing with products, apps, services, and ideas, the loudest voice doesn not always win—but the clearest one does.',
      img: '/Nav-Dropdown-icons/Blog9.jpg',
      link: '/blogSection3',
    },
    {
      title: 'From Branding to Brandsmashers',
      desc: 'In the midst of every crisis, lies great opportunity',
      img: '/Nav-Dropdown-icons/Blog17.png',
      link: '/blogsection4',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[60vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Side - Brand Title */}
            <div className="text-center lg:text-left lg:flex-1">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="text-white block sm:inline">Brandsmashers</span>
                <span className="text-[#FF5010] block sm:inline"> Tech</span>
              </div>
            </div>

            {/* Right Side - Vision Statements */}
            <div className="lg:flex-1 max-w-xl text-center lg:text-left">
              <div className="inline-block text-xs sm:text-sm font-bold uppercase bg-[#d93f21] px-3 py-2 sm:px-4 sm:py-2 rounded-md mb-4 sm:mb-6">
                Our Vision Statements
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-[#FF5010] leading-tight">
                    Innovative Software for Limitless Business Growth
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base uppercase text-gray-300 leading-relaxed">
                    Custom Tech Solution | Scalable Systems | Impactful Digital Presence
                  </p>
                </div>
                
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-[#FF5010] leading-tight">
                    Powering Digital Growth for Every Business
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base uppercase text-gray-300 leading-relaxed">
                    Building Scalable Tech. Empowering Ideas. Transforming Industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-black">Latest from </span>
            <span className="text-[#FF5010]">Our Blog</span>
          </h2>
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {blogPosts.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
              >
                <a href={card.link} className="block">
                  <div className="w-full h-48 sm:h-56 md:h-48 lg:h-56 xl:h-64 relative overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                </a>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                  <a
                    href={card.link}
                    className="inline-flex items-center text-sm sm:text-base text-[#FF5010] font-semibold hover:text-[#d93f21] transition-colors duration-200 group"
                  >
                    Read More 
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}