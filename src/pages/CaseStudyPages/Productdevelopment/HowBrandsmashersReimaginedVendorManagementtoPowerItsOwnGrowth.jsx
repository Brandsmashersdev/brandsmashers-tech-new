// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function BrandsmashersVendorManagementCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | How Brandsmashers Reimagined Vendor Management to Power Its Own Growth</title>
//         <meta name="description" content="A case study on how Brandsmashers Tech built an internal vendor management platform to streamline operations, enhance communication, and scale its business." />
//         <meta property="og:title" content="Brandsmashers Vendor Management - Case Study" />
//         <meta property="og:image" content="/vendor-hub-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: How Brandsmashers Reimagined Vendor Management to Power Its Own Growth
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/vendor-hub-1.jpeg" // Placeholder image
//               alt="VendorHub Dashboard"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-sky-600">Objective: Navigating the Challenges of Rapid Scaling</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               As Brandsmashers Tech scaled its staff augmentation services, its manual vendor management process became overwhelmed. Internal teams were bogged down by a lack of visibility, missed follow-ups, and a patchwork of disparate tools, hindering efficiency and growth.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
//               <li>Diminished visibility into roles and submissions.</li>
//               <li>Critical candidate follow-ups were often overlooked.</li>
//               <li>Inability to easily track vendor performance.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-sky-600">Solution: Constructing the Vendor Engine We Required</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/vendor-hub-2.jpeg" // Placeholder image
//                 alt="Vendor Portal Features"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We took a discovery-driven approach to build an internal product, **VendorHub**, an advanced vendor portal that transformed our operations. We conducted internal interviews to identify pain points and developed a cohesive platform with a robust technical framework.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
//               <li>**Unified Role Dashboard:** Gives vendors clear visibility into approved roles, timelines, and quotas.</li>
//               <li>**Smart Submission Tracker:** Tracks each candidate submission with statuses and feedback for transparency.</li>
//               <li>**Performance Insights:** Allows vendors to monitor their own performance metrics in real-time.</li>
//               <li>**Alerts & Nudges:** Automated system prompts keep vendors informed about aging submissions and required documentation.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-sky-600">Technical Stack Used</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <strong>Design:</strong> Figma
//               </div>
//               <div>
//                 <strong>Frontend:</strong> React
//               </div>
//               <div>
//                 <strong>Backend:</strong> Node
//               </div>
//               <div>
//                 <strong>Real-time & Auth:</strong> Firebase
//               </div>
//               <div>
//                 <strong>Database:</strong> MongoDB
//               </div>
//               <div>
//                 <strong>Analytics:</strong> Power BI
//               </div>
//             </div>
//           </div>
          
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-sky-600">Result: Transforming Chaos into Clarity</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/vendor-hub-3.jpeg" // Placeholder image
//                 alt="Improved Team Efficiency"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
//               <li>Achieved a **35% decrease** in time-to-fill for roles.</li>
//               <li>Significantly **enhanced vendor satisfaction** and communication.</li>
//               <li>Established **data-driven insights** to identify top-performing vendors.</li>
//               <li>Allowed our talent acquisition team to transition to a more **proactive approach**.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


// src/components/BrandsmashersVendorManagementCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'Diminished visibility into roles and submissions.',
  'Critical candidate follow-ups were often overlooked.',
  'Inability to easily track vendor performance.',
];

const solutionDetails = [
  {
    title: 'Unified Role Dashboard',
    description: 'Gives vendors clear visibility into approved roles, timelines, and quotas.',
  },
  {
    title: 'Smart Submission Tracker',
    description: 'Tracks each candidate submission with statuses and feedback for transparency.',
  },
  {
    title: 'Performance Insights',
    description: 'Allows vendors to monitor their own performance metrics in real-time.',
  },
  {
    title: 'Alerts & Nudges',
    description: 'Automated system prompts keep vendors informed about aging submissions and required documentation.',
  },
];

const techStack = [
  { tech: 'Design', name: 'Figma' },
  { tech: 'Frontend', name: 'React' },
  { tech: 'Backend', name: 'Node' },
  { tech: 'Real-time & Auth', name: 'Firebase' },
  { tech: 'Database', name: 'MongoDB' },
  { tech: 'Analytics', name: 'Power BI' },
];

const results = [
  { value: '35%', label: 'Decrease in Time-to-Fill' },
  { value: 'Enhanced', label: 'Vendor Satisfaction' },
  { value: 'Data-Driven', label: 'Vendor Insights' },
];

export default function BrandsmashersVendorManagementCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Vendor Management</title>
        <meta name="description" content="A case study on how Brandsmashers Tech built an internal vendor management platform to streamline operations and enhance communication." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Vendor Management
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Powering Our Own Growth
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              As Brandsmashers Tech scaled its staff augmentation services, its manual vendor management process became overwhelmed, leading to inefficiency and limited growth.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Issues</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                {challengeIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>The Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We built an advanced internal product, **VendorHub**, that transformed our operations. We took a discovery-driven approach, conducting internal interviews to identify pain points and developed a cohesive platform.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {solutionDetails.map((detail, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{detail.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/vendor-hub-solution.png" // Placeholder image
                  alt="VendorHub Dashboard"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>Technical Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {techStack.map((item, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-xl font-bold" style={{ color: '#ff5010' }}>{item.tech}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{item.name}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />
          
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {results.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                The new platform enabled our talent acquisition team to transition to a more proactive approach, transforming chaos into clarity and powering our growth.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}