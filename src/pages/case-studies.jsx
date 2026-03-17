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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const industries = ['all', 'Finance', 'Retail', 'Healthcare', 'Technology', 'Education'];

  const filteredCaseStudies =
    selectedIndustry === 'all'
      ? caseStudies
      : caseStudies.filter((study) => study.industry === selectedIndustry);

  const handleIndustryChange = (industry) => {
    setIsLoading(true);
    setSelectedIndustry(industry);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <>
      <Head>
        <title>Portfolio & Case Studies | Brandsmashers Tech</title>
        <meta
          name="description"
          content="Explore our successful projects and case studies across industries."
        />
      </Head>

      <div className="min-h-screen bg-gray-50">

        <Navbar />

        {/* HERO CAROUSEL */}

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
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
              Our Success Stories
            </h1>
          </div>

        </div>

        {/* FILTER */}

        <section className="bg-white py-8 border-b sticky top-0 z-10 shadow-md">

          <div className="container mx-auto px-6">

            <div className="flex flex-wrap items-center justify-center gap-4">

              <span className="text-gray-600 font-medium">
                Filter by Industry:
              </span>

              {industries.map((industry) => (

                <button
                  key={industry}
                  onClick={() => handleIndustryChange(industry)}
                  className={`px-4 py-2 rounded-lg transition ${selectedIndustry === industry
                    ? 'bg-[#ff5010] text-white'
                    : 'bg-gray-100'
                    }`}
                >

                  {industry === 'all' ? 'All Industries' : industry}

                </button>

              ))}

            </div>

          </div>

        </section>

        {/* CASE STUDIES */}

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

                {filteredCaseStudies.map((study) => (

                  <div
                    key={study.slug}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
                  >

                    {/* IMAGE */}

                    <div className="relative h-48 w-full">

                      <Image
                        src={study.imageSrc}
                        alt={study.title}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                        {study.industry}
                      </div>

                    </div>

                    {/* CARD CONTENT */}

                    <div className="p-5 flex flex-col flex-grow">

                      {/* TITLE */}
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {study.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {study.description}
                      </p>

                      {/* CLIENT */}
                      {study.Client && (
                        <p className="text-xs text-gray-500 mb-2">
                          <span className="font-semibold">Client:</span> {study.Client}
                        </p>
                      )}

                      {/* TIMELINE + TEAM */}
                      <div className="flex gap-6 text-xs text-gray-600 mb-3">

                        {study.timeline && (
                          <span>
                            <b>⏱</b> {study.timeline}
                          </span>
                        )}

                        {study.teamSize && (
                          <span>
                            <b>👥</b> {study.teamSize}
                          </span>
                        )}

                      </div>

                      {/* TECH STACK */}
                      {study.techStack && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {study.techStack.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-[11px] px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {study.techStack.length > 4 && (
                            <span className="text-[11px] text-gray-500">
                              +{study.techStack.length - 4}
                            </span>
                          )}
                        </div>
                      )}

                      {/* RESULTS */}
                      {study.results && (
                        <div className="grid grid-cols-2 gap-1 text-[11px] text-gray-600 mb-3">
                          {study.results.slice(0, 4).map((res, i) => (
                            <span key={i}>• {res}</span>
                          ))}
                        </div>
                      )}

                      {/* BUTTON */}
                      <div className="mt-auto">
                        <Link
                          href={`/CaseStudy/${study.slug}`}
                          className="text-sm font-semibold text-[#ff5010] hover:underline"
                        >
                          Read More →
                        </Link>
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </section>

        <Footer />

      </div>
    </>
  );
}