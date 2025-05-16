import { useState } from 'react';

export default function BrandSmasherBlog() {
  const [activeTab, setActiveTab] = useState('All Categories');
  const categories = ['All Categories', 'Solution by Industry', 'Company', 'Technology', 'Marketing & Branding'];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/Nav-Dropdown-icons/image.png')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[2.5rem] md:text-[4rem] font-extrabold tracking-tight text-center md:text-left">
            <span className="text-white">Brandsmasher</span>
            <span className="text-[#FF5010]"> Tech</span>
          </div>
          <div className="mt-8 md:mt-0 text-white">
            <div className="text-sm font-bold uppercase bg-[#d93f21] inline-block px-4 py-1 rounded mb-3">
              Our Vision Statements
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#FF5010]">
              Innovative Software for Limitless Business Growth
            </h2>
            <p className="text-sm md:text-lg uppercase text-gray-300">
              Custom Tech Solution | Scalable Systems | Impactful Digital Presence
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2 text-[#FF5010]">
              Powering Digital Growth for Every Business
            </h2>
            <p className="text-sm md:text-lg uppercase text-gray-300">
              Building Scalable Tech. Empowering Ideas. Transforming Industries.
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-gray-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex space-x-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-sm px-4 py-2 font-bold border-b-2 ${
                activeTab === category
                  ? 'border-[#FF5010] text-[#FF5010]'
                  : 'border-transparent text-gray-600 hover:text-black'
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            <span className="text-black">Latest from </span>
            <span className="text-[#FF5010]">Our Blog</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
            {[
              {
                title: 'Healthy Documentation : An Unsung Hero of a Scalable Team.',
                desc: 'The bite-sized story of how a local coffee brand changed the café landscape.',
                img: 'Nav-Dropdown-icons/image_blog.jpg',
              },
              {
                title: 'Eliminating Bottlenecks in Real-Time Data Streaming',
                desc: 'A journey through Zomato Ads Flink architecture and real-time streaming.',
                img: 'Nav-Dropdown-icons/image_blog.jpg',
              },
              {
                title: 'Transforming SMBs with Scalable SaaS Solutions',
                desc: 'How small businesses are growing through smart automation.',
                img: 'Nav-Dropdown-icons/image_blog.jpg',
              },
              {
                title: 'Design Systems that Scale: A UI Engineering Guide',
                desc: 'Learn how design systems can streamline development across teams.',
                img: 'Nav-Dropdown-icons/image_blog.jpg',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
