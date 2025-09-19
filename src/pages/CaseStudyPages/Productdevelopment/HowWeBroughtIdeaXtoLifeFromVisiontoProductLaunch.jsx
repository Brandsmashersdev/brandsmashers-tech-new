'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function IdeaXCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | How We Brought IdeaX to Life - From Vision to Product Launch</title>
        <meta name="description" content="A case study on developing a web platform for small business owners, from initial concept to a successful MVP launch within a 6-month timeline." />
        <meta property="og:title" content="IdeaX - From Vision to Product Launch" />
        <meta property="og:image" content="/ideax-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: How We Brought IdeaX to Life - From Vision to Product Launch
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/ideax-1.jpeg" // Placeholder image
              alt="IdeaX Platform Overview"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              IdeaX aimed to build a transformative platform for small business owners, but faced significant roadblocks, including a fuzzy roadmap, an overwhelming wishlist of features, and a tight 6-month timeline.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
              <li>A fuzzy product roadmap that lacked clarity.</li>
              <li>An overwhelming wishlist of features.</li>
              <li>Absence of a clear Minimum Viable Product (MVP).</li>
              <li>Pressure of a tight 6-month timeline.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/ideax-2.jpeg" // Placeholder image
                alt="UX/UI Design Mockups"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We partnered with IdeaX to bring their vision to life through a structured, four-step process that focused on clarity, user-centric design, and agile development.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
              <li>**Step 1: Deep Discovery:** Conducted interviews to understand user pain points, define personas, and identify the MVP&apos;s core pillars: task management, expense tracking, and performance analytics.</li>
              <li>**Step 2: Designing the Experience:** Created low-fidelity wireframes and clickable prototypes, followed by a professional, modern visual design with weekly feedback loops.</li>
              <li>**Step 3: Agile Development:** Built a responsive frontend with React and a scalable backend with modular services. We worked in two-week sprints, demoing progress and adapting to feedback.</li>
              <li>**Step 4: Launch + Learn + Iterate:** Launched the MVP on time, gathered user feedback, monitored adoption, and planned for future feature expansion.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Results</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/ideax-3.jpeg" // Placeholder image
                alt="Product Analytics"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
              <li>The product was launched on time and within budget.</li>
              <li>Achieved over **2,000 signups** in the first two months.</li>
              <li>Secured **$500k in new investor funding** shortly after launch.</li>
              <li>Users praised the platform for its simplicity and value.</li>
              <li>Built a scalable architecture ready for Phase 2 feature expansion.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}