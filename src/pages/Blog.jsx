import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import blogPosts from '@/data/blogPosts';
import SkeletonLoader from '@/components/shared/SkeletonLoader';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isLoading, setIsLoading] = useState(false);

  const categories = ['All Categories', 'Technology', 'Marketing & Branding', 'Company', 'Solution by Industry'];

  const filteredPosts = selectedCategory === 'All Categories' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <>
      <Head>
        <title>Blog - Brandsmashers Tech</title>
        <meta name="description" content="Explore our latest insights on technology, software development, digital marketing, and industry trends." />
        <meta property="og:title" content="Blog - Brandsmashers Tech" />
        <meta property="og:description" content="Latest insights on technology, software development, and digital trends." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandsmashers.tech/Blog" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#ff5010] to-[#e0450e] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on technology, software development, and digital innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Technology</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Marketing</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Company</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Industry</span>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-gray-600 font-medium">Filter by Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#ff5010] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <SkeletonLoader key={i} type="blog-card" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-[#ff5010] to-[#e0450e] rounded-t-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover opacity-20"
                      />
                      <div className="absolute top-4 left-4 bg-white/20 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm">
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300 text-sm"
                      >
                        Read More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {filteredPosts.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No blog posts found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different category filter
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on technology, software development, and industry trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff5010]"
              />
              <button className="px-8 py-3 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
