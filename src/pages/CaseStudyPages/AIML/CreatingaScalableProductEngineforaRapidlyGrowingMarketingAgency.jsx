// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function MarketingAgencyCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Creating a Scalable Product Engine for a Rapidly Growing Marketing Agency</title>
//         <meta name="description" content="A case study on developing a custom, scalable product to streamline operations, improve internal communication, and enhance client transparency for a growing marketing agency." />
//         <meta property="og:title" content="Marketing Agency - Scalable Product Engine" />
//         <meta property="og:image" content="/marketing-agency-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Creating a Scalable Product Engine for a Rapidly Growing Marketing Agency
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/marketing-agency-1.jpeg" // Placeholder image
//               alt="Marketing Agency Workflow"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-600">Objective: Excessive Campaigns, Insufficient Control</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               A top-performing marketing agency was struggling with operational chaos due to rapid expansion. Dispersed client briefs, lost timelines, and a lack of clear ownership led to delays and strained client relationships. They needed a custom solution, not just another off-the-shelf tool.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-amber-500">
//               <li>Client briefs and creative timelines were disorganized.</li>
//               <li>Unclear team availability and task responsibilities.</li>
//               <li>Last-minute reporting efforts.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-600">Solution: Transforming Disorder into a Customized Product</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/marketing-agency-2.jpeg" // Placeholder image
//                 alt="New Product Engine"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We started by understanding the agency&#39;s culture and workflows. We then designed and developed a bespoke web application named **&quot;Pulse&quot;**—a centralized campaign management and operations platform tailored to their unique needs.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-amber-500">
//               <li>**Smart Brief Generator:** A dynamic form for different project types that automatically assigns tasks and deadlines.</li>
//               <li>**Creative Calendar View:** A unified visual calendar that consolidates all campaign schedules and team availability.</li>
//               <li>**Task Ownership Tracker:** Every deliverable is clearly assigned with comment threads and deadline reminders.</li>
//               <li>**Live Campaign Status Board:** A read-only dashboard for clients to view real-time campaign status, reducing client calls.</li>
//               <li>**Performance Feedback Loop:** Automatically pulls results from ad platforms and links them back to the original briefs.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-600">Technology Stack Used</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <strong>Frontend:</strong> ReactJS
//               </div>
//               <div>
//                 <strong>Backend:</strong> Node.js
//               </div>
//               <div>
//                 <strong>Database:</strong> MongoDB
//               </div>
//               <div>
//                 <strong>Design:</strong> Figma
//               </div>
//               <div>
//                 <strong>Authentication:</strong> Firebase Auth
//               </div>
//               <div>
//                 <strong>Integrations:</strong> Notion API, Google Ads API
//               </div>
//             </div>
//           </div>
          
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-600">Outcome: A Product That Enabled the Agency to Operate Like a Product Company</h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-amber-500">
//               <li>**Task duplication decreased by 60%** due to clearer brief ownership.</li>
//               <li>**Internal communication improved** with a 40% reduction in &quot;status check&quot; messages.</li>
//               <li>**Client satisfaction increased**, driven by greater project transparency.</li>
//               <li>The time to plan, execute, and report on a campaign **fell by 33%**.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


// src/components/MarketingAgencyCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const solutionFeatures = [
  {
    title: 'Smart Brief Generator',
    description: 'A dynamic form that automatically assigns tasks and deadlines for different project types.',
  },
  {
    title: 'Creative Calendar View',
    description: 'A unified visual calendar that consolidates all campaign schedules and team availability.',
  },
  {
    title: 'Task Ownership Tracker',
    description: 'Every deliverable is clearly assigned with comment threads and deadline reminders.',
  },
  {
    title: 'Live Campaign Status Board',
    description: 'A read-only dashboard for clients to view real-time campaign status, reducing client calls.',
  },
  {
    title: 'Performance Feedback Loop',
    description: 'Automatically pulls results from ad platforms and links them back to the original briefs.',
  },
];

const techStack = [
  { tech: 'Frontend', name: 'ReactJS' },
  { tech: 'Backend', name: 'Node.js' },
  { tech: 'Database', name: 'MongoDB' },
  { tech: 'Design', name: 'Figma' },
  { tech: 'Authentication', name: 'Firebase Auth' },
  { tech: 'Integrations', name: 'Notion API, Google Ads API' },
];

const outcome = [
  { value: '60%', label: 'Reduction in Task Duplication' },
  { value: '40%', label: 'Reduction in "Status Check" Messages' },
  { value: '33%', label: 'Faster Campaign Cycle' },
];

export default function MarketingAgencyCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Marketing Agency</title>
        <meta name="description" content="A case study on creating a scalable product for a rapidly growing marketing agency." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Marketing Agency
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Creating a Scalable Product Engine
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Objective</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              A top-performing marketing agency was struggling with operational chaos due to rapid expansion. They needed a custom solution, not just another off-the-shelf tool.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Issues</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                <li>Disorganized client briefs and creative timelines.</li>
                <li>Unclear team availability and task responsibilities.</li>
                <li>Last-minute reporting efforts.</li>
              </ul>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>The Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We designed and developed a bespoke web application named **"Pulse"**—a centralized campaign management and operations platform tailored to their unique needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {solutionFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{feature.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/marketing-agency-solution.png" // Placeholder image
                  alt="New Product Engine"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>Technology Stack</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Outcome</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {outcome.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                The new product enabled the agency to operate like a true product company, enhancing efficiency and client satisfaction.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}