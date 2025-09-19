'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function BrandsmashersVendorManagementCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | How Brandsmashers Reimagined Vendor Management to Power Its Own Growth</title>
        <meta name="description" content="A case study on how Brandsmashers Tech built an internal vendor management platform to streamline operations, enhance communication, and scale its business." />
        <meta property="og:title" content="Brandsmashers Vendor Management - Case Study" />
        <meta property="og:image" content="/vendor-hub-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: How Brandsmashers Reimagined Vendor Management to Power Its Own Growth
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/vendor-hub-1.jpeg" // Placeholder image
              alt="VendorHub Dashboard"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Objective: Navigating the Challenges of Rapid Scaling</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              As Brandsmashers Tech scaled its staff augmentation services, its manual vendor management process became overwhelmed. Internal teams were bogged down by a lack of visibility, missed follow-ups, and a patchwork of disparate tools, hindering efficiency and growth.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
              <li>Diminished visibility into roles and submissions.</li>
              <li>Critical candidate follow-ups were often overlooked.</li>
              <li>Inability to easily track vendor performance.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Solution: Constructing the Vendor Engine We Required</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/vendor-hub-2.jpeg" // Placeholder image
                alt="Vendor Portal Features"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We took a discovery-driven approach to build an internal product, **VendorHub**, an advanced vendor portal that transformed our operations. We conducted internal interviews to identify pain points and developed a cohesive platform with a robust technical framework.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
              <li>**Unified Role Dashboard:** Gives vendors clear visibility into approved roles, timelines, and quotas.</li>
              <li>**Smart Submission Tracker:** Tracks each candidate submission with statuses and feedback for transparency.</li>
              <li>**Performance Insights:** Allows vendors to monitor their own performance metrics in real-time.</li>
              <li>**Alerts & Nudges:** Automated system prompts keep vendors informed about aging submissions and required documentation.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Technical Stack Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Design:</strong> Figma
              </div>
              <div>
                <strong>Frontend:</strong> React
              </div>
              <div>
                <strong>Backend:</strong> Node
              </div>
              <div>
                <strong>Real-time & Auth:</strong> Firebase
              </div>
              <div>
                <strong>Database:</strong> MongoDB
              </div>
              <div>
                <strong>Analytics:</strong> Power BI
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Result: Transforming Chaos into Clarity</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/vendor-hub-3.jpeg" // Placeholder image
                alt="Improved Team Efficiency"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
              <li>Achieved a **35% decrease** in time-to-fill for roles.</li>
              <li>Significantly **enhanced vendor satisfaction** and communication.</li>
              <li>Established **data-driven insights** to identify top-performing vendors.</li>
              <li>Allowed our talent acquisition team to transition to a more **proactive approach**.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}