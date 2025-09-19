'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function CoachingPlatformCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Smart Web Platform for Coaching Institutes</title>
        <meta name="description" content="A case study on developing a smart web platform to streamline operations for coaching institutes and improve student-teacher communication." />
        <meta property="og:title" content="Smart Web Platform for Coaching - Case Study" />
        <meta property="og:image" content="/coaching-platform-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        {/* <Navbar /> */}

        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Transforming Coaching Institutes with a Smart Web Platform
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/coaching-1.jpeg" // Placeholder image
              alt="Coaching Platform Dashboard"
              width={600}
              height={350}
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              The client’s coaching institute was struggling to keep up with rapid growth due to manual processes. The goal was to build a modern web platform to help teachers, students, and management operate more efficiently.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
              <li>Manual scheduling, attendance, and progress tracking.</li>
              <li>Lack of a centralized system for study materials and practice tests.</li>
              <li>Administrative overload for teachers.</li>
              <li>Difficulty in providing personalized student support.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Our Solution</h2>
            <div className="flex justify-center mb-12">
              <Image
                src="/coaching-2.jpeg" // Placeholder image
                alt="Student Portal"
                width={600}
                height={350}
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We developed a comprehensive web platform to bridge the communication gap between teachers, students, and administrators. Our solution provides a **teacher-first approach** with automated administrative tools and a dedicated student portal.
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
              <li>**Teacher Portal:** Features automated class scheduling, attendance tracking, and content uploads. Includes an auto-grading system for quizzes and progress dashboards.</li>
              <li>**Student Portal:** Allows 24/7 access to study materials, practice quizzes, and mock tests with real-time scoring. Students can also message teachers directly.</li>
              <li>**Admin Dashboard:** A centralized control panel for managing batches, fees, and monitoring overall performance of both students and teachers.</li>
              <li>**Cross-Device Compatibility:** The platform works seamlessly on laptops and mobile phones.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Technology Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Frontend:</strong> React.js or Vue.js, Tailwind CSS/Bootstrap
              </div>
              <div>
                <strong>Backend:</strong> Node.js + Express or Django, JWT
              </div>
              <div>
                <strong>Database:</strong> MongoDB or PostgreSQL
              </div>
              <div>
                <strong>Storage:</strong> AWS S3 or Firebase
              </div>
              <div>
                <strong>Communication:</strong> Socket.io, Twilio/SendGrid
              </div>
              <div>
                <strong>Deployment:</strong> Docker, GitHub Actions, Vercel or AWS
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">The Results</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-sky-500">
              <li>**Teacher Efficiency:** Time spent on administrative tasks was reduced by **70%**.</li>
              <li>**Stronger Student Engagement:** A **90% increase** in the number of students completing assignments and mock tests.</li>
              <li>**Improved Performance Tracking:** Coaches could identify weak areas faster and provide targeted support.</li>
              <li>**Positive Feedback:** Teachers praised the system&apos;s simplicity, while students appreciated having all resources in one place.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}