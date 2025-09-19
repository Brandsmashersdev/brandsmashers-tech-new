'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function SmartBuyerCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Smart Buyer Management System</title>
        <meta name="description" content="A case study on building a smart buyer management system for a local mart to track customer data and optimize sales." />
        <meta property="og:title" content="Smart Buyer Management System - Case Study" />
        <meta property="og:image" content="/smart-buyer-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Building a Smart Buyer Management System for a Local Mart
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/smart-buyer-1.jpeg" // Placeholder image
              alt="Smart Buyer Management System Overview"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              The client ran a vibrant retail mart that was experiencing significant growth, but a daunting challenge loomed over their success: the absence of a structured system to manage essential customer information, purchase histories, and pricing details. This disarray hindered their ability to effectively monitor customer loyalty, optimize inventory based on customer demand, and craft targeted promotions. To overcome these hurdles, they envisioned a sleek, user-friendly website that would serve as a robust hub for their operations.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-blue-500">
              <li>A secure info for storing customer details, ensuring privacy and protection.</li>
              <li>A dynamic system to meticulously track each buyer&apos;s purchase history, allowing for personalized service and promotions.</li>
              <li>An intuitive interface for logging and analyzing product information and pricing, empowering the client to make data-driven decisions and enhance their retail strategy.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">The Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/smart-buyer-2.jpeg" // Placeholder image
                alt="Solution Overview"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We meticulously crafted a state-of-the-art website that features a fully integrated buyer data management module, specifically designed to address the distinctive requirements of the mart.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-blue-500">
              <li>**Secure Administrator Login:** Store administrators can access the system through a fortified login portal, employing advanced security measures to protect sensitive customer data.</li>
              <li>**Comprehensive Buyer Profiles:** Each buyer profile is enriched with vital contact information, detailed visit logs, and a summary of total spending.</li>
              <li>**Interactive Purchasing Table:** This dynamic table meticulously records each purchased item, including the specific date and price at which it was bought.</li>
              <li>**Robust Search and Filter Functions:** Designed for efficiency, these intuitive tools allow users to swiftly navigate through extensive buyer and commodity databases.</li>
              <li>**Mobile-Responsive Design:** The sleek, mobile-responsive interface ensures that store staff can access critical information directly from tablets positioned at the counter.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">The Results</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-blue-500">
              <li>Digitized over 700+ buyer records in the first month.</li>
              <li>Gained clear insights into the best-selling items and pricing trends.</li>
              <li>Can quickly reorder popular products.</li>
              <li>The mart can now offer targeted discounts and loyalty programs on products according to their sales.</li>
            </ul>
            <blockquote className="mt-8 text-xl italic text-gray-600 border-l-4 border-blue-500 pl-4">
              <p>“This system saves me hours every week and gives me real control over my customers and sales.”</p>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
}