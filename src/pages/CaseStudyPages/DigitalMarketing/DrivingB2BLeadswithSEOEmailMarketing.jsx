'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function B2BLeadsCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Driving B2B Leads with SEO & Email Marketing</title>
        <meta name="description" content="A case study on how a fintech company transformed its online presence and lead generation through a comprehensive SEO and email marketing strategy." />
        <meta property="og:title" content="B2B Leads with SEO & Email Marketing - Case Study" />
        <meta property="og:image" content="/b2b-leads-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Driving B2B Leads with SEO & Email Marketing
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/b2b-leads-1.jpeg" // Placeholder image
              alt="SEO & Email Marketing Strategy Overview"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              FinServe, a growing fintech company, was struggling with low online visibility and an outdated email marketing strategy. They needed to move away from cold outreach and generate more inbound leads.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-cyan-500">
              <li>Poor visibility and low rankings for key industry terms.</li>
              <li>Minimal organic traffic to their website.</li>
              <li>Decreasing open and click-through rates from email campaigns.</li>
              <li>Few inbound leads, leading to heavy reliance on cold outreach.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/b2b-leads-2.jpeg" // Placeholder image
                alt="Keyword Strategy and Content"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We implemented a comprehensive digital strategy starting with an in-depth SEO audit and a refreshed approach to email marketing. Our solution was designed to transform their online presence and generate qualified B2B leads.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-cyan-500">
              <li>**Technical SEO & On-Page Optimization:** Fixed site speed and indexing issues. Optimized landing pages, metadata, and headings for key search terms.</li>
              <li>**Targeted Content Strategy:** Conducted keyword research to identify high-intent phrases for B2B buyers. Created a 6-month content calendar with valuable blogs and whitepapers.</li>
              <li>**Lead Magnet Creation:** Developed high-value lead magnets like eBooks and checklists with custom landing pages to capture prospect information.</li>
              <li>**Advanced Email Nurturing:** Segmented email lists and developed personalized nurture sequences to re-engage leads and guide them through the sales funnel.</li>
              <li>**Sales & Marketing Alignment:** Integrated with CRM systems like HubSpot to implement lead scoring and create a seamless handoff process between marketing and sales teams.</li>
              <li>**Analytics & Reporting:** Established a comprehensive dashboard to track key metrics and provide monthly reports for data-driven decisions.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-600">The Results</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/b2b-leads-3.jpeg" // Placeholder image
                alt="Growth Metrics"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-cyan-500">
              <li>**Organic Traffic:** Achieved a **120% increase** in search-driven website visitors in just 6 months.</li>
              <li>**Keyword Ranking:** Secured **Page 1 ranking** on Google for over 15 key terms.</li>
              <li>**Lead Generation:** Captured **150+ qualified B2B leads** through gated content.</li>
              <li>**Email Performance:** Open rates soared from 12% to **36%**, and click-through rates doubled.</li>
              <li>**Sales Impact:** Generated over **$1 million in new business pipeline** from inbound leads.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}