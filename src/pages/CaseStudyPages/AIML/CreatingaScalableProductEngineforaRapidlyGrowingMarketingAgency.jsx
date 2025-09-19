'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function MarketingAgencyCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Creating a Scalable Product Engine for a Rapidly Growing Marketing Agency</title>
        <meta name="description" content="A case study on developing a custom, scalable product to streamline operations, improve internal communication, and enhance client transparency for a growing marketing agency." />
        <meta property="og:title" content="Marketing Agency - Scalable Product Engine" />
        <meta property="og:image" content="/marketing-agency-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Creating a Scalable Product Engine for a Rapidly Growing Marketing Agency
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/marketing-agency-1.jpeg" // Placeholder image
              alt="Marketing Agency Workflow"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">Objective: Excessive Campaigns, Insufficient Control</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              A top-performing marketing agency was struggling with operational chaos due to rapid expansion. Dispersed client briefs, lost timelines, and a lack of clear ownership led to delays and strained client relationships. They needed a custom solution, not just another off-the-shelf tool.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-amber-500">
              <li>Client briefs and creative timelines were disorganized.</li>
              <li>Unclear team availability and task responsibilities.</li>
              <li>Last-minute reporting efforts.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">Solution: Transforming Disorder into a Customized Product</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/marketing-agency-2.jpeg" // Placeholder image
                alt="New Product Engine"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We started by understanding the agency&#39;s culture and workflows. We then designed and developed a bespoke web application named **&quot;Pulse&quot;**—a centralized campaign management and operations platform tailored to their unique needs.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-amber-500">
              <li>**Smart Brief Generator:** A dynamic form for different project types that automatically assigns tasks and deadlines.</li>
              <li>**Creative Calendar View:** A unified visual calendar that consolidates all campaign schedules and team availability.</li>
              <li>**Task Ownership Tracker:** Every deliverable is clearly assigned with comment threads and deadline reminders.</li>
              <li>**Live Campaign Status Board:** A read-only dashboard for clients to view real-time campaign status, reducing client calls.</li>
              <li>**Performance Feedback Loop:** Automatically pulls results from ad platforms and links them back to the original briefs.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">Technology Stack Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Frontend:</strong> ReactJS
              </div>
              <div>
                <strong>Backend:</strong> Node.js
              </div>
              <div>
                <strong>Database:</strong> MongoDB
              </div>
              <div>
                <strong>Design:</strong> Figma
              </div>
              <div>
                <strong>Authentication:</strong> Firebase Auth
              </div>
              <div>
                <strong>Integrations:</strong> Notion API, Google Ads API
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">Outcome: A Product That Enabled the Agency to Operate Like a Product Company</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-amber-500">
              <li>**Task duplication decreased by 60%** due to clearer brief ownership.</li>
              <li>**Internal communication improved** with a 40% reduction in &quot;status check&quot; messages.</li>
              <li>**Client satisfaction increased**, driven by greater project transparency.</li>
              <li>The time to plan, execute, and report on a campaign **fell by 33%**.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}