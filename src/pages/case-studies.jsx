import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import caseStudies from '@/data/caseStudies';
import SkeletonLoader from '@/components/shared/SkeletonLoader';
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    '/CaseStudyImages/aimlagency.png',
    '/CaseStudyImages/b2b.png',
    '/CaseStudyImages/customcoaching.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // change every 5 sec
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const industries = ['all', 'Finance', 'Retail', 'Healthcare', 'Technology', 'Education'];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const handleIndustryChange = (industry) => {
    setIsLoading(true);
    setSelectedIndustry(industry);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <>
      <Head>
        <title>Case Studies - Brandsmashers Tech</title>
        <meta name="description" content="Explore our successful projects and case studies across various industries including fintech, e-commerce, healthcare, and more." />
        <meta name="keywords" content="case studies, project portfolio, fintech, e-commerce, healthcare, software development" />
        <meta property="og:title" content="Case Studies - Brandsmashers Tech" />
        <meta property="og:description" content="Explore our successful projects and case studies across various industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandsmashers.tech/case-studies" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
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
            Our Success Stories
          </h1>
        </div>
      </div>

        <section className="bg-white py-8 border-b sticky top-0 z-10 shadow-md">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-gray-600 font-medium">Filter by Industry:</span>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => handleIndustryChange(industry)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedIndustry === industry
                      ? 'bg-[#ff5010] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <SkeletonLoader key={i} type="card" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((study, index) => (
                  <div
                    key={study.slug}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                                            <Image
                        src={study.imageSrc}
                        alt={study.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                        {study.industry}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {study.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-sm text-gray-500">
                          {study.duration || '3-6 months'}
                        </span>
                        <Link
                          href={`/CaseStudy/${study.slug}`}
                          className="inline-flex items-center px-4 py-2 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300 font-semibold"
                        >
                          Read More
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredCaseStudies.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No case studies found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different industry filter
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300 font-semibold"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 font-semibold"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

