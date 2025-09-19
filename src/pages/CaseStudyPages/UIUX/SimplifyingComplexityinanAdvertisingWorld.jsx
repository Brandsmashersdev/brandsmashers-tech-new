'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function AdAgencyCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Simplifying Complexity in an Advertising World</title>
        <meta name="description" content="A case study on developing a custom campaign management portal to streamline ad agency workflows, improve communication, and reduce delays." />
        <meta property="og:title" content="Ad Agency Workflow Optimization - Case Study" />
        <meta property="og:image" content="/ad-agency-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Simplifying Complexity in an Advertising World
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/ad-agency-1.jpeg" // Placeholder image
              alt="Ad Agency Workflow Chaos"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">Objective: Addressing Chaos from Excessive Campaigns</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              A digital advertising agency faced significant workflow challenges due to rapid expansion. The ad operations team was overwhelmed by managing numerous client campaigns across multiple platforms, leading to a lack of clarity and frequent delays.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>Endless email threads and fragmented communication across various tools.</li>
              <li>No single source of truth for creative statuses and deadlines.</li>
              <li>Increased client inquiries and constant reworks for designers.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">Solution: Transforming Ad Operations into a Smooth Experience</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/ad-agency-2.jpeg" // Placeholder image
                alt="New Campaign Management Portal"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed a custom **Campaign Management Portal** designed with empathy and an understanding of the agency&apos;s workflow. The portal provides transparency, organization, and accountability to all stakeholders, from designers to clients.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>**Briefing Hub:** Smart forms that automate role assignments and collect all necessary information upfront.</li>
              <li>**Creative Tracker:** A timeline-style progress bar for real-time status updates on every campaign.</li>
              <li>**Centralized Feedback:** Version-controlled comment sections with visual annotation tools to streamline the revision process.</li>
              <li>**Client Dashboard:** A read-only interface for clients to check statuses and access files, reducing email traffic by 70%.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">Tools Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Design:</strong> Figma, Webflow
              </div>
              <div>
                <strong>Development:</strong> React, Firebase
              </div>
              <div>
                <strong>Integrations:</strong> Slack, Trello
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">Result: A Workflow Worth Celebrating</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/ad-agency-3.jpeg" // Placeholder image
                alt="Operational Efficiency"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
              <li>Campaign delivery delays were reduced by **47%**.</li>
              <li>Client email correspondence decreased by **70%**.</li>
              <li>Creative revisions went down by **38%**.</li>
              <li>Internal teams reported a **25% rise in satisfaction**, with a transition to proactive management.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}