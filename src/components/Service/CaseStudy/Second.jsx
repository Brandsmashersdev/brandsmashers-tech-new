'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function MusicCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Music Collaboration & Learning App</title>
        <meta name="description" content="A robust dual-platform solution enabling real-time music collaboration and structured music education for all ages." />
        <meta property="og:title" content="Music Collaboration & Learning App - Case Study" />
        <meta property="og:image" content="/music-collab-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-800">
        
        <section className="py-16 px-6 md:px-20 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-center text-black tracking-tight">
            Case Study: Music Collaboration & Beat Sharing App and Music Learning App for Aspiring Artists
          </h1>

          {/* Hero Image */}
          <div className="flex justify-center mb-12">
  <Image
    src="/m1.jpeg"
    alt="Music Collaboration App Overview"
    width={600} // reduced width
    height={350} // reduced height
    className="rounded-xl shadow-md w-full max-w-md object-cover"
  />
</div>


          {/* The Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Challenge</h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
              The client envisioned a collaborative platform for producers, vocalists, and musicians — a fusion of SoundCloud and Google Docs — enabling users to upload beats, collaborate in real time, and also learn music from certified instructors.
            </p>

            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500">
              <li>Ensuring low-latency audio uploads and streaming</li>
              <li>Implementing version control for collaborative projects</li>
              <li>Enabling real-time messaging and collaboration invites</li>
              <li>Building educational modules for structured learning</li>
              <li>Facilitating interactive tools like quizzes and certification</li>
              <li>Designing for scalability across individuals and institutions</li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Solution</h2>

            <div className="flex justify-center mb-12">
  <Image
    src="/m2.jpeg"
    alt="Music Collaboration App Overview"
    width={600} // reduced width
    height={350} // reduced height
    className="rounded-xl shadow-md w-full max-w-md object-cover"
  />
</div>

            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
              We developed a full-stack, dual-platform application: a real-time music collaboration app and a music learning platform. Key technical solutions included:
            </p>

            <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500">
              <li><strong>Real-Time Collaboration:</strong> Upload and layer audio stems (beats, vocals, etc.) using WebRTC, Socket.IO, Firebase Realtime DB</li>
              <li><strong>Audio Processing:</strong> FFmpeg + AWS S3 for secure audio storage and handling</li>
              <li><strong>Chat & Comments:</strong> Threaded discussion using React Native chat libraries, Express.js, MongoDB</li>
              <li><strong>Beat Marketplace:</strong> Integrated Stripe, PostgreSQL, and Next.js for seamless P2P beat sales</li>
              <li><strong>Licensing Management:</strong> Ethereum smart contracts, REST APIs, and PDF.js for rights & royalty agreements</li>
              <li><strong>Learning App:</strong> Structured courses with video lessons, assignments, and admin tools using Firebase, AWS CloudFront</li>
              <li><strong>Interactive Tools:</strong> Chord recognition, metronome, tempo trainer using Web Audio API, Tone.js, React Native Canvas</li>
              <li><strong>Progress Tracking:</strong> Goal setting, quizzes, and certificates built with Node.js, Chart.js, MongoDB</li>
              <li><strong>DRM & Security:</strong> AWS MediaConvert, AES encryption, Auth0 for access control and DRM protection</li>
              <li><strong>UI/UX:</strong> Figma-designed child-friendly interface using Tailwind CSS & React Native Paper</li>
            </ul>
          </div>

          {/* The Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">The Results</h2>

           <div className="flex justify-center mb-12">
  <Image
    src="/m3.jpeg"
    alt="Music Collaboration App Overview"
    width={600} // reduced width
    height={350} // reduced height
    className="rounded-xl shadow-md w-full max-w-md object-cover"
  />
</div>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 marker:text-red-500">
              <li>Over 2,500 learners registered within 3 months</li>
              <li>More than 5,000 tracks created in just 90 days</li>
              <li>72% average course completion rate</li>
              <li>500+ certificates issued via auto-certification engine</li>
              <li>200+ video lessons live with zero downtime</li>
              <li>₹4.1L+ earned from peer-to-peer beat sales</li>
              <li>Live sessions enabled real-time co-creation for remote teams</li>
            </ul>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Summary</h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
              In a world where remote collaboration defines creativity, we built a robust ecosystem supporting real-time music creation and guided learning. The Collaboration App allows artists to upload stems, collaborate with peers, license their work transparently, and even monetize it. Meanwhile, the Learning App offers structured courses with interactive tools, secure premium content, and a rewarding learning journey for musicians of all ages. 
              Together, they empower users to learn, create, and grow—building their own euphoria for music.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
