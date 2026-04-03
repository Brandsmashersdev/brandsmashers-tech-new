'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function StoryBanner() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Make your story part of{' '}
            <span className="text-[#ff5010]">Our story</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            As a diverse team of innovators, we are driven by our passion and customer obsession,
            and we are defined by what we accomplish together. We support a thriving flexible work
            model that ensures we have time to give back to our communities, take care of our needs,
            and just unwind. It all adds up to a balanced, happy lifestyle that lets us bring our best,
            in the office and out.
          </p>

          <Link
            href="/contactus"
            className="inline-block bg-[#ff5010] text-white font-semibold py-2 px-5 rounded-md hover:bg-orange-600 transition"
          >
            Join Our Team
          </Link>
        </div>

        {/* Right Image Card */}
        <div className="w-full sm:max-w-sm lg:w-1/3 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md text-center">
          <div className="mb-3">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-sm">CMMI</span>
              </div>
              <div className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded-lg">
                <span className="text-green-600 dark:text-green-300 font-bold text-sm">ISO 27001</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Level 4 Appraised • 2013 Certified</p>
          </div>
          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
            We&apos;re CMMI Level 4 Appraised IT Services and Solutions Company <br />
            ISO 27001:2013 Certified
          </p>
        </div>
      </div>
    </section>
  );
}
