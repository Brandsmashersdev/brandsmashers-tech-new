'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function AIinHealthcareCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Transforming Diagnosis with AI</title>
        <meta name="description" content="A case study on an AI-powered clinical decision support system designed to assist clinicians in early disease diagnosis and risk prediction." />
        <meta property="og:title" content="AI in Healthcare - Transforming Diagnosis" />
        <meta property="og:image" content="/ai-healthcare-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Transforming Diagnosis with AI
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/ai-healthcare-1.jpeg" // Placeholder image
              alt="AI-Powered Clinical System"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              Despite skilled clinicians and advanced technology, delayed diagnoses and complications from diseases were increasing. The primary issues stemmed from fragmented data, overwhelmed clinicians, and missed critical signs, especially in high-risk patients.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>Fragmented Medical Data scattered across various formats.</li>
              <li>Overwhelmed Clinicians with little time for in-depth data analysis.</li>
              <li>Missed Critical Signs, particularly in high-risk cases.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/ai-healthcare-2.jpeg" // Placeholder image
                alt="AI System Dashboard"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed an AI-powered clinical decision support system named **App**. This system was built to act as a **clinical co-pilot**, assisting healthcare professionals by predicting disease risk and facilitating early diagnosis.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>**Insights Collection:** We gathered and anonymized five years of patient data to train the models.</li>
              <li>**Model Development:** Utilized machine learning models like XGBoost and a BERT-based NLP engine to uncover hidden patterns and interpret unstructured notes.</li>
              <li>**Human-Centered Design:** Designed the system to enhance clinician capabilities with timely alerts on potentially overlooked symptoms.</li>
              <li>**Pilot Testing:** Integrated the model with existing hospital software via FHIR APIs and created a user-friendly web dashboard using React.js.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Technologies Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Languages & Libraries:</strong> Python, Scikit-learn, XGBoost, Hugging Face Transformers
              </div>
              <div>
                <strong>Frontend:</strong> React.js
              </div>
              <div>
                <strong>Backend/API:</strong> Flask, FastAPI, FHIR
              </div>
              <div>
                <strong>Infrastructure:</strong> Docker, Kubernetes, AWS
              </div>
              <div>
                <strong>Security:</strong> HIPAA-aligned anonymization and access control
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">The Results</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-emerald-500">
              <li>Doctors were able to identify conditions like sepsis up to **12 hours sooner**.</li>
              <li>Diagnostic accuracy for high-risk cases improved from 82% to **91%**.</li>
              <li>The time needed for preliminary diagnoses was reduced by over **40%**.</li>
              <li>Initially skeptical staff members came to rely on the app for additional insights during demanding shifts.</li>
            </ul>
            <blockquote className="mt-8 text-xl italic text-gray-600 border-l-4 border-emerald-500 pl-4">
              <p>&quot;It&#39;s akin to having a colleague who never tires — one who meticulously reviews every detail, recalls each patient’s information, and aids us in making timely decisions.&quot;</p>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
}