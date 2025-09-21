
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const features = [
  {
    title: 'Centralized Book Repository',
    description: 'A library that houses original books and user-submitted adaptations. Each story lives as part of a growing tree of creativity.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.467 9.53 5 8.243 5H6a2 2 0 00-2 2v10a2 2 0 002 2h2.243c1.287 0 2.589-.467 3.757-1.253M12 6.253C13.168 5.467 14.47 5 15.757 5H18a2 2 0 012 2v10a2 2 0 01-2 2h-2.243c-1.287 0-2.589-.467-3.757-1.253m0 0v13" />
      </svg>
    ),
  },
  {
    title: 'User-Generated Content Module',
    description: 'Readers become co-authors, submitting alternate chapters, new endings, or complete rewrites, with meticulous version control.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Interactive Reading Experience',
    description: 'Allows users to seamlessly switch between the original text and community interpretations, enhancing engagement.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-5 4v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Admin & Moderation Tools',
    description: 'Submissions go through a content approval workflow, with a powerful analytics dashboard to track engagement and top contributors.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944c3.546 0 6.758 1.54 9.074 4.047l-1.414 1.414zM12 21.056c-3.546 0-6.758-1.54-9.074-4.047l1.414-1.414z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '50+', label: 'Books Launched' },
  { value: '1,000+', label: 'Users in First Month' },
  { value: '300+', label: 'Versions Submitted' },
];

export default function DynamicBookCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study | Dynamic Book Platform</title>
        <meta name="description" content="A case study on building a platform where users can co-create and experience evolving stories." />
      </Head>

      <div className="bg-white font-sans text-gray-800 antialiased">
        <header className="py-24 text-center text-white" style={{ background: '#ff5010' }}>
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Case Study: Dynamic Book Platform
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Where Stories Evolve
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">The Challenge</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl" style={{ color: '#222222' }}>
              "What if books weren’t static? What if readers could experience new versions, plot twists, or alternate endings written by other users — all within one app?"
            </p>
            <div className="rounded-2xl shadow-xl p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
              <h3 className="text-2xl font-semibold text-black mb-4">Project Goals</h3>
              <ul className="list-disc text-left space-y-2 pl-5" style={{ color: '#222222' }}>
                <li>Build a book app that stores complete stories.</li>
                <li>Let users submit edits or alternative story versions.</li>
                <li>Allow the community to browse, read, and rate new versions.</li>
                <li>Keep the platform scalable for multiple book titles and large user traffic.</li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/case-study-solution.png" // Replace with a professional image
                  alt="Our Solution"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#222222' }}>
                  We developed an innovative mobile and web platform that transforms traditional reading into an interactive, co-creative process where every reader can become a writer, and every story can have endless possibilities.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: '#f5f5f5' }}>
                      <div className="flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: '#ff5010' }}>
                        {feature.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-black">{feature.title}</h4>
                      <p className="text-sm" style={{ color: '#222222' }}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">The Results</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#222222' }}>
                  The launch of the app was a notable success, with strong initial traction and remarkable user engagement. Our innovative features not only met the project goals but also fostered a vibrant, creative community.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  {stats.map((stat, index) => (
                    <div key={index} className="rounded-xl shadow-lg p-6" style={{ backgroundColor: '#f5f5f5' }}>
                      <p className="text-4xl font-extrabold" style={{ color: '#ff5010' }}>{stat.value}</p>
                      <p className="text-sm uppercase tracking-wide font-medium mt-2" style={{ color: '#222222' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#f5f5f5' }}>
                  <h3 className="text-2xl font-semibold text-black mb-4">Community Feedback</h3>
                  <p className="italic" style={{ color: '#222222' }}>
                    "Interactive," "refreshing," and "the future of digital reading."
                  </p>
                  <p className="text-sm mt-4" style={{ color: '#222222' }}>
                    — Overwhelmingly positive feedback from readers.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/case-study-results.png" // Replace with a professional image
                  alt="The Results"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}



