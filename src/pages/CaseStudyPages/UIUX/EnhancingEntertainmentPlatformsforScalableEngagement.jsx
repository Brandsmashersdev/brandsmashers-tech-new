'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function EntertainmentPlatformCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study: Enhancing Entertainment Platforms for Scalable Engagement</title>
        <meta name="description" content="A case study on how we rebuilt a digital entertainment platform to boost user engagement, creator tools, and monetization." />
        <meta property="og:title" content="Entertainment Platform - Case Study" />
        <meta property="og:image" content="/entertainment-platform-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Enhancing Entertainment Platforms for Scalable Engagement
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/entertainment-1.jpeg" // Placeholder image
              alt="Entertainment Platform Reimagined"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">Objective: Addressing Growth Beyond Technical Capacity</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              Our client&apos;s entertainment platform was gaining audience traction, but its outdated technical infrastructure was a major bottleneck. Issues like slow content uploads, limited user customization, and low retention rates were hindering their growth.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
              <li>Lengthy content upload times.</li>
              <li>No user customization options.</li>
              <li>Limited performance insights for creators.</li>
              <li>A high rate of users not returning.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">Solution: Building a Robust User-Centric Experience</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/entertainment-2.jpeg" // Placeholder image
                alt="AI-Driven Content Feed"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We rebuilt the platform with a user-first approach. By conducting comprehensive user research, we identified three core personas—the fan, the creator, and the marketer—and developed key features to address the needs of each group.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
              <li>**AI-Driven Content Feed:** A smart home feed that adapts to user preferences.</li>
              <li>**Creator Analytics Dashboard:** Provides creators with instant access to critical metrics like views, shares, and watch time.</li>
              <li>**Livestream Center:** A streamlined solution for event broadcasting with real-time chat and ticketing integrations.</li>
              <li>**Gamified Engagement System:** A reward system that gives fans badges and exclusive content for their interactions.</li>
              <li>**Brand Sponsorship Module:** Offers marketers tools to initiate sponsorships and analyze campaign performance.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Front-end:</strong> React Native, React.js
              </div>
              <div>
                <strong>Back-end:</strong> Node.js
              </div>
              <div>
                <strong>Database:</strong> MongoDB
              </div>
              <div>
                <strong>Infrastructure:</strong> AWS CloudFront
              </div>
              <div>
                <strong>Analytics:</strong> Mixpanel, Firebase
              </div>
              <div>
                <strong>Payments:</strong> Stripe
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">Results: Transitioning from Platform to Comprehensive Entertainment Ecosystem</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
              <li>User engagement **increased by 52%**.</li>
              <li>Content creators saw a **40% boost** in average viewership.</li>
              <li>Fan retention improved by **38%**.</li>
              <li>Digital sponsorship revenue **escalated by 60%** in the first quarter.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}