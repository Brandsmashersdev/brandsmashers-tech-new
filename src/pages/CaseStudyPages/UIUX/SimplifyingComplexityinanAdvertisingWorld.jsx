// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function AdAgencyCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Simplifying Complexity in an Advertising World</title>
//         <meta name="description" content="A case study on developing a custom campaign management portal to streamline ad agency workflows, improve communication, and reduce delays." />
//         <meta property="og:title" content="Ad Agency Workflow Optimization - Case Study" />
//         <meta property="og:image" content="/ad-agency-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Simplifying Complexity in an Advertising World
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/ad-agency-1.jpeg" // Placeholder image
//               alt="Ad Agency Workflow Chaos"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-orange-600">Objective: Addressing Chaos from Excessive Campaigns</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               A digital advertising agency faced significant workflow challenges due to rapid expansion. The ad operations team was overwhelmed by managing numerous client campaigns across multiple platforms, leading to a lack of clarity and frequent delays.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
//               <li>Endless email threads and fragmented communication across various tools.</li>
//               <li>No single source of truth for creative statuses and deadlines.</li>
//               <li>Increased client inquiries and constant reworks for designers.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-orange-600">Solution: Transforming Ad Operations into a Smooth Experience</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/ad-agency-2.jpeg" // Placeholder image
//                 alt="New Campaign Management Portal"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We developed a custom **Campaign Management Portal** designed with empathy and an understanding of the agency&apos;s workflow. The portal provides transparency, organization, and accountability to all stakeholders, from designers to clients.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
//               <li>**Briefing Hub:** Smart forms that automate role assignments and collect all necessary information upfront.</li>
//               <li>**Creative Tracker:** A timeline-style progress bar for real-time status updates on every campaign.</li>
//               <li>**Centralized Feedback:** Version-controlled comment sections with visual annotation tools to streamline the revision process.</li>
//               <li>**Client Dashboard:** A read-only interface for clients to check statuses and access files, reducing email traffic by 70%.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-orange-600">Tools Used</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <strong>Design:</strong> Figma, Webflow
//               </div>
//               <div>
//                 <strong>Development:</strong> React, Firebase
//               </div>
//               <div>
//                 <strong>Integrations:</strong> Slack, Trello
//               </div>
//             </div>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-orange-600">Result: A Workflow Worth Celebrating</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/ad-agency-3.jpeg" // Placeholder image
//                 alt="Operational Efficiency"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-orange-500">
//               <li>Campaign delivery delays were reduced by **47%**.</li>
//               <li>Client email correspondence decreased by **70%**.</li>
//               <li>Creative revisions went down by **38%**.</li>
//               <li>Internal teams reported a **25% rise in satisfaction**, with a transition to proactive management.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


// src/components/AdAgencyCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'Endless email threads and fragmented communication across various tools.',
  'No single source of truth for creative statuses and deadlines.',
  'Increased client inquiries and constant reworks for designers.',
];

const solutionDetails = [
  {
    title: 'Briefing Hub',
    description: 'Smart forms that automate role assignments and collect all necessary information upfront.',
  },
  {
    title: 'Creative Tracker',
    description: 'A timeline-style progress bar for real-time status updates on every campaign.',
  },
  {
    title: 'Centralized Feedback',
    description: 'Version-controlled comment sections with visual annotation tools to streamline the revision process.',
  },
  {
    title: 'Client Dashboard',
    description: 'A read-only interface for clients to check statuses and access files, reducing email traffic by 70%.',
  },
];

const techStack = [
  { tech: 'Design', name: 'Figma, Webflow' },
  { tech: 'Development', name: 'React, Firebase' },
  { tech: 'Integrations', name: 'Slack, Trello' },
];

const results = [
  { value: '47%', label: 'Reduction in Delivery Delays' },
  { value: '70%', label: 'Decrease in Client Emails' },
  { value: '38%', label: 'Fewer Creative Revisions' },
  { value: '25%', label: 'Rise in Team Satisfaction' },
];

export default function AdAgencyCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Ad Agency Workflow</title>
        <meta name="description" content="A case study on developing a custom campaign management portal to streamline ad agency workflows, improve communication, and reduce delays." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Ad Agency Workflow
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Simplifying Complexity in an Advertising World
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              A digital advertising agency faced significant workflow challenges due to rapid expansion and managing numerous client campaigns across multiple platforms, leading to frequent delays.
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
                  We developed a custom **Campaign Management Portal** designed to provide transparency, organization, and accountability to all stakeholders, from designers to clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
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
                  src="/ad-agency-solution.png" // Placeholder image
                  alt="New Campaign Management Portal"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>Tools Used</h2>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {results.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                The new portal helped transform the client's ad operations into a more streamlined and efficient process.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}