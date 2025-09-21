// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function MediInfoCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | MediInfo – Pharmaceutical Data Management Platform</title>
//         <meta name="description" content="MediInfo revolutionizes pharmaceutical data management for clinicians with centralized, intelligent drug information." />
//         <meta property="og:title" content="MediInfo – Pharmaceutical Data Platform - Case Study" />
//         <meta property="og:image" content="/mediinfo-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: MediInfo – Revolutionizing Pharmaceutical Data Management for Enhanced Patient Care
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/mediinfo-1.jpeg" // Placeholder image
//               alt="MediInfo Platform Overview"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-rose-600">The Challenge</h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
//               <li>**Scattered Data:** Information was dispersed across physical and digital formats, making it hard to access.</li>
//               <li>**Lack of Chemical Insight:** No structured overview of active ingredients and their chemical interactions.</li>
//               <li>**Missed Side Effects:** Difficulty in linking patient symptoms to medication data.</li>
//               <li>**Low Treatment Clarity:** Limited ability to connect specific medications to diseases in EHRs.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-rose-600">The Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/mediinfo-2.jpeg" // Placeholder image
//                 alt="MediInfo Dashboard"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We developed **MediInfo**, a dynamic and intelligent pharmaceutical resource. It&apos;s a central hub for verified drug information, designed to seamlessly integrate into clinical workflows and empower healthcare professionals with quick, searchable insights.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
//               <li>Centralized repository with verified drug data.</li>
//               <li>Clear drug-brand linking and chemical composition details.</li>
//               <li>Mechanism of action for each medication.</li>
//               <li>Disease mapping for effective prescription planning.</li>
//               <li>Side-effect listing (common and rare).</li>
//               <li>Drug/food interaction insights.</li>
//               <li>AI-powered intelligent search and an interactive dashboard UI.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-rose-600">Key Features</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <strong>Chemical Composition Tree:</strong> A visual breakdown of a drug&apos;s molecular components.
//               </div>
//               <div>
//                 <strong>Disease Mapping:</strong> Direct linkage of drugs to symptoms and diseases.
//               </div>
//               <div>
//                 <strong>Side-Effect Matrix:</strong> Real-time flagged side effects based on user reports.
//               </div>
//               <div>
//                 <strong>Smart Filters:</strong> Search by category, such as &quot;anti-inflammatory&quot; or &quot;antibiotic.&quot;
//               </div>
//               <div>
//                 <strong>Analytics Dashboard:</strong> Tracks usage frequency, effectivity rates, and side-effect reports.
//               </div>
//               <div>
//                 <strong>AI Suggestions:</strong> Recommends alternatives for allergies or conflicts.
//               </div>
//             </div>
//           </div>
          
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-rose-600">The Results</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/mediinfo-3.jpeg" // Placeholder image
//                 alt="MediInfo Results"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
//               <li>Over **12,000 medications** cataloged in a centralized system.</li>
//               <li>Medication errors were reduced by **45%** due to accurate warnings.</li>
//               <li>Disease-drug matching improved by **28%** in urban clinics.</li>
//               <li>Doctors can select medicines **35% faster** using smart filters.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }



// src/components/MediInfoCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const keyFeatures = [
  {
    title: 'Chemical Composition Tree',
    description: 'Visual breakdown of each drug’s molecular components.',
  },
  {
    title: 'Disease Mapping',
    description: 'Direct linkage of drugs to symptoms & disease names.',
  },
  {
    title: 'Side-Effect Matrix',
    description: 'Real-time flagged side effects based on user reports.',
  },
  {
    title: 'Smart Filters',
    description: 'Search by category: anti-inflammatory, antibiotic, antidepressant, etc.',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track usage frequency, effectivity rate, side-effect reports.',
  },
  {
    title: 'AI Suggestions',
    description: 'Recommends alternatives in case of allergies or drug conflict.',
  },
];

const results = [
  { value: '12,000+', label: 'Drugs Stored' },
  { value: '45%', label: 'Reduction in Medication Errors' },
  { value: '28%', label: 'Improved Treatment Success' },
  { value: '35%', label: 'Faster Medicine Selection' },
];

export default function MediInfoCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | MediInfo</title>
        <meta name="description" content="A case study on MediInfo, a platform for pharmaceutical data management." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: MediInfo
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Revolutionizing Pharmaceutical Data Management
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              The client faced significant challenges in managing dispersed medication data, leading to a lack of chemical insight, missed side effects, and low treatment clarity.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Key Issues</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                <li>**Scattered Data:** Information was fragmented across various formats.</li>
                <li>**Lack of Chemical Insight:** No structured overview of active ingredients.</li>
                <li>**Missed Side Effects:** Inability to link patient symptoms to medication data.</li>
                <li>**Low Treatment Clarity:** Difficulty connecting medications to treatment plans in EHRs.</li>
              </ul>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>The Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We developed MediInfo, a dynamic and intelligent pharmaceutical resource that serves as a central hub for verified drug information. The platform functions as a smart assistant, empowering clinicians to make informed decisions faster.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{feature.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/CaseStudyImages/meditinfomobile.png"
                  alt="MediInfo Solution Dashboard"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {results.map((stat, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{stat.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}