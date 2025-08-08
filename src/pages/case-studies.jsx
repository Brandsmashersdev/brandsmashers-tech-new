import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import caseStudies from '@/data/caseStudies';
import SkeletonLoader from '@/components/shared/SkeletonLoader';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const industries = ['all', 'Finance', 'Retail', 'Healthcare', 'Technology', 'Education', 'Real Estate', 'Food & Beverage', 'Manufacturing', 'Travel & Tourism', 'Legal', 'Health & Fitness'];

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
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#ff5010] to-[#e0450e] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover how we&apos;ve transformed businesses across industries with innovative technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Fintech</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">E-commerce</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Healthcare</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Technology</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Real Estate</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Food Delivery</span>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-gray-600 font-medium">Filter by Industry:</span>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => handleIndustryChange(industry)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
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

        {/* Case Studies Grid */}
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
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-[#ff5010] to-[#e0450e] rounded-t-xl flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">
                        {study.industry.charAt(0)}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm">
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
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {study.industry} • {study.duration || '3-6 months'}
                        </span>
                        <Link
                          href={`/CaseStudy/${study.slug}`}
                          className="inline-flex items-center px-4 py-2 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300"
                        >
                          Read Case Study
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

        {/* CTA Section */}
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
