// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '@/components/navbar/navbar';

// export default function ImageLicensingCaseStudy() {
//   return (
//     <>
//       <Head>
//         <title>Case Study | User-Generated Image Licensing Platform</title>
//         <meta name="description" content="A case study on building a platform for users to create, license, and monetize their own images." />
//         <meta property="og:title" content="Image Licensing Platform - Case Study" />
//         <meta property="og:image" content="/licensing-banner.jpg" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <div className="min-h-screen bg-white text-gray-800">
//         {/* <Navbar /> */}

//         <section className="py-16 px-6 md:px-20 bg-white">
//           <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
//             Case Study: Building a User-Generated Image Licensing Platform
//           </h1>

//           <div className="flex justify-center mb-12">
//             <Image
//               src="/licensing-1.jpeg" // Placeholder image
//               alt="Image Licensing Platform"
//               width={600}
//               height={350}
//               className="rounded-xl shadow-md w-full max-w-md object-cover"
//             />
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Challenge</h2>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
//               The client had a unique vision of a groundbreaking platform that empowers users to craft their own images by utilizing a diverse library of pre-uploaded images. This platform is designed not only for creative expression but also for monetization, allowing users to earn a commission each time their design is downloaded by other users.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>**Library Management:** A robust system for uploading and managing an extensive library of base images.</li>
//               <li>**In-App Image Editor:** An intuitive and powerful image editing tool for users.</li>
//               <li>**Marketplace Integration:** A dynamic marketplace for users to showcase and sell their edited images.</li>
//               <li>**Secure Payment and Revenue-Sharing Model:** A transparent payment system to compensate creators.</li>
//               <li>**Cross-Platform Accessibility:** Deployment on both web and mobile applications.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Solution</h2>
//             <div className="flex justify-center mb-12">
//               <Image
//                 src="/licensing-2.jpeg" // Placeholder image
//                 alt="Solution Overview"
//                 width={600}
//                 height={350}
//                 className="rounded-xl shadow-md w-full max-w-md object-cover"
//               />
//             </div>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
//               We designed a comprehensive, end-to-end solution that delivers a smooth experience for admins, users, and creators alike.
//             </p>
//             <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>**Phase 1: Admin Portal:** Developed an **Image Upload & Management Portal** with high-resolution uploads, smart categorization, and a tagging system for fast, accurate search.</li>
//               <li>**Phase 2: User Editor:** Introduced a **Web & App-Based Image Editor** with a simple drag-and-drop interface, allowing users to layer images, apply filters, and add text.</li>
//               <li>**Phase 3: Marketplace & Monetization:** Established a **Marketplace** where creators could showcase their work. Implemented a revenue-sharing model (30% creator, 70% platform) and an integrated wallet system.</li>
//               <li>**Phase 4: Security:** Implemented smart **watermarking techniques** and download protection mechanisms to secure creative work.</li>
//             </ul>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-600">The Results</h2>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-purple-500">
//               <li>Over 2,000 images were created and uploaded in the first month.</li>
//               <li>The app generated more than ₹1 lakh in downloads.</li>
//               <li>Offers a fully functional experience with a friendly interface and real-time tracking.</li>
//               <li>Digital assets are protected with a backend watermark and licensing controls.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


// src/components/ImageLicensingCaseStudy.jsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const challengeGoals = [
  'Library Management: A robust system for uploading and managing an extensive library of base images.',
  'In-App Image Editor: An intuitive and powerful image editing tool for users.',
  'Marketplace Integration: A dynamic marketplace for users to showcase and sell their edited images.',
  'Secure Payment and Revenue-Sharing Model: A transparent payment system to compensate creators.',
  'Cross-Platform Accessibility: Deployment on both web and mobile applications.',
];

const solutionDetails = [
  {
    title: 'Phase 1: Admin Portal',
    description: 'Developed an **Image Upload & Management Portal** with high-resolution uploads, smart categorization, and a tagging system for fast, accurate search.',
  },
  {
    title: 'Phase 2: User Editor',
    description: 'Introduced a **Web & App-Based Image Editor** with a simple drag-and-drop interface, allowing users to layer images, apply filters, and add text.',
  },
  {
    title: 'Phase 3: Marketplace & Monetization',
    description: 'Established a **Marketplace** where creators could showcase their work. Implemented a revenue-sharing model (30% creator, 70% platform) and an integrated wallet system.',
  },
  {
    title: 'Phase 4: Security',
    description: 'Implemented smart **watermarking techniques** and download protection mechanisms to secure creative work.',
  },
];

const results = [
  { value: '2,000+', label: 'Images Created in 1st Month' },
  { value: '₹1L+', label: 'Generated in Downloads' },
  { value: 'Protected', label: 'Digital Assets' },
  { value: 'Fully Functional', label: 'Platform with Real-Time Tracking' },
];

export default function ImageLicensingCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Image Licensing Platform</title>
        <meta name="description" content="A case study on building a platform for users to create, license, and monetize their own images." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Image Licensing Platform
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Building a User-Generated Image Licensing Platform
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              The client had a unique vision of a groundbreaking platform that empowers users to craft their own images by utilizing a diverse library of pre-uploaded images.
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Core Goals</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                {challengeGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
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
                  We designed a comprehensive, end-to-end solution that delivers a smooth experience for admins, users, and creators alike.
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
                  src="/licensing-solution.png" // Placeholder image
                  alt="Solution Overview"
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
                The new platform successfully empowered creators and secured a seamless, monetized experience for all users.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}