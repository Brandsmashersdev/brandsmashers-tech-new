// // src/components/HRMSCaseStudy.jsx

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';

// const keyFeatures = [
//   {
//     title: 'Admin Panel & Employee Panel',
//     description: 'Provides a clear separation of access, with a comprehensive admin dashboard and a secure employee panel for personal information and documents.',
//   },
//   {
//     title: 'Centralized HR Manuals',
//     description: 'A dedicated section for HR manuals ensures all employees and administrators have easy, consistent access to the latest company policies.',
//   },
//   {
//     title: 'Employee Management',
//     description: 'The Admin Panel allows for easy onboarding of new employees, simplifying a traditionally cumbersome process.',
//   },
//   {
//     title: 'Data Access and Performance Tracking',
//     description: 'Admins can access, download, and track employee performance data, providing valuable insights for evaluations and strategic planning.',
//   },
// ];

// const impactResults = [
//   { value: 'Enhanced', label: 'Efficiency' },
//   { value: 'Improved', label: 'Data Accuracy' },
//   { value: 'Boosted', label: 'Departmental Collaboration' },
// ];

// export default function HRMSCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | HRMS by Brandsmashers Tech</title>
//         <meta name="description" content="A case study on a comprehensive HRMS solution to streamline HR activities and centralize data." />
//       </Head>

//       <div className="bg-white font-sans text-gray-800">
//         <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
//           <div className="container mx-auto px-6">
//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
//               Case Study: HRMS by Brandsmashers Tech
//             </h1>
//             <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
//               Revolutionizing HR Data Management
//             </p>
//           </div>
//         </header>

//         <main className="container mx-auto px-6 py-16">
//           <section className="mb-20 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
//             <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
//               Many organizations struggle with disparate systems, manual processes, and fragmented data, leading to inefficiencies and a lack of oversight. Brandsmashers Tech recognized this need for a unified solution.
//             </p>
//             <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
//               <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Issues</h3>
//               <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
//                 <li>Disparate systems and manual HR processes.</li>
//                 <li>Fragmented employee data across departments.</li>
//                 <li>Lack of a single source of truth for policies and performance.</li>
//               </ul>
//             </div>
//           </section>

//           <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

//           <section className="mb-20">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>The Solution: A Comprehensive HRMS</h2>
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
//                   We developed a robust Human Resource Management System (HRMS) designed to be the central hub for all HR activities. The solution features a dual-panel architecture with a powerful Admin Panel and an intuitive Employee Panel.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
//                   {keyFeatures.map((feature, index) => (
//                     <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
//                       <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{feature.title}</h4>
//                       <p className="text-sm" style={{ color: '#222222' }}>{feature.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="mt-8 md:mt-0">
//                 {/* <Image
//                   src="/hrms-solution.png" // Placeholder image
//                   alt="HRMS Dashboard"
//                   width={600}
//                   height={400}
//                   className="rounded-3xl shadow-2xl animate-fade-in"
//                 /> */}
//               </div>
//             </div>
//           </section>

//           <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

//           <section className="mb-20 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Results</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
//               {impactResults.map((result, index) => (
//                 <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
//                   <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
//                   <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
//               <p className="italic text-lg" style={{ color: '#222222' }}>
//                 The HRMS transformed how organizations manage their most valuable asset—their people—enabling them to operate more efficiently, intelligently, and collaboratively.
//               </p>
//             </div>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// }



// src/components/HRMSCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const keyFeatures = [
  {
    title: 'Admin Panel & Employee Panel',
    description: 'Provides a clear separation of access, with a comprehensive admin dashboard and a secure employee panel for personal information and documents.',
  },
  {
    title: 'Centralized HR Manuals',
    description: 'A dedicated section for HR manuals ensures all employees and administrators have easy, consistent access to the latest company policies.',
  },
  {
    title: 'Employee Management',
    description: 'The Admin Panel allows for easy onboarding of new employees, simplifying a traditionally cumbersome process.',
  },
  {
    title: 'Data Access and Performance Tracking',
    description: 'Admins can access, download, and track employee performance data, providing valuable insights for evaluations and strategic planning.',
  },
];

const impactResults = [
  { value: 'Enhanced', label: 'Efficiency' },
  { value: 'Improved', label: 'Data Accuracy' },
  { value: 'Boosted', label: 'Departmental Collaboration' },
];

export default function HRMSCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | HRMS by Brandsmashers Tech</title>
        <meta name="description" content="A case study on a comprehensive HRMS solution to streamline HR activities and centralize data." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: HRMS by Brandsmashers Tech
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Revolutionizing HR Data Management
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              Many organizations struggle with disparate systems, manual processes, and fragmented data, leading to inefficiencies and a lack of oversight. Brandsmashers Tech recognized this need for a unified solution.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Issues</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                <li>Disparate systems and manual HR processes.</li>
                <li>Fragmented employee data across departments.</li>
                <li>Lack of a single source of truth for policies and performance.</li>
              </ul>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>The Solution: A Comprehensive HRMS</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We developed a robust Human Resource Management System (HRMS) designed to be the central hub for all HR activities. The solution features a dual-panel architecture with a powerful Admin Panel and an intuitive Employee Panel.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
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
                  src="/CaseStudyImages/hrms.png"
                  alt="HRMS Dashboard"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {impactResults.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="italic text-lg" style={{ color: '#222222' }}>
                The HRMS transformed how organizations manage their most valuable asset—their people—enabling them to operate more efficiently, intelligently, and collaboratively.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}