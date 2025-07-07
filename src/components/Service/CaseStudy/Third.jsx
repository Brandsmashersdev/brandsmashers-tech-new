'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function MediVaultCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | MediVault – Pharmaceutical Data Management Platform</title>
        <meta name="description" content="MediVault revolutionizes pharmaceutical data management for clinicians with centralized, intelligent drug information." />
        <meta property="og:title" content="MediVault – Pharmaceutical Data Platform - Case Study" />
        <meta property="og:image" content="/medivault-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: MediVault – Revolutionizing Pharmaceutical Data Management for Enhanced Patient Care
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/medical.jpeg"
              alt="MediVault Overview"
              width={900}
              height={500}
              className="rounded-xl shadow-md w-full max-w-lg h-auto object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Challenge</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500">
              <li>Scattered Data across physical, Excel, and third-party sources</li>
              <li>Lack of structured insights on active ingredients and chemical interactions</li>
              <li>Missed Side Effects due to disjointed symptom-medication linking</li>
              <li>Low clarity in linking medications to EHR treatment plans</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Solution</h2>
            <div className="flex justify-center mb-8">
              <Image
                src="/medical2.jpeg"
                alt="MediVault UI"
                width={800}
                height={400}
                className="rounded-xl shadow-md w-full max-w-3xl h-auto object-cover"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              MediVault was designed as a dynamic and intelligent pharmaceutical database to empower healthcare professionals with fast, searchable, and accurate drug data. It integrates seamlessly into clinical workflows and supports informed decision-making through organized and actionable insights.
            </p>

            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500">
              <li>Centralized repository with verified drug data</li>
              <li>Drug-brand linking with chemical composition details</li>
              <li>Mechanism of action for each medication</li>
              <li>Disease mapping for effective prescription planning</li>
              <li>Side-effect listing (common and rare)</li>
              <li>Drug/food interaction insights</li>
              <li>Prescribed dosage pattern references</li>
              <li>AI-powered intelligent search and dashboard UI</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Chemical Composition Tree:</strong> Visual breakdown of drug molecular components
              </div>
              <div>
                <strong>Disease Mapping:</strong> Direct linkage of drugs to symptoms and diseases
              </div>
              <div>
                <strong>Side-Effect Matrix:</strong> Real-time flagged side effects based on reports
              </div>
              <div>
                <strong>Smart Filters:</strong> Search by type: antibiotic, antidepressant, etc.
              </div>
              <div>
                <strong>Analytics Dashboard:</strong> Track usage, effectivity, and reports
              </div>
              <div>
                <strong>AI Suggestions:</strong> Alternative recommendations for allergies or conflicts
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-8">
                        <Image
                          src="/medical3.jpeg"
                          alt="Platform Results"
                          width={900}
                          height={500}
                          className="rounded-xl shadow-md w-full max-w-3xl h-auto object-cover"
                        />
                      </div>
          

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Results</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500">
              <li>Over 12,000 medications cataloged in a centralized system</li>
              <li>Medication errors reduced by 45% due to smart alerts</li>
              <li>Improved disease-drug matching by 28% in urban clinics</li>
              <li>Doctors prescribe medications 35% faster using filters</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
