'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function DigitalMarketingCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Brainstorming Our Way to a Winning Digital Marketing Strategy</title>
        <meta name="description" content="A case study on developing a digital marketing strategy to boost brand awareness, engagement, and sales for a healthy snack brand." />
        <meta property="og:title" content="Digital Marketing Strategy - Case Study" />
        <meta property="og:image" content="/marketing-strategy-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Brainstorming Our Way to a Winning Digital Marketing Strategy
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/marketing-1.jpeg" // Placeholder image
              alt="Digital Marketing Strategy"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              Our client, a company with a quality product, struggled with brand recognition and low social media engagement. Their paid ads had a high cost per acquisition, and they were unsure which audience segments to target for growth.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>Lack of brand recognition.</li>
              <li>Low social media engagement.</li>
              <li>High cost per acquisition (CPA) on paid advertising.</li>
              <li>Uncertainty about the best audience segments for growth.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/marketing-2.jpeg" // Placeholder image
                alt="Strategy Session"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We conducted a multi-session strategy sprint to align our marketing, creative, and analytics teams. This approach allowed us to move beyond simple ads and create a story that would truly resonate with the target audience.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>**Audience Exploration:** We went beyond demographics to understand the motivations and frustrations of health-conscious millennials and busy professionals.</li>
              <li>**Brand Storytelling:** Developed core messaging concepts like &quot;Snack Smart, Live Fully&quot; to define the brand&apos;s soul and emotional connection.</li>
              <li>**Campaign Blueprint:** Created a blueprint for building brand loyalty through community-driven challenges, influencer collaborations, and engaging behind-the-scenes content.</li>
            </ul>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">Our Final Strategy</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/marketing-3.jpeg" // Placeholder image
                alt="Campaign Implementation"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>**Social Media Relaunch:** Revitalized the social presence with user-generated content and short-form videos.</li>
              <li>**Micro-Influencer Campaign:** Collaborated with 10 health-focused creators for authentic reviews.</li>
              <li>**Ad Optimization:** Refined paid ads by focusing on top-performing audience segments and fresh creative.</li>
              <li>**Email Marketing Revamp:** Developed a welcome series and exclusive offers to nurture customer loyalty.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">The Results</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>A **4x increase** in social media engagement.</li>
              <li>Over **70% growth** in followers within three months.</li>
              <li>A **35% reduction** in CPA from paid ads.</li>
              <li>More than **2,000 new leads** generated from influencer campaigns.</li>
              <li>A significant **$200K increase in sales** over the four-month campaign.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}