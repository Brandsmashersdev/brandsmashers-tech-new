'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function DynamicBookCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Dynamic Book Platform – Where Stories Evolve</title>
        <meta name="description" content="A case study on building a platform where users can co-create and experience evolving stories with alternate versions and endings." />
        <meta property="og:title" content="Dynamic Book Platform – Where Stories Evolve - Case Study" />
        <meta property="og:image" content="/dynamic-book-platform-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        
        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Dynamic Book Platform — Where Stories Evolve
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/case-study-hero.jpeg" // Replace with your image
              alt="Dynamic Book Platform Overview"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              What if books weren’t static? What if readers could experience new versions, plot twists, or alternate endings written by other users — all within one app?
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500 mt-4">
              <li>Build a book app that stores complete stories.</li>
              <li>Let users submit edits or alternative story versions.</li>
              <li>Allow the community to browse, read, and rate the new versions.</li>
              <li>Keep the platform scalable for multiple book titles and large user traffic.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/case-study-solution.jpeg" // Replace with your image
                alt="Dynamic Book Platform Solution"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed an innovative mobile and web platform that offers a range of features designed to enhance the reading experience. The platform transforms traditional reading into an interactive, co-creative process where readers and writers collaborate on stories.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500">
              <li><strong>Centralized Book Repository:</strong> A library housing original books and user-submitted adaptations.</li>
              <li><strong>User-Generated Content Module:</strong> Allows readers to become co-authors by submitting alternate chapters, endings, and rewrites.</li>
              <li><strong>Version Control:</strong> Tracks authorship, edit times, and change logs.</li>
              <li><strong>Interactive Reading Experience:</strong> Users can seamlessly switch between original and community-created versions.</li>
              <li><strong>Voting and Rating System:</strong> Community-driven system to highlight the best retellings.</li>
              <li><strong>Admin & Moderation Tools:</strong> Ensures quality with a content approval workflow and analytics dashboard for tracking engagement.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Results</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/case-study-results.jpeg" // Replace with your image
                alt="Dynamic Book Platform Results"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500">
              <li>**Initial Traction:** Over 50 books cataloged and 1,000+ registered users within the first month.</li>
              <li>**High Engagement:** More than 300 alternate story versions submitted by users in just 30 days.</li>
              <li>**User Growth:** A leaderboard for top-rated rewriters doubled new user sign-ups.</li>
              <li>**Positive Feedback:** Readers described the app as “interactive,” “refreshing,” and “the future of digital reading.”</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}