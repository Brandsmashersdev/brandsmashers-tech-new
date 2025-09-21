// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function CoachingPlatformCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | Smart Web Platform for Coaching Institutes</title>
//         <meta name="description" content="A case study on developing a smart web platform to streamline operations for coaching institutes and improve student-teacher communication." />
//         <meta property="og:title" content="Smart Web Platform for Coaching - Case Study" />
//         <meta property="og:image" content="/coaching-platform-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Transforming Coaching Institutes with a Smart Web Platform
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/coaching-1.jpeg" // Placeholder image
//               alt="Coaching Platform Dashboard"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-sky-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               The client’s coaching institute was struggling to keep up with rapid growth due to manual processes. The goal was to build a modern web platform to help teachers, students, and management operate more efficiently.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
//               <li>Manual scheduling, attendance, and progress tracking.</li>
//               <li>Lack of a centralized system for study materials and practice tests.</li>
//               <li>Administrative overload for teachers.</li>
//               <li>Difficulty in providing personalized student support.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-sky-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/coaching-2.jpeg" // Placeholder image
//                 alt="Student Portal"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We developed a comprehensive web platform to bridge the communication gap between teachers, students, and administrators. Our solution provides a **teacher-first approach** with automated administrative tools and a dedicated student portal.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
//               <li>**Teacher Portal:** Features automated class scheduling, attendance tracking, and content uploads. Includes an auto-grading system for quizzes and progress dashboards.</li>
//               <li>**Student Portal:** Allows 24/7 access to study materials, practice quizzes, and mock tests with real-time scoring. Students can also message teachers directly.</li>
//               <li>**Admin Dashboard:** A centralized control panel for managing batches, fees, and monitoring overall performance of both students and teachers.</li>
//               <li>**Cross-Device Compatibility:** The platform works seamlessly on laptops and mobile phones.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-sky-600">Technology Stack</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <strong>Frontend:</strong> React.js or Vue.js, Tailwind CSS/Bootstrap
//               </div>
//               <div>
//                 <strong>Backend:</strong> Node.js + Express or Django, JWT
//               </div>
//               <div>
//                 <strong>Database:</strong> MongoDB or PostgreSQL
//               </div>
//               <div>
//                 <strong>Storage:</strong> AWS S3 or Firebase
//               </div>
//               <div>
//                 <strong>Communication:</strong> Socket.io, Twilio/SendGrid
//               </div>
//               <div>
//                 <strong>Deployment:</strong> Docker, GitHub Actions, Vercel or AWS
//               </div>
//             </div>
//           </div>
          
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-sky-600">The Results</h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
//               <li>**Teacher Efficiency:** Time spent on administrative tasks was reduced by **70%**.</li>
//               <li>**Stronger Student Engagement:** A **90% increase** in the number of students completing assignments and mock tests.</li>
//               <li>**Improved Performance Tracking:** Coaches could identify weak areas faster and provide targeted support.</li>
//               <li>**Positive Feedback:** Teachers praised the system&apos;s simplicity, while students appreciated having all resources in one place.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// src/components/CoachingPlatformCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeIssues = [
  'Manual scheduling, attendance, and progress tracking.',
  'Lack of a centralized system for study materials and practice tests.',
  'Administrative overload for teachers.',
  'Difficulty in providing personalized student support.',
];

const solutionPortals = [
  {
    title: 'Teacher Portal',
    description: 'Features automated class scheduling, attendance tracking, and content uploads. Includes an auto-grading system for quizzes and progress dashboards.',
  },
  {
    title: 'Student Portal',
    description: 'Allows 24/7 access to study materials, practice quizzes, and mock tests with real-time scoring. Students can also message teachers directly.',
  },
  {
    title: 'Admin Dashboard',
    description: 'A centralized control panel for managing batches, fees, and monitoring overall performance of both students and teachers.',
  },
];

const techStack = [
  { tech: 'Frontend', name: 'React.js or Vue.js, Tailwind CSS/Bootstrap' },
  { tech: 'Backend', name: 'Node.js + Express or Django, JWT' },
  { tech: 'Database', name: 'MongoDB or PostgreSQL' },
  { tech: 'Storage', name: 'AWS S3 or Firebase' },
  { tech: 'Communication', name: 'Socket.io, Twilio/SendGrid' },
  { tech: 'Deployment', name: 'Docker, GitHub Actions, Vercel or AWS' },
];

const results = [
  { value: '70%', label: 'Reduction in Admin Time' },
  { value: '90%', label: 'Increase in Student Engagement' },
  { value: 'Faster', label: 'Performance Tracking' },
  { value: 'Positive', label: 'User Feedback' },
];

export default function CoachingPlatformCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Coaching Platform</title>
        <meta name="description" content="A case study on developing a smart web platform to streamline operations for coaching institutes." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Coaching Institute Platform
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Transforming Education with a Smart Web Platform
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              The client’s coaching institute was struggling with rapid growth due to manual, inefficient processes that hindered student support and burdened teachers.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Key Issues</h3>
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
                  We developed a comprehensive web platform with a **teacher-first approach** to automate administrative tasks and enhance communication between all users.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
                  {solutionPortals.map((portal, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{portal.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{portal.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/coaching-solution.png" // Placeholder image
                  alt="Coaching Platform Dashboard"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {results.map((result, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{result.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{result.label}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}