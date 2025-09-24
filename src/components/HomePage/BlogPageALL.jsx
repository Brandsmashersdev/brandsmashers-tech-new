
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../navbar/navbar";

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Images (replace with your own)
  const carouselImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=1920&q=80",
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // change every 5 sec
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const blogPosts = [
    {
      id: 1,
      title: "Healthy Documentation : An Unsung Hero of a Scalable Team.",
      excerpt:
        "What is the most effective method for preserving the vital facts, insightful research, diverse opinions.",
      image: "/Nav-Dropdown-icons/image_blog.jpg",
      readTime: "6 min read",
      link: "/blogsection1",
    },
    {
      id: 2,
      title: "Scalable Tech & Green IT",
      excerpt:
        "As we move forward through the Industrial Revolution and continue advancing into the era of the Information Revolution",
      image: "/Nav-Dropdown-icons/image_blog2.jpg",
      readTime: "8 min read",
      link: "/blogsection2",
    },
    {
      id: 3,
      title: "Scoop of Digital Marketing",
      excerpt:
        "In a world overflowing with products, apps, services, and ideas, the loudest voice doesn’t always win—but the clearest one does.",
      image: "/Nav-Dropdown-icons/Blog9.jpg",
      readTime: "5 min read",
      link: "/blogSection3",
    },
    {
      id: 4,
      title: "How to Hire Remote Developers from India",
      excerpt:
        "A practical guide for Indian companies to hire remote developers efficiently, covering talent sourcing, vetting, compliance, onboarding, and best practices for a high-performing remote team.",
      image: "/Images/Gemini_Generated_Image_htkv5khtkv5khtkv.png",
      readTime: "8 min read",
      link: "/BlogSectionNew",
    },
  ];

  const cardVariants = {
    initial: { scale: 1, opacity: 0, y: 40 },
    animate: { scale: 1, opacity: 1, y: 0 },
    hover: {
      scale: 1.04,
      boxShadow: "0 20px 35px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Navbar />
      {/* Cover Image Carousel */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={carouselImages[currentIndex]}
            alt="Cover"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
            Welcome to Our Blogs
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-gray-900"
          >
            Our Latest Blog Posts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Insights on technology, design, and business strategy crafted to
            keep you ahead of the curve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              className="group"
              initial="initial"
              animate="animate"
              variants={cardVariants}
              whileHover="hover"
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 cursor-pointer flex flex-col h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    variants={imageVariants}
                    animate={hoveredIndex === index ? "hover" : "initial"}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow">
                    {post.readTime}
                  </span>
                </div>

                <div className="p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="font-medium group-hover:text-orange-500 transition-colors">
                      Read More
                    </span>
                    <ArrowUpRight
                      size={22}
                      className="text-gray-400 group-hover:text-orange-500 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}