// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function IdeaXCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | How We Brought IdeaX to Life - From Vision to Product Launch</title>
//         <meta name="description" content="A case study on developing a web platform for small business owners, from initial concept to a successful MVP launch within a 6-month timeline." />
//         <meta property="og:title" content="IdeaX - From Vision to Product Launch" />
//         <meta property="og:image" content="/ideax-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: How We Brought IdeaX to Life - From Vision to Product Launch
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/ideax-1.jpeg" // Placeholder image
//               alt="IdeaX Platform Overview"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               IdeaX aimed to build a transformative platform for small business owners, but faced significant roadblocks, including a fuzzy roadmap, an overwhelming wishlist of features, and a tight 6-month timeline.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>A fuzzy product roadmap that lacked clarity.</li>
//               <li>An overwhelming wishlist of features.</li>
//               <li>Absence of a clear Minimum Viable Product (MVP).</li>
//               <li>Pressure of a tight 6-month timeline.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/ideax-2.jpeg" // Placeholder image
//                 alt="UX/UI Design Mockups"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We partnered with IdeaX to bring their vision to life through a structured, four-step process that focused on clarity, user-centric design, and agile development.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>**Step 1: Deep Discovery:** Conducted interviews to understand user pain points, define personas, and identify the MVP&apos;s core pillars: task management, expense tracking, and performance analytics.</li>
//               <li>**Step 2: Designing the Experience:** Created low-fidelity wireframes and clickable prototypes, followed by a professional, modern visual design with weekly feedback loops.</li>
//               <li>**Step 3: Agile Development:** Built a responsive frontend with React and a scalable backend with modular services. We worked in two-week sprints, demoing progress and adapting to feedback.</li>
//               <li>**Step 4: Launch + Learn + Iterate:** Launched the MVP on time, gathered user feedback, monitored adoption, and planned for future feature expansion.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Results</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/ideax-3.jpeg" // Placeholder image
//                 alt="Product Analytics"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>The product was launched on time and within budget.</li>
//               <li>Achieved over **2,000 signups** in the first two months.</li>
//               <li>Secured **$500k in new investor funding** shortly after launch.</li>
//               <li>Users praised the platform for its simplicity and value.</li>
//               <li>Built a scalable architecture ready for Phase 2 feature expansion.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }



// src/components/IdeaXCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'A fuzzy product roadmap that lacked clarity.',
  'An overwhelming wishlist of features.',
  'Absence of a clear Minimum Viable Product (MVP).',
  'Pressure of a tight 6-month timeline.',
];

const solutionDetails = [
  {
    title: 'Step 1: Deep Discovery',
    description: 'Conducted interviews to understand user pain points, define personas, and identify the MVP’s core pillars: task management, expense tracking, and performance analytics.',
  },
  {
    title: 'Step 2: Designing the Experience',
    description: 'Created low-fidelity wireframes and clickable prototypes, followed by a professional, modern visual design with weekly feedback loops.',
  },
  {
    title: 'Step 3: Agile Development',
    description: 'Built a responsive frontend with React and a scalable backend with modular services, working in two-week sprints.',
  },
  {
    title: 'Step 4: Launch + Learn + Iterate',
    description: 'Launched the MVP on time, gathered user feedback, and planned for future feature expansion.',
  },
];

const results = [
  { value: '2,000+', label: 'Signups in Two Months' },
  { value: '$500k', label: 'New Investor Funding' },
  { value: 'On-Time', label: 'Launch' },
  { value: 'Scalable', label: 'Architecture' },
];

export default function IdeaXCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | IdeaX</title>
        <meta name="description" content="A case study on developing a web platform for small business owners, from initial concept to a successful MVP launch within a 6-month timeline." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: IdeaX
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              From Vision to Product Launch
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              IdeaX aimed to build a transformative platform for small business owners but faced significant roadblocks, including a fuzzy roadmap, an overwhelming wishlist of features, and a tight 6-month timeline.
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
                  We partnered with IdeaX to bring their vision to life through a structured, four-step process that focused on clarity, user-centric design, and agile development.
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
                  src="/ideax-solution.png" // Placeholder image
                  alt="IdeaX Platform Overview"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
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
                The product was successfully launched on time and within budget, achieving impressive initial adoption and securing significant investor funding.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}