// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function EntertainmentPlatformCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study: Enhancing Entertainment Platforms for Scalable Engagement</title>
//         <meta name="description" content="A case study on how we rebuilt a digital entertainment platform to boost user engagement, creator tools, and monetization." />
//         <meta property="og:title" content="Entertainment Platform - Case Study" />
//         <meta property="og:image" content="/entertainment-platform-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Enhancing Entertainment Platforms for Scalable Engagement
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/entertainment-1.jpeg" // Placeholder image
//               alt="Entertainment Platform Reimagined"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-rose-600">Objective: Addressing Growth Beyond Technical Capacity</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               Our client&apos;s entertainment platform was gaining audience traction, but its outdated technical infrastructure was a major bottleneck. Issues like slow content uploads, limited user customization, and low retention rates were hindering their growth.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
//               <li>Lengthy content upload times.</li>
//               <li>No user customization options.</li>
//               <li>Limited performance insights for creators.</li>
//               <li>A high rate of users not returning.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-rose-600">Solution: Building a Robust User-Centric Experience</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/entertainment-2.jpeg" // Placeholder image
//                 alt="AI-Driven Content Feed"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We rebuilt the platform with a user-first approach. By conducting comprehensive user research, we identified three core personas—the fan, the creator, and the marketer—and developed key features to address the needs of each group.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
//               <li>**AI-Driven Content Feed:** A smart home feed that adapts to user preferences.</li>
//               <li>**Creator Analytics Dashboard:** Provides creators with instant access to critical metrics like views, shares, and watch time.</li>
//               <li>**Livestream Center:** A streamlined solution for event broadcasting with real-time chat and ticketing integrations.</li>
//               <li>**Gamified Engagement System:** A reward system that gives fans badges and exclusive content for their interactions.</li>
//               <li>**Brand Sponsorship Module:** Offers marketers tools to initiate sponsorships and analyze campaign performance.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-rose-600">Tech Stack</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <strong>Front-end:</strong> React Native, React.js
//               </div>
//               <div>
//                 <strong>Back-end:</strong> Node.js
//               </div>
//               <div>
//                 <strong>Database:</strong> MongoDB
//               </div>
//               <div>
//                 <strong>Infrastructure:</strong> AWS CloudFront
//               </div>
//               <div>
//                 <strong>Analytics:</strong> Mixpanel, Firebase
//               </div>
//               <div>
//                 <strong>Payments:</strong> Stripe
//               </div>
//             </div>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-rose-600">Results: Transitioning from Platform to Comprehensive Entertainment Ecosystem</h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-rose-500">
//               <li>User engagement **increased by 52%**.</li>
//               <li>Content creators saw a **40% boost** in average viewership.</li>
//               <li>Fan retention improved by **38%**.</li>
//               <li>Digital sponsorship revenue **escalated by 60%** in the first quarter.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }



// src/components/EntertainmentPlatformCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'Lengthy content upload times.',
  'No user customization options.',
  'Limited performance insights for creators.',
  'A high rate of users not returning.',
];

const solutionDetails = [
  {
    title: 'AI-Driven Content Feed',
    description: 'A smart home feed that adapts to user preferences.',
  },
  {
    title: 'Creator Analytics Dashboard',
    description: 'Provides creators with instant access to critical metrics like views, shares, and watch time.',
  },
  {
    title: 'Livestream Center',
    description: 'A streamlined solution for event broadcasting with real-time chat and ticketing integrations.',
  },
  {
    title: 'Gamified Engagement System',
    description: 'A reward system that gives fans badges and exclusive content for their interactions.',
  },
  {
    title: 'Brand Sponsorship Module',
    description: 'Offers marketers tools to initiate sponsorships and analyze campaign performance.',
  },
];

const techStack = [
  { tech: 'Front-end', name: 'React Native, React.js' },
  { tech: 'Back-end', name: 'Node.js' },
  { tech: 'Database', name: 'MongoDB' },
  { tech: 'Infrastructure', name: 'AWS CloudFront' },
  { tech: 'Analytics', name: 'Mixpanel, Firebase' },
  { tech: 'Payments', name: 'Stripe' },
];

const results = [
  { value: '52%', label: 'Increase in User Engagement' },
  { value: '40%', label: 'Boost in Average Viewership' },
  { value: '38%', label: 'Improvement in Fan Retention' },
  { value: '60%', label: 'Escalation in Sponsorship Revenue' },
];

export default function EntertainmentPlatformCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Entertainment Platform</title>
        <meta name="description" content="A case study on how we rebuilt a digital entertainment platform to boost user engagement, creator tools, and monetization." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Entertainment Platform
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Enhancing Engagement with a Scalable Platform
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Objective</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              Our client&apos;s entertainment platform was gaining traction, but its outdated technical infrastructure was a major bottleneck, hindering user growth and retention.
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
                  We rebuilt the platform with a user-first approach. By conducting comprehensive user research, we developed key features to address the needs of each group—fans, creators, and marketers—to build a robust, user-centric experience.
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
                  src="/CaseStudyImages/uiuxentertainment.png" // Placeholder image
                  alt="AI-Driven Content Feed"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>Tech Stack</h2>
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
                The strategic changes successfully transitioned the client from a simple platform to a comprehensive entertainment ecosystem, boosting user engagement and monetization.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}