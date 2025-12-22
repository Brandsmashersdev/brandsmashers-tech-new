/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import Footer from "@/components/footer/footer";

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const carouselImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=1920&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const blogPosts = [
    {
      id: 1,
      title: "Healthy Documentation: An Unsung Hero of a Scalable Team.",
      excerpt:
        "What is the most effective method for preserving the vital facts, insightful research, and diverse opinions.",
      image: "/Nav-Dropdown-icons/image_blog.jpg",
      readTime: "6 min read",
      link: "/blogsection1",
      industry: "Software Development",
    },
    {
      id: 2,
      title: "Scalable Tech & Green IT",
      excerpt:
        "As we move forward through the Industrial Revolution and continue advancing into the era of the Information Revolution.",
      image: "/Nav-Dropdown-icons/image_blog2.jpg",
      readTime: "8 min read",
      link: "/blogsection2",
      industry: "Technology",
    },
    {
      id: 3,
      title: "Stepping into Tomorrow at GITEX 2025 Dubai",
      // Escaped the single quote here to prevent "react/no-unescaped-entities"
      excerpt:
        "When the Brandsmashers Tech team arrived at GITEX 2025 Dubai, we weren&apos;t just attending another technology conference.",
      image: "/Nav-Dropdown-icons/GITEX.jpeg",
      readTime: "6 min read",
      link: "/blogsection6",
      industry: "Technology",
    },
    {
      id: 4,
      title: "Scoop of Digital Marketing",
      excerpt:
        "In a world overflowing with products, apps, services, and ideas, the loudest voice doesn&apos;t always win.",
      image: "/Nav-Dropdown-icons/Blog9.jpg",
      readTime: "5 min read",
      link: "/blogSection3",
      industry: "Marketing",
    },
    {
      id: 5,
      title: "How to Hire Remote Developers from India",
      excerpt:
        "A practical guide for Indian companies to hire remote developers efficiently, covering talent sourcing and vetting.",
      image: "/Images/Gemini_Generated_Image_htkv5khtkv5khtkv.png",
      readTime: "8 min read",
      link: "/BlogSectionNew",
      industry: "Recruitment",
    },
    {
      id: 6,
      title: "Brandsmashers Tech at Bengaluru Tech Summit 2025",
      excerpt:
        "Brandsmashers Tech&apos;s immersive experience at Bengaluru Tech Summit 2025, exploring innovation and digital transformation.",
      image:
        "https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&auto=format&fit=crop&q=60",
      readTime: "10 min read",
      link: "/blogsection5",
      industry: "Technology",
    },
  ];

  const industries = [
    "all",
    ...new Set(blogPosts.map((post) => post.industry)),
  ];

  const filteredBlogPosts =
    selectedIndustry === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.industry === selectedIndustry);

  const handleIndustryChange = (industry) => {
    setIsLoading(true);
    setSelectedIndustry(industry);
    setTimeout(() => setIsLoading(false), 300);
  };

  const cardVariants = {
    initial: { scale: 1, opacity: 0, y: 40 },
    animate: { scale: 1, opacity: 1, y: 0 },
    hover: {
      scale: 1.04,
      boxShadow: "0 20px 35px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Navbar />

      {/* Carousel */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full relative"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={carouselImages[currentIndex]}
              alt="Cover Image"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
            Welcome to Our Blogs
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-gray-900"
          >
            Our Latest Blog Posts
          </motion.h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Insights on technology, design, and business strategy crafted to
            keep you ahead of the curve.
          </p>
        </div>

        {/* Filter Section */}
        <section className="bg-white py-8 border-b sticky top-0 z-10 shadow-sm mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">
              Filter by Industry:
            </span>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => handleIndustryChange(industry)}
                className={`px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                  selectedIndustry === industry
                    ? "bg-[#ff5010] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {industry === "all" ? "All Industries" : industry}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-2xl h-96 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                className="group flex"
                initial="initial"
                animate="animate"
                variants={cardVariants}
                whileHover="hover"
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 cursor-pointer flex flex-col w-full">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow">
                      {post.readTime}
                    </span>
                  </div>

                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="font-medium group-hover:text-orange-500">
                        Read More
                      </span>
                      <ArrowUpRight
                        size={22}
                        className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {filteredBlogPosts.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-600">
              No blog posts found
            </h3>
            <p className="text-gray-500">
              Try selecting a different industry filter
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
