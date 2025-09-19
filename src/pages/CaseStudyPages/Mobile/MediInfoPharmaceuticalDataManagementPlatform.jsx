'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function MediInfoCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | MediInfo – Pharmaceutical Data Management Platform</title>
        <meta name="description" content="MediInfo revolutionizes pharmaceutical data management for clinicians with centralized, intelligent drug information." />
        <meta property="og:title" content="MediInfo – Pharmaceutical Data Platform - Case Study" />
        <meta property="og:image" content="/mediinfo-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: MediInfo – Revolutionizing Pharmaceutical Data Management for Enhanced Patient Care
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/mediinfo-1.jpeg" // Placeholder image
              alt="MediInfo Platform Overview"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">The Challenge</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
              <li>**Scattered Data:** Information was dispersed across physical and digital formats, making it hard to access.</li>
              <li>**Lack of Chemical Insight:** No structured overview of active ingredients and their chemical interactions.</li>
              <li>**Missed Side Effects:** Difficulty in linking patient symptoms to medication data.</li>
              <li>**Low Treatment Clarity:** Limited ability to connect specific medications to diseases in EHRs.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">The Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/mediinfo-2.jpeg" // Placeholder image
                alt="MediInfo Dashboard"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed **MediInfo**, a dynamic and intelligent pharmaceutical resource. It&apos;s a central hub for verified drug information, designed to seamlessly integrate into clinical workflows and empower healthcare professionals with quick, searchable insights.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
              <li>Centralized repository with verified drug data.</li>
              <li>Clear drug-brand linking and chemical composition details.</li>
              <li>Mechanism of action for each medication.</li>
              <li>Disease mapping for effective prescription planning.</li>
              <li>Side-effect listing (common and rare).</li>
              <li>Drug/food interaction insights.</li>
              <li>AI-powered intelligent search and an interactive dashboard UI.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Chemical Composition Tree:</strong> A visual breakdown of a drug&apos;s molecular components.
              </div>
              <div>
                <strong>Disease Mapping:</strong> Direct linkage of drugs to symptoms and diseases.
              </div>
              <div>
                <strong>Side-Effect Matrix:</strong> Real-time flagged side effects based on user reports.
              </div>
              <div>
                <strong>Smart Filters:</strong> Search by category, such as &quot;anti-inflammatory&quot; or &quot;antibiotic.&quot;
              </div>
              <div>
                <strong>Analytics Dashboard:</strong> Tracks usage frequency, effectivity rates, and side-effect reports.
              </div>
              <div>
                <strong>AI Suggestions:</strong> Recommends alternatives for allergies or conflicts.
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600">The Results</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/mediinfo-3.jpeg" // Placeholder image
                alt="MediInfo Results"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
              <li>Over **12,000 medications** cataloged in a centralized system.</li>
              <li>Medication errors were reduced by **45%** due to accurate warnings.</li>
              <li>Disease-drug matching improved by **28%** in urban clinics.</li>
              <li>Doctors can select medicines **35% faster** using smart filters.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}