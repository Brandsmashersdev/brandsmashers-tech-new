'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function FitnessAppCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Revamping the Fitness Experience via UI/UX</title>
        <meta name="description" content="A case study on how a comprehensive UI/UX redesign transformed a fitness app, boosting user retention, engagement, and subscription rates." />
        <meta property="og:title" content="Fitness App UI/UX Redesign - Case Study" />
        <meta property="og:image" content="/fitness-app-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Revamping the Fitness Experience via UI/UX
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/fitness-app-1.jpeg" // Placeholder image
              alt="Fitness App UI/UX Redesign"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">The Challenge: Transforming Confusion into Clarity for Users</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              A popular fitness app faced a significant decline in user retention. Despite high-quality content, its unintuitive UI/UX made essential features difficult to access, leading to user frustration and lost revenue.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-fuchsia-500">
              <li>Workouts were hard to start, requiring multiple clicks.</li>
              <li>Vital features like nutritional and statistics tracking were buried in convoluted menus.</li>
              <li>Subscription upgrade prompts were hidden, hindering revenue growth.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Solution: Designing with Human Motivation at the Forefront</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/fitness-app-2.jpeg" // Placeholder image
                alt="New Dashboard and Features"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We took a human-centered approach, focusing on psychology and motivation. Through comprehensive user research, we identified key friction points and redesigned the app around three core principles: **Clarity**, **Motivation**, and **Conversion**.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-fuchsia-500">
              <li>**Streamlined Dashboard:** Provided immediate access to workouts, meal tracking, and progress stats to minimize cognitive load.</li>
              <li>**Gamification Elements:** Integrated reward systems, streak counters, and visually highlighted milestones to make the fitness journey engaging and rewarding.</li>
              <li>**Optimized Subscription Prompts:** Restructured subscription placements to be natural and unobtrusive, encouraging upgrades.</li>
              <li>**Key Implementations:** Introduced a tailored onboarding process, a flexible workout interface, and a dark mode, all based on user feedback.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Tools Utilized</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Design & Prototyping:</strong> Figma, Adobe XD
              </div>
              <div>
                <strong>User Testing & Research:</strong> Maze
              </div>
              <div>
                <strong>Collaboration & Documentation:</strong> Notion, Zeplin
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Result: A UI That Inspires Action and Positive Change</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/fitness-app-3.jpeg" // Placeholder image
                alt="User Feedback and Statistics"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-fuchsia-500">
              <li>User retention **surged by 38%** within the first 30 days.</li>
              <li>In-app subscriptions **increased by 41%**.</li>
              <li>The average time to initiate a workout **plummeted by 60%**.</li>
              <li>User feedback highlighted the new “ease of use” and “smooth flow” of the app.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}