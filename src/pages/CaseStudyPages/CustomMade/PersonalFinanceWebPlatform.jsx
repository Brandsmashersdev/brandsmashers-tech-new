'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function FinancePlatformCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Personal Finance Web Platform</title>
        <meta name="description" content="A case study on building a personal finance web platform to empower users with real-time tracking, smart insights, and goal management." />
        <meta property="og:title" content="Personal Finance Platform - Case Study" />
        <meta property="og:image" content="/finance-platform-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Building a Personal Finance Web Platform That Empowers Users
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/finance-1.jpeg" // Placeholder image
              alt="Personal Finance Dashboard"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              The client envisioned a web-based personal finance platform that would empower users to confidently manage their finances. The goal was to provide a secure and intuitive tool for tracking spending, setting goals, and gaining insights.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>**Real-Time Tracking:** Enable users to log income, categorize expenses, and set customizable savings goals.</li>
              <li>**Smart Insights:** Provide personalized recommendations based on spending habits using advanced algorithms.</li>
              <li>**Secure Account Linking:** Allow secure linking of multiple bank accounts and credit cards to a single dashboard.</li>
              <li>**Seamless User Experience:** Cater to all financial knowledge levels with an intuitive interface and helpful resources.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/finance-2.jpeg" // Placeholder image
                alt="Financial Insights"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed a secure and intelligent personal finance platform that not only tracks user data but also provides actionable insights to promote healthier financial behaviors. At its core, the platform integrates with various financial institutions to provide a **centralized, real-time view** of a user&#39;s entire financial life.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>**Secure API Integration:** Utilized a robust and secure API to link bank accounts and credit cards, ensuring data privacy and compliance with financial regulations.</li>
              <li>**AI-Powered Analytics Engine:** A custom-built algorithm analyzes spending patterns and income to provide **personalized insights** and recommendations, such as identifying spending leaks or suggesting optimal savings plans.</li>
              <li>**Intuitive Goal Setting:** Implemented a user-friendly module for setting and tracking financial goals. The system provides visual progress trackers and automated reminders to keep users motivated.</li>
              <li>**Cross-Platform Accessibility:** The web-based platform was designed to be fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Results</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/finance-3.jpeg" // Placeholder image
                alt="User Engagement"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>**On-Time Launch:** The feature-rich web application was successfully delivered and launched on time.</li>
              <li>**User Growth:** Achieved an impressive increase in new users within the first 60 days.</li>
              <li>**Increased Engagement:** Users interacted with their dashboards an average of **15 times per week**, indicating high utility and engagement.</li>
              <li>**Positive Feedback:** Earned an outstanding user rating of **4.8★**, with praise for the app&#39;s ease of use and insightful analytics.</li>
              <li>**Revenue Impact:** The launch enabled a new subscription tier, resulting in a **30% increase in recurring revenue**.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}