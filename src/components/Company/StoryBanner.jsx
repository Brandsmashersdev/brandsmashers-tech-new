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
            href="/careers"
            className="inline-block bg-[#ff5010] text-white font-semibold py-2 px-5 rounded-md hover:bg-orange-600 transition"
          >
            Join Our Team
          </Link>
        </div>

        {/* Right Image Card */}
        <div className="w-full sm:max-w-sm lg:w-1/3 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md text-center">
          <Image
            src="/certification.png"
            alt="Certifications"
            width={300}
            height={200}
            className="mx-auto mb-3 rounded"
          />
          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
            We&apos;re CMMI Level 4 Appraised IT Services and Solutions Company <br />
            ISO 27001:2013 Certified
          </p>
        </div>
      </div>
    </section>
  );
}
