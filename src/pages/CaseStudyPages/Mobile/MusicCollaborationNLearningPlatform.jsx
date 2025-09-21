

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const collaborationFeatures = [
  {
    title: 'Real-Time Collaboration',
    description: 'Enables multiple users to edit and build projects simultaneously using WebRTC and Socket.IO for seamless interaction.',
  },
  {
    title: 'Built-in Communication',
    description: 'In-app messaging and threaded comments within each project foster clear communication among collaborators.',
  },
  {
    title: 'Secure Marketplace',
    description: 'A scalable marketplace for users to buy and sell beats or loops, with integrated Stripe API for secure payments.',
  },
  {
    title: 'Licensing & Ownership',
    description: 'A built-in licensing tracker using smart contracts on Ethereum assists in defining rights and royalties.',
  },
];

const learningFeatures = [
  {
    title: 'Structured Courses',
    description: 'Admins can upload organized courses with video chapters and allow for assignment uploads.',
  },
  {
    title: 'Interactive Tools',
    description: 'Utilities like chord recognition, a tempo trainer, and a metronome supported by the Web Audio API.',
  },
  {
    title: 'Progress Tracking',
    description: 'Users can monitor progress, set goals, track course completion, and earn digital certificates.',
  },
  {
    title: 'DRM-Protected Content',
    description: 'Premium content is safeguarded with DRM protection, AES encryption, and Auth0 for secure user access.',
  },
];

const stats = [
  { value: '2,500+', label: 'Learners Registered' },
  { value: '5,000+', label: 'Tracks Created' },
  { value: '72%', label: 'Course Completion Rate' },
  { value: '500+', label: 'Certificates Issued' },
  { value: '₹4.1L+', label: 'Earned from Beat Sales' },
];

export default function MusicAppCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Music Collaboration & Learning App</title>
        <meta name="description" content="A case study on a dual-platform app for music collaboration and education." />
      </Head>

      <div className="bg-white font-sans text-gray-800">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Case Study: Music Collaboration & Learning App
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ color: '#ffffff' }}>
              Where Music is Co-Created and Learned
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff7a47' }}>The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#222222' }}>
              &ldquo;What if we could combine the collaborative power of Google Docs with the creative freedom of SoundCloud?&rdquo;
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Project Goals</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                <li>Build a platform for real-time collaboration among musicians.</li>
                <li>Ensure low-latency audio uploads and version control.</li>
                <li>Incorporate a comprehensive music learning platform.</li>
                <li>Design a scalable system for both individual learners and institutions.</li>
              </ul>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#ff7a47' }}>Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We built a full-stack platform with two core applications: one for collaboration and one for music education. The solution is powered by a robust tech stack to handle the complexities of real-time audio and interactive learning.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {collaborationFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{feature.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/CaseStudyImages/music1mobile.png" // Placeholder image
                  alt="Music Collaboration App Interface"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
            
            <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
              <div className="mb-8 md:mb-0">
                <Image
                  src="/CaseStudyImages/music2mobile.png" // Placeholder image
                  alt="Music Learning App Interface"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Music Learning App</h3>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  A comprehensive cross-platform app for aspiring artists of all ages, with structured lessons, interactive tools, and progress tracking to foster a love for music.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {learningFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#ff7a47' }}>{feature.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="border-t my-12" style={{ borderColor: '#e5e7eb' }} />

          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#ff7a47' }}>The Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f5f5' }}>
                  <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{stat.value}</p>
                  <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl shadow-lg max-w-lg mx-auto transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ff7a47' }}>Summary</h3>
              <p className="italic" style={{ color: '#222222' }}>
                &ldquo;With This App, People Can Create Their Own Euphoria for Music.&rdquo;
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}