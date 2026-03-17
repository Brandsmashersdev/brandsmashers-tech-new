/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import Footer from "@/components/footer/footer";

export default function BlogPage() {
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
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Healthy Documentation: An Unsung Hero of a Scalable Team.",
      excerpt:
        "What is the most effective method for preserving the vital facts, insightful research, and diverse opinions.",
      image: "/Nav-Dropdown-icons/image_blog.jpg",
      readTime: "6 min read",
      link: "/BlogSection1",
      industry: "Software Development",
      author: "Tarun Namdev",
      authorImage: "https://media.licdn.com/dms/image/v2/D4D03AQF4UP-YWW7vhQ/profile-displayphoto-scale_200_200/B4DZsYoO8AG0AY-/0/1765644760618?e=1775088000&v=beta&t=Hff1zXNy-6xwqgZ74wG5icmifwXfnAcF3lOMvVwHOtM",
      date: "2025-10-15",
    },
    {
      id: 2,
      title: "Scalable Tech & Green IT",
      excerpt:
        "As we move forward through the Industrial Revolution and continue advancing into the era of the Information Revolution.",
      image: "/Nav-Dropdown-icons/image_blog2.jpg",
      readTime: "8 min read",
      link: "/BlogSection2",
      industry: "Technology",
      author: "John Deo",
      authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      date: "2025-09-10",
    },
    {
      id: 3,
      title: "Stepping into Tomorrow at GITEX 2025 Dubai",
      excerpt:
        "When the Brandsmashers Tech team arrived at GITEX 2025 Dubai, we weren't just attending another technology conference.",
      image: "/Nav-Dropdown-icons/GITEX.jpeg",
      readTime: "6 min read",
      link: "/BlogSection6",
      industry: "Technology",
      author: "Liqusa chany",
      authorImage: "https://randomuser.me/api/portraits/women/12.jpg",
      date: "2025-07-12",
    },
    {
      id: 4,
      title: "Scoop of Digital Marketing",
      excerpt:
        "In a world overflowing with products, apps, services, and ideas, the loudest voice doesn't always win.",
      image: "/Nav-Dropdown-icons/Blog9.jpg",
      readTime: "5 min read",
      link: "/BlogSection3",
      industry: "Marketing",
      author: "Aayush Jain",
      authorImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      date: "2025-06-18",
    },
    {
      id: 5,
      title: "How to Hire Remote Developers from India",
      excerpt:
        "A practical guide for Indian companies to hire remote developers efficiently.",
      image: "/Images/Gemini_Generated_Image_htkv5khtkv5khtkv.png",
      readTime: "8 min read",
      link: "/BlogSectionNew",
      industry: "Recruitment",
      author: "Sakshi Chitteyy",
      authorImage: "https://media.licdn.com/dms/image/v2/D4D03AQHEDeZO082sXQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709402047369?e=1775088000&v=beta&t=h57WitOdF6BRehNMkJy6NDjKTuOSJZlv38d9Oy9WarU",
      date: "2025-05-10",
    },
    {
      id: 6,
      title: "Brandsmashers Tech at Bengaluru Tech Summit 2025",
      excerpt: "Brandsmashers Tech's immersive experience at Bengaluru Tech Summit 2025.",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&auto=format&fit=crop&q=60",
      readTime: "10 min read",
      link: "/BlogSection5",
      industry: "Technology",
      author: "Aayush Jain",
      authorImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      date: "2026-02-20",
    },
  ];

  const industries = ["all", ...new Set(blogPosts.map((p) => p.industry))];

  const filteredBlogPosts =
    selectedIndustry === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.industry === selectedIndustry);

  const handleIndustryChange = (industry) => {
    setIsLoading(true);
    setSelectedIndustry(industry);
    setTimeout(() => setIsLoading(false), 300);
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={carouselImages[currentIndex]}
              alt="Cover"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Welcome to Our Blogs
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => handleIndustryChange(industry)}
              className={`px-4 py-2 rounded-lg text-sm ${selectedIndustry === industry
                ? "bg-orange-500 text-white"
                : "bg-gray-100"
                }`}
            >
              {industry === "all" ? "All" : industry}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogPosts.map((post) => (
            <a key={post.id} href={post.link} className="group">
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border flex flex-col h-full">

                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">                  <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />

                  {/* Read Time */}
                  <span className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded">
                    {post.readTime}
                  </span>

                  {/* Date */}
                  <span className="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 relative">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>

                      <p className="text-xs text-gray-400">
                        Written by
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {post.author}
                      </p>
                    </div>

                    {/* Right: CTA */}
                    <span className="flex items-center gap-1 text-orange-500 font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}