import { useState } from "react";
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Healthy Documentation : An Unsung Hero of a Scalable Team.",
      excerpt: "What is the most effective method for preserving the vital facts, insightful research, diverse opinions.",
      image: "/Nav-Dropdown-icons/image_blog.jpg",
      readTime: "6 min read",
      link: "/blogsection1"
    },
    {
      id: 2,
      title: "Scalable Tech & Green IT",
      excerpt: "As we move forward through the Industrial Revolution and continue advancing into the era of the Information Revolution",
      image: "/Nav-Dropdown-icons/image_blog2.jpg",
      readTime: "8 min read",
      link: "/blogsection2"
    },
    {
      id: 3,
      title: "Scoop of Digital Marketing",
      excerpt: "In a world overflowing with products, apps, services, and ideas, the loudest voice doesn’t always win—but the clearest one does.",
      image: "/Nav-Dropdown-icons/Blog9.jpg",
      readTime: "5 min read",
      link: "/blogSection3"
    },
     {
      id: 4,
      title: 'How to Hire Remote Developers from India',
      excerpt: "A practical guide for Indian companies to hire remote developers efficiently, covering talent sourcing, vetting, compliance, onboarding, and best practices for a high-performing remote team.",
      image: "/Images/Gemini_Generated_Image_htkv5khtkv5khtkv.png",
      readTime: "8 min read",
      link: "/BlogSectionNew",
    },
  ];

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.07 },
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Latest Blog Posts</h1>
          <p className="text-lg text-gray-600 mt-4">
            Discover articles on technology, design, and business strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a key={post.id} href={post.link}>
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer flex flex-col h-full"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    variants={imageVariants}
                    initial="initial"
                    animate={hoveredIndex === index ? "hover" : "initial"}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="font-medium">{post.readTime}</span>
                    <ArrowUpRight size={20} className="text-gray-400" />
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
