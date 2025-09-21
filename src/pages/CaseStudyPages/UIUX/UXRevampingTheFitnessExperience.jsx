// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function FitnessAppCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Revamping the Fitness Experience via UI/UX</title>
//         <meta name="description" content="A case study on how a comprehensive UI/UX redesign transformed a fitness app, boosting user retention, engagement, and subscription rates." />
//         <meta property="og:title" content="Fitness App UI/UX Redesign - Case Study" />
//         <meta property="og:image" content="/fitness-app-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Revamping the Fitness Experience via UI/UX
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/fitness-app-1.jpeg" // Placeholder image
//               alt="Fitness App UI/UX Redesign"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">The Challenge: Transforming Confusion into Clarity for Users</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               A popular fitness app faced a significant decline in user retention. Despite high-quality content, its unintuitive UI/UX made essential features difficult to access, leading to user frustration and lost revenue.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-fuchsia-500">
//               <li>Workouts were hard to start, requiring multiple clicks.</li>
//               <li>Vital features like nutritional and statistics tracking were buried in convoluted menus.</li>
//               <li>Subscription upgrade prompts were hidden, hindering revenue growth.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Solution: Designing with Human Motivation at the Forefront</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/fitness-app-2.jpeg" // Placeholder image
//                 alt="New Dashboard and Features"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We took a human-centered approach, focusing on psychology and motivation. Through comprehensive user research, we identified key friction points and redesigned the app around three core principles: **Clarity**, **Motivation**, and **Conversion**.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-fuchsia-500">
//               <li>**Streamlined Dashboard:** Provided immediate access to workouts, meal tracking, and progress stats to minimize cognitive load.</li>
//               <li>**Gamification Elements:** Integrated reward systems, streak counters, and visually highlighted milestones to make the fitness journey engaging and rewarding.</li>
//               <li>**Optimized Subscription Prompts:** Restructured subscription placements to be natural and unobtrusive, encouraging upgrades.</li>
//               <li>**Key Implementations:** Introduced a tailored onboarding process, a flexible workout interface, and a dark mode, all based on user feedback.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Tools Utilized</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <strong>Design & Prototyping:</strong> Figma, Adobe XD
//               </div>
//               <div>
//                 <strong>User Testing & Research:</strong> Maze
//               </div>
//               <div>
//                 <strong>Collaboration & Documentation:</strong> Notion, Zeplin
//               </div>
//             </div>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Result: A UI That Inspires Action and Positive Change</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/fitness-app-3.jpeg" // Placeholder image
//                 alt="User Feedback and Statistics"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-fuchsia-500">
//               <li>User retention **surged by 38%** within the first 30 days.</li>
//               <li>In-app subscriptions **increased by 41%**.</li>
//               <li>The average time to initiate a workout **plummeted by 60%**.</li>
//               <li>User feedback highlighted the new “ease of use” and “smooth flow” of the app.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


// src/components/FitnessAppCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'Workouts were hard to start, requiring multiple clicks.',
  'Vital features like nutritional and statistics tracking were buried in convoluted menus.',
  'Subscription upgrade prompts were hidden, hindering revenue growth.',
];

const solutionDetails = [
  {
    title: 'Streamlined Dashboard',
    description: 'Provided immediate access to workouts, meal tracking, and progress stats to minimize cognitive load.',
  },
  {
    title: 'Gamification Elements',
    description: 'Integrated reward systems, streak counters, and visually highlighted milestones to make the fitness journey engaging and rewarding.',
  },
  {
    title: 'Optimized Subscription Prompts',
    description: 'Restructured subscription placements to be natural and unobtrusive, encouraging upgrades.',
  },
  {
    title: 'Key Implementations',
    description: 'Introduced a tailored onboarding process, a flexible workout interface, and a dark mode, all based on user feedback.',
  },
];

const toolsUsed = [
  { tool: 'Design & Prototyping', name: 'Figma, Adobe XD' },
  { tool: 'User Testing & Research', name: 'Maze' },
  { tool: 'Collaboration & Documentation', name: 'Notion, Zeplin' },
];

const results = [
  { value: '38%', label: 'Surge in User Retention' },
  { value: '41%', label: 'Increase in In-App Subscriptions' },
  { value: '60%', label: 'Faster Workout Initiation' },
];

export default function FitnessAppCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Fitness App UI/UX</title>
        <meta name="description" content="A case study on how a comprehensive UI/UX redesign transformed a fitness app, boosting user retention, engagement, and subscription rates." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Fitness App UI/UX
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Revamping the Fitness Experience
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              A popular fitness app faced a significant decline in user retention due to an unintuitive UI/UX that made essential features difficult to access, leading to user frustration and lost revenue.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We took a human-centered approach, focusing on psychology and motivation. Through comprehensive user research, we identified key friction points and redesigned the app around three core principles: **Clarity**, **Motivation**, and **Conversion**.
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
                  src="/CaseStudyImages/uiuxfitness.png" // Placeholder image
                  alt="New Dashboard and Features"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>Tools Utilized</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {toolsUsed.map((item, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-xl font-bold" style={{ color: '#ff5010' }}>{item.tool}</p>
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
                The strategic UI/UX redesign successfully transformed the app, demonstrating that a focus on human motivation can lead to significant improvements in key business metrics.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}