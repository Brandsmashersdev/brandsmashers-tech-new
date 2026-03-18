import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import caseStudies from '@/data/caseStudies';

const CaseStudiesSection = () => {
  // Get the latest 3 case studies
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Success <span className="text-orange-500">Stories</span>
          </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we&apos;ve transformed businesses across industries with innovative technology solutions
            </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCaseStudies.map((study, index) => (
            <div
              key={study.slug}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 w-full rounded-t-xl overflow-hidden">
                <Image
                  src={study.imageSrc}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
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
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies?.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies?.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {study.duration}
                  </span>
                  <Link
                    href={`/CaseStudy/${study.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300 text-sm"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center px-8 py-3 bg-[#ff5010] text-white rounded-lg hover:bg-[#e0450e] transition-colors duration-300 font-semibold"
          >
            View Case Studies
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#ff5010] mb-2">
              {/* {caseStudies.length}+ */}
              500+
            </div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#ff5010] mb-2">
              9+
            </div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#ff5010] mb-2">
              99%
            </div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#ff5010] mb-2">
              24/7
            </div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
